import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation IncrementCounter {
    currentValue
  }
`;

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

function useRegister() {
  return useMutation(LOGIN_MUTATION);
}

export default useRegister;

export { useRegister, useCreateUser };
