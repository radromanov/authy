import express, { Express, Request, Response, Router } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { Config } from "./Config";
import { Exception } from "./Exception";
import { pageNotFound } from "../utils/pageNotFound";
import { globalErrorHandler } from "../utils/globalErrorHandler";
import { UserModule } from "../api/user/user.module";
import { UserController } from "../api/user/user.controller";
import { UserService } from "../api/user/user.service";

export class Application {
  private router: Router;

  constructor(private readonly app: Express, private readonly config: Config) {
    this.router = Router();
  }

  /**
   * @todo Connect front-end to back-end
   */
  setup() {
    const userRoutes = new UserModule(
      this.app,
      new UserController(new UserService())
    ).init();

    this.setupMiddlewares();
    this.setupRoutes([
      {
        prefix: userRoutes.prefix,
        controller: userRoutes.controller,
      },
    ]);

    this.app.use(pageNotFound);
    this.app.use(globalErrorHandler);

    return this.app;
  }

  start() {
    const { SERVER_PORT, NODE_DEV } = this.config.get();

    return this.app.listen(SERVER_PORT, () =>
      console.log(`Server running on port ${SERVER_PORT}, in ${NODE_DEV} mode.`)
    );
  }

  private setupMiddlewares() {
    const MORGAN = this.config.getOne("MORGAN");

    this.app.use(morgan(MORGAN));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private setupRoutes(
    modules: {
      prefix: string;
      controller: Router;
    }[]
  ) {
    for (const mod of modules) {
      this.router.use(mod.prefix, mod.controller);
    }

    this.app.use("/api/v1", this.router);
  }
}
