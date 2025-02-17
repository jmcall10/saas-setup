/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createLichessUser = /* GraphQL */ `mutation CreateLichessUser(
  $input: CreateLichessUserInput!
  $condition: ModelLichessUserConditionInput
) {
  createLichessUser(input: $input, condition: $condition) {
    id
    owner
    lichessUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLichessUserMutationVariables,
  APITypes.CreateLichessUserMutation
>;
export const updateLichessUser = /* GraphQL */ `mutation UpdateLichessUser(
  $input: UpdateLichessUserInput!
  $condition: ModelLichessUserConditionInput
) {
  updateLichessUser(input: $input, condition: $condition) {
    id
    owner
    lichessUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLichessUserMutationVariables,
  APITypes.UpdateLichessUserMutation
>;
export const deleteLichessUser = /* GraphQL */ `mutation DeleteLichessUser(
  $input: DeleteLichessUserInput!
  $condition: ModelLichessUserConditionInput
) {
  deleteLichessUser(input: $input, condition: $condition) {
    id
    owner
    lichessUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLichessUserMutationVariables,
  APITypes.DeleteLichessUserMutation
>;
