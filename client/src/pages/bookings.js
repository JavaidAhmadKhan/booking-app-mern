/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";

import AccountNavigation from "./account-navigation";
import PlaceImg from "../components/PlaceImg";
import { Link } from "react-router-dom";
import LoadingCircle from "../components/LoadingCircle";
import BookingDates from "../components/BookingDates";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <AccountNavigation />
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <LoadingCircle />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bookings?.length > 0 &&
            bookings.map((booking) => (
              <Link
                to={`/account/bookings/${booking._id}`}
                className="bg-gray-200 rounded-xl overflow-hidden"
              >
                <PlaceImg place={booking.place} />
                <div className="py-3 grow pr-3 truncate ">
                  <h2 className="text-lg font-bold mx-4">
                    {booking.place.title}
                  </h2>
                  <div className="text-sm font-medium pt-4 mx-4">
                    <BookingDates
                      booking={booking}
                      className={"mt-4 mb-2  text-gray-500"}
                    />
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium">Total Price: </p>
                      <p p className="text-lg font-medium">
                        ₹ {booking.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
