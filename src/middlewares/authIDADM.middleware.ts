import { Request, Response, NextFunction } from "express";
export const authId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
  const idParams = req.params.id;
  if (userId !== idParams && !req.user.isAdm) {
    return res.status(401).json({
      message: "User don't have access",
    });
  }
  next();
};
