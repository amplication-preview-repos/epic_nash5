import { JsonValue } from "type-fest";
import { Response } from "../response/Response";
import { User } from "../user/User";

export type Request = {
  createdAt: Date;
  id: string;
  input: JsonValue;
  responses?: Array<Response>;
  updatedAt: Date;
  user?: User | null;
};
