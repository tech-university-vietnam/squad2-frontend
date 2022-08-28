import { gql, useQuery } from "@apollo/client";

const GET_HOTELS = gql`
  query {
    hotels {
      id
      name
      phone
      price
      description
      address
      images
      description
    }
  }
`;

function useHotels() {
  return useQuery(GET_HOTELS);
}

export default useHotels;
