import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation IncrementCounter {
    currentValue
  }
`;

function useRegister() {
  return useMutation(LOGIN_MUTATION);
}

export default useRegister;
