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
    }
  }
`;

function useCreateUser(createUserInput) {
  return useMutation(CREATE_USER_MUTATION, {
    variables: {
      createUserInput,
    },
  });
}

export default useCreateUser;
