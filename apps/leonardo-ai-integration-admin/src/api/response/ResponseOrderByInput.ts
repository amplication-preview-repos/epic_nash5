import { SortOrder } from "../../util/SortOrder";

export type ResponseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  output?: SortOrder;
  requestId?: SortOrder;
  updatedAt?: SortOrder;
};
