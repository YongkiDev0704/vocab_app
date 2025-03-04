import { gql } from "@apollo/client";

export const CREATE_VOCAB_MUTATION = gql`
  mutation CreateVocab($data: CreateVocabInput!) {
    createVocab(data: $data) {
      success
      error
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($data: LoginUserInput!) {
    loginUser(data: $data) {
      success
      error
      token
    }
  } 
`;
