import { Express, Router } from "express";

import { UserController } from "./user.controller";

export class UserModule {
  private readonly router: Router;
  constructor(
    private readonly app: Express,
    private readonly controller: UserController
  ) {
    this.router = Router();
  }

  init() {
    this.setupRoutes();

    return { prefix: "/user", controller: this.router };
  }

  private setupRoutes() {
    this.router.get("/", this.controller.handleGetOne);
    this.router.post("/sign-up", this.controller.handleCreateOne);

    this.app.use(this.router);
  }
}
