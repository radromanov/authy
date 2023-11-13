import dotenv from "dotenv";
import z from "zod";

const ConfigSchema = z.object({
  SERVER_PORT: z.number(),
  NODE_DEV: z.enum(["development", "staging", "production", "test"]),
  MORGAN: z.enum(["dev", "common", "short", "tiny", "combined"]),
});

type ConfigSchema = z.infer<typeof ConfigSchema>;

export class Config {
  private readonly config;
  constructor() {
    // Load env variables
    dotenv.config();
    this.config = this.load(ConfigSchema);
  }

  /**
   * `extends` adds a constraint to `T` to be of the extended type, so it's not `any` type
   */
  private load<T extends ConfigSchema>(schema: z.ZodSchema<T>) {
    return schema.parse({
      SERVER_PORT: parseInt(process.env.SERVER_PORT || "8080"),
      NODE_DEV: process.env.NODE_DEV,
      MORGAN: process.env.MORGAN,
    });
  }

  get() {
    return this.config;
  }

  getOne<T extends keyof ConfigSchema>(key: T) {
    return this.config[key];
  }
}
