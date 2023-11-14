import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private readonly service: UserService) {}

  handleCreateOne(req: Request, res: Response) {
    res.status(200).json({ path: req.originalUrl });
  }

  handleGetOne(req: Request, res: Response) {
    res.status(200).json({ path: req.originalUrl });
  }
}
