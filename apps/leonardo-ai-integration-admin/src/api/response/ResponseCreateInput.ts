import { InputJsonValue } from "../../types";
import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";

export type ResponseCreateInput = {
  output?: InputJsonValue;
  request?: RequestWhereUniqueInput | null;
};
