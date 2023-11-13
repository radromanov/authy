const EXCEPTION = {
  "Bad Request": 400,
  Unathorized: 401,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  Conflict: 409,
  "Unprocessable Entity": 422,
  "Too Many Requests": 429,
  "Internal Server Error": 500,
  "Service Unavailable": 503,
} as const;

export class Exception extends Error {
  public message;
  public type;
  public status;

  constructor(message: string, type: keyof typeof EXCEPTION) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.message = message;
    this.type = type;
    this.status = EXCEPTION[type];
  }

  log() {
    console.log({
      message: this.message,
      type: this.type,
      status: this.status,
    });

    return {
      message: this.message,
      type: this.type,
      status: this.status,
    };
  }
}
