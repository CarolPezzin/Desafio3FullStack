import { AppDataSource } from "../../src/data-source";
import { User } from "../entities/users.entity";
import { IUserRequest, IUserUpdateRequest } from "../interfaces/users.interfaces";
import { hash } from "bcrypt";

export const createUserService = async ({
  name,
  email,
  password,
  fone,
  isAdm,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    fone,
    isAdm,
  });

  await userRepository.save(user)
  return user
};

export const listUserService = async(): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    return users
};

export const updateUserService = async({ name, email, password, fone }: IUserUpdateRequest, id: string): Promise<User | Array<string | number>> => {

  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({
      id
  })

  if(!findUser){
      return ['User not found', 404]
  }

  await userRepository.update(
      id,
      {
          name: name ? name : findUser.name,
          email: email ? email : findUser.email,
          password: password ? await hash(password, 10) : findUser.password,
          fone: fone ? fone : findUser.fone
      }
  )

  const user = await userRepository.findOneBy({
      id
  })

  return user!

};

export const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOne({
    where: {
      id: id,
    },
  })

  if (!account) {
    throw new Error("User not found");
  }
  if (!account.isActive) {
    throw new Error("User is inactive");
  }

  await userRepository.update(account!.id, {
    isActive: false,
  });

  return true;
};
