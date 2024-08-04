/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ResponseCreateNestedManyWithoutRequestsInput } from "./ResponseCreateNestedManyWithoutRequestsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class RequestCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  input?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ResponseCreateNestedManyWithoutRequestsInput,
  })
  @ValidateNested()
  @Type(() => ResponseCreateNestedManyWithoutRequestsInput)
  @IsOptional()
  @Field(() => ResponseCreateNestedManyWithoutRequestsInput, {
    nullable: true,
  })
  responses?: ResponseCreateNestedManyWithoutRequestsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { RequestCreateInput as RequestCreateInput };
