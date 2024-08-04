import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RequestTitle } from "../request/RequestTitle";

export const ResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="request.id" reference="Request" label="request">
          <SelectInput optionText={RequestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
