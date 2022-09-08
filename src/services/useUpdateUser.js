import { gql, useMutation } from "@apollo/client";

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      firstName
      lastName
      gender
      phone
      email
      dob
      avatar
    }
  }
`;

function useUpdateUser() {
  return useMutation(UPDATE_USER_MUTATION);
}

export default useUpdateUser;
