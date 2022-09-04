import { gql, useQuery } from "@apollo/client";

const GET_HOTEL = gql`
  query Hotel($id: Int!) {
    hotel(id: $id) {
        id
        name
        price
        address
        images
        phone
        facilities
        description
    }
  }
`;

function useHotel(id) {
  return useQuery(GET_HOTEL, {
    variables: {
      id,
    },
  });
}

export default useHotel;
