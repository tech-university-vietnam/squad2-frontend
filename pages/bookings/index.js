import useBookings from "../../src/services/useBookings";
import Link from "next/link";
import routes from "../../src/config/routes";

const BookingPage = () => {
  const { data } = useBookings();
  const bookings = data?.bookings || [];
  return (
    <div>
      {bookings.map((booking) => {
        return (
          <Link
            key={`booking_${booking.id}`}
            href={routes.booking_detail(booking.id)}
          >
            {booking.hotel.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BookingPage;
