import { AppDataSource } from "../../src/data-source";
import { User } from "../entities/users.entity";
import { IUserRequest } from "../interfaces/users.interfaces";
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
