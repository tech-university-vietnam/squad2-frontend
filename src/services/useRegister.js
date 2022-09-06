import { gql, useMutation } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      firstName
      lastName
      gender
      phone
      email
      dob
    }
  }
`;

function useCreateUser() {
  return useMutation(CREATE_USER_MUTATION);
}

export default useCreateUser;
