import { gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function useHotels() {
  return useQuery(GET_LOCATIONS);
}

export default useHotels;
