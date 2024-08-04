import { RequestCreateNestedManyWithoutUsersInput } from "./RequestCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  requests?: RequestCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
