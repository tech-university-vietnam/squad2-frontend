import { gql, useQuery } from "@apollo/client";

const CURRENT_USER_GQL = gql`
  query {
    currentUser {
      id
      firstName
      lastName
      email
      phone
      dob
      avatar
      gender
    }
  }
`;

function useCurrentUser() {
  return useQuery(CURRENT_USER_GQL);
}

export default useCurrentUser;
