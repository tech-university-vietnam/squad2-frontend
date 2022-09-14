import { gql, useQuery } from "@apollo/client";

const CURRENT_USER_GQL = gql`
  query {
    currentUser {
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
  }
`;

function useBookings() {
  return useQuery(CURRENT_USER_GQL);
}

export default useBookings;
