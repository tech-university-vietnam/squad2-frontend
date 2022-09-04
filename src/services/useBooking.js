import { gql, useQuery } from "@apollo/client";

const GET_BOOKING = gql`
  query Booking($id: Int!) {
    booking(id: $id) {
      id
      checkIn
      checkOut
      hotel {
        id
        name
        price
        address
        images
      }
      user {
        id
      }
      createdAt
      totalPrice
    }
  }
`;

function useBooking(id) {
  return useQuery(GET_BOOKING, {
    variables: {
      id,
    },
  });
}

export default useBooking;
