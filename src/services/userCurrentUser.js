import { gql, useQuery } from "@apollo/client";

const CURRENT_USER_GQL = gql`
  query {
    currentUser {
      id
    }
  }
`;

function useCurrentUser() {
  return useQuery(CURRENT_USER_GQL);
}

export default useCurrentUser;
