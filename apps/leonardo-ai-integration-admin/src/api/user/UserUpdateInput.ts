import { RequestUpdateManyWithoutUsersInput } from "./RequestUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  requests?: RequestUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
