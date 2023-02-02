import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";

export const authId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
 
  const userRepository = AppDataSource.getRepository(User);

  const professional = await userRepository.findOneBy({
    id: userId,
  });

  console.log(professional);
  if (userId !== professional?.id) {
    return res.status(401).json({
      message: "User don't have access",
    });
  }
  next();
};
