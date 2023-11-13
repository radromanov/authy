import express, { Express, Request, Response, Router } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { Config } from "./Config";
import { pageNotFound } from "../utils/pageNotFound";
import { globalErrorHandler } from "../utils/globalErrorHandler";
import { Exception } from "./Exception";

export class Application {
  private router: Router;

  constructor(private readonly app: Express, private readonly config: Config) {
    this.router = Router();
  }

  /**
   * @todo Error handling - global and 404
   * @todo Connect front-end to back-end
   */
  setup() {
    this.setupMiddlewares();
    this.setupRoutes([
      {
        prefix: "/health",
        controller: (_req, res) => res.status(200).json({ health: "ok" }),
      },
      {
        prefix: "/error",
        controller: (_req, _res) => {
          throw new Exception("Some error", "Internal Server Error");
        },
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
      controller: (req: Request, res: Response) => void;
    }[]
  ) {
    for (const mod of modules) {
      this.router.use(mod.prefix, mod.controller);
    }

    this.app.use("/api/v1", this.router);
  }
}
