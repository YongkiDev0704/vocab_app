import type { IExecutableSchemaDefinition } from "@graphql-tools/schema";
import gql from "graphql-tag";

import { GraphqlContext } from "./types";

export const typeDefs: IExecutableSchemaDefinition<GraphqlContext>["typeDefs"] = gql`
  enum VocabLevelType {
    A1
    A2
    B1
    B2
    C1
  }

  enum UserRole {
    Admin
    Normal
  }

  type User {
    _id: ID!
    userName: String!
    password: String!
    role: UserRole
  }

  type Vocab {
    _id: ID!
    word: String!
    level: VocabLevelType!
    exampleSentence: String!
    exampleSentenceKr: String!
    meaningKr: String!
    meaningEn: String!
    imageUrl: String
    pronunciationEn: String
    pronunciationKr: String
  }

  input CreateVocabInput {
    word: String!
    level: VocabLevelType!
    exampleSentence: String!
    exampleSentenceKr: String!
    meaningKr: String!
    meaningEn: String!
    imageUrl: String
    pronunciationEn: String
    pronunciationKr: String
  }

  input CreateUserInput {
    userName: String!
    password: String!
    role: UserRole!
  }

  input LoginUserInput {
    userName: String!
    password: String!
  }

  type CreateVocabResult {
    success: Boolean!
    error: String
  }

  type CreateUserResult {
    success: Boolean!
    error: String
  }

  type GetVocabByWordResult {
    success: Boolean!
    error: String
    data: Vocab
  }

  type PaginateVocabResult {
    docs: [Vocab]!
    totalDocs: Int!
    limit: Int!
    totalPages: Int!
    page: Int
    pagingCounter: Int!
    hasPrevPage: Boolean!
    hasNextPage: Boolean!
    prevPage: Int
    nextPage: Int
  }

  type LoginUserResult {
    success: Boolean!
    error: String
    token: String
  }

  type CheckAdminAuthResult {
    success: Boolean!
    error: String
  }

  type Mutation {
    createVocab(data: CreateVocabInput!): CreateVocabResult!
    createUser(data: CreateUserInput!): CreateUserResult!
    loginUser(data: LoginUserInput!): LoginUserResult!
  }

  type Query {
    getVocabByWord(word: String!): GetVocabByWordResult!
    getPaginatedVocab(page: Int!, limit: Int!): PaginateVocabResult!
    checkAdminAuth: CheckAdminAuthResult!
  }
`;
