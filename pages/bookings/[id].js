import { useRouter } from "next/router";

const BookingDetail = () => {
  const router = useRouter();
  const { id: bookingId } = router.query;
  return <div />;
};

export default BookingDetail;
