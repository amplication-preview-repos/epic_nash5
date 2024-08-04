import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RequestWhereUniqueInput } from "../request/RequestWhereUniqueInput";

export type ResponseWhereInput = {
  id?: StringFilter;
  output?: JsonFilter;
  request?: RequestWhereUniqueInput;
};
