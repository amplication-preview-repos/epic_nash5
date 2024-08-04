import { Request } from "../request/Request";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  requests?: Array<Request>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
