import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../components/AddressLink";
import PlaceGallery from "../components/PlaceGallery";
import BookingDates from "../components/BookingDates";
import LoadingCircle from "../components/LoadingCircle";

const Booking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);

        if (foundBooking) {
          setBooking(foundBooking);
        }
        setLoading(false);
      });
    }
  }, [id]);

  if (!booking) {
    return (
      <div className="flex items-center justify-center h-96">
        <LoadingCircle />
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <LoadingCircle />
        </div>
      ) : (
        <div className="my-8">
          <h1 className="text-2xl">{booking.place.title}</h1>
          <AddressLink className={"my-2 block"}>
            {booking.place.address}
          </AddressLink>
          <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-200 p-6 my-6 rounded-2xl">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                Your booking information
              </h2>
              <BookingDates booking={booking} />
            </div>
            <div className="flex items-center gap-4 mt-4 bg-[#FF630B] px-6 py-3 text-white rounded-2xl pt-4">
              <div>
                <p className="text-lg font-medium">Total Price</p>
              </div>
              <div>
                <h2 className="text-xl font-medium">₹{booking.price}</h2>
              </div>
            </div>
          </div>
          <PlaceGallery place={booking.place} />
        </div>
      )}
    </>
  );
};

export default Booking;
