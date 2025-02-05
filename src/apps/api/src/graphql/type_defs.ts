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

  type CreateVocabResult {
    success: Boolean!
    error: String
  }

  type GetVocabByWordResult {
    success: Boolean!
    error: String
    data: Vocab
  }

  type Mutation {
    createVocab(data: CreateVocabInput!): CreateVocabResult!
  }

  type Query {
    getVocabByWord(word: String!): GetVocabByWordResult!
  }
`