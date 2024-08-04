import { InputJsonValue } from "../../types";
import { ResponseCreateNestedManyWithoutRequestsInput } from "./ResponseCreateNestedManyWithoutRequestsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestCreateInput = {
  input?: InputJsonValue;
  responses?: ResponseCreateNestedManyWithoutRequestsInput;
  user?: UserWhereUniqueInput | null;
};
