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
          <div key={`booking_${booking.id}`}>
            <Link href={routes.booking_detail(booking.id)}>
              <a>
                {booking.id} - {booking.hotel.name}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BookingPage;
