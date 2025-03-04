import { gql } from "@apollo/client";

export const CHECK_AUTH = gql`
  query checkAdminAuth {
    checkAdminAuth {
      success
      error
    }
  }
`;
