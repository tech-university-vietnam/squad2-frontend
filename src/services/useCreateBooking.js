import { gql, useMutation } from "@apollo/client";

const CREATE_BOOKING_MUTATION = gql`
  mutation createBooking($createBookingInput: CreateBookingInput!) {
    createBooking(createBookingInput: $createBookingInput) {
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

function useCreateBooking() {
  return useMutation(CREATE_BOOKING_MUTATION);
}

export default useCreateBooking;
