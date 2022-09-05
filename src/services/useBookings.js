import { gql, useQuery } from "@apollo/client";

const GET_BOOKINGS = gql`
  query Bookings {
    bookings {
      id
      checkIn
      checkOut

      hotel {
        name
        address
        images
      }
      user {
        id
      }
    }
  }
`;

function useBookings() {
  return useQuery(GET_BOOKINGS);
}

export default useBookings;
