declare class Reponse<TPayload> {
  constructor(statusCode: number, body: TPayload);
  toString(): string;
}

export = Response;