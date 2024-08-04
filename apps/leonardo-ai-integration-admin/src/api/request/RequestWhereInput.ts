import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RequestWhereInput = {
  id?: StringFilter;
  input?: JsonFilter;
  responses?: ResponseListRelationFilter;
  user?: UserWhereUniqueInput;
};
