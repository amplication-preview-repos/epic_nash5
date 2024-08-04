import { JsonValue } from "type-fest";
import { Request } from "../request/Request";

export type Response = {
  createdAt: Date;
  id: string;
  output: JsonValue;
  request?: Request | null;
  updatedAt: Date;
};
