/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateLichessUser = /* GraphQL */ `subscription OnCreateLichessUser(
  $filter: ModelSubscriptionLichessUserFilterInput
  $owner: String
) {
  onCreateLichessUser(filter: $filter, owner: $owner) {
    id
    owner
    lichessUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLichessUserSubscriptionVariables,
  APITypes.OnCreateLichessUserSubscription
>;
export const onUpdateLichessUser = /* GraphQL */ `subscription OnUpdateLichessUser(
  $filter: ModelSubscriptionLichessUserFilterInput
  $owner: String
) {
  onUpdateLichessUser(filter: $filter, owner: $owner) {
    id
    owner
    lichessUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLichessUserSubscriptionVariables,
  APITypes.OnUpdateLichessUserSubscription
>;
export const onDeleteLichessUser = /* GraphQL */ `subscription OnDeleteLichessUser(
  $filter: ModelSubscriptionLichessUserFilterInput
  $owner: String
) {
  onDeleteLichessUser(filter: $filter, owner: $owner) {
    id
    owner
    lichessUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLichessUserSubscriptionVariables,
  APITypes.OnDeleteLichessUserSubscription
>;
