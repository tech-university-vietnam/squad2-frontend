import { gql, useMutation } from "@apollo/client";

const GET_USER = gql`
  mutation IncrementCounter {
    currentValue
  }
`;

function useRegister() {
  return useMutation(GET_USER);
}

export default useRegister;
