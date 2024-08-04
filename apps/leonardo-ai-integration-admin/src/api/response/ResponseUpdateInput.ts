import { InputJsonValue } from "../../types";
import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";

export type ResponseUpdateInput = {
  output?: InputJsonValue;
  request?: RequestWhereUniqueInput | null;
};
