import { InputJsonValue } from "../../types";
import { ResponseUpdateManyWithoutRequestsInput } from "./ResponseUpdateManyWithoutRequestsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestUpdateInput = {
  input?: InputJsonValue;
  responses?: ResponseUpdateManyWithoutRequestsInput;
  user?: UserWhereUniqueInput | null;
};
