<<<<<<< HEAD
declare class Response<TPayload> {
=======
declare class Reponse<TPayload> {
>>>>>>> Add initial types for base/http folders
  constructor(statusCode: number, body: TPayload);
  toString(): string;
}

export = Response;