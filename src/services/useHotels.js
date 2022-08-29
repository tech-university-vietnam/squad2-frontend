import { gql, useQuery } from "@apollo/client";

const GET_HOTELS = gql`
  query Hotels($listHotelsInput: ListHotelsInput!) {
    hotels(listHotelsInput: $listHotelsInput) {
      meta {
        totalPages
        currentPage
      }
      items {
        id
        name
        price
        address
        images
      }
    }
  }
`;

function useHotels(listHotelsInput) {
  return useQuery(GET_HOTELS, {
    variables: {
      listHotelsInput,
    },
  });
}

export default useHotels;
