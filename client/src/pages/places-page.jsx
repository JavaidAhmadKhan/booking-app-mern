import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import AccountNavigation from "./account-navigation";
import PlaceImg from "./PlaceImg";
import LoadingCircle from "../components/LoadingCircle";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <AccountNavigation />
      <div className="text-center">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to="/account/places/new"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add a new Place
        </Link>
      </div>
      <div className="mt-4">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <LoadingCircle />
          </div>
        ) : (
          <>
            {places.length > 0 &&
              places.map((place) => (
                <Link
                  to={`/account/places/${place._id}`}
                  className="flex flex-col lg:flex-row gap-4 bg-gray-100 p-4 rounded-2xl cursor-pointer"
                  key={place._id}
                >
                  <div className="flex bg-gray-300 grow shrink-0">
                    <PlaceImg place={place} />
                  </div>
                  <div className="grow-0 shrink ">
                    <h2 className="text-xl font-bold">{place.title}</h2>
                    <p className="text-md mt-2 leading-8">
                      {place.description}
                    </p>
                  </div>
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
