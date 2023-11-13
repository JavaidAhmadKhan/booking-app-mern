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
        <div className="flex items-center justify-center p-12">
          <LoadingCircle />
        </div>
      ) : (
        <div>
          {bookings?.length > 0 &&
            bookings.map((booking) => (
              <Link
                to={`/account/bookings/${booking._id}`}
                className="flex flex-col lg:flex-row gap-4 bg-gray-200 rounded-xl overflow-hidden"
              >
                <div className="w-full lg:w-48">
                  <PlaceImg place={booking.place} />
                </div>
                <div className="py-3 grow pr-3 ">
                  <h2 className="text-xl font-bold mx-4">{booking.place.title}</h2>
                  <div className="text-xl">
                    <BookingDates
                      booking={booking}
                      className={"mt-4 mb-2  text-gray-500"}
                    />
                    <div className="flex flex-row gap-1 items-center mx-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-lg font-medium">
                        Total Price: ₹{booking.price}
                      </span>
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
