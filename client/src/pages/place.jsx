import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../components/BookingWidget";
import PlaceGallery from "../components/PlaceGallery";
import AddressLink from "../components/AddressLink";
import LoadingCircle from "../components/LoadingCircle";

const Place = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`places/${id}`).then((response) => {
      setPlace(response.data);
      setLoading(false);
    });
  }, [id]);

  if (!place)
    return (
      <div className="flex items-center justify-center h-96">
        <LoadingCircle />
      </div>
    );

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <LoadingCircle />
        </div>
      ) : (
        <div className="mt-4 bg-gray-50 -mx-8 px-8 pt-8">
          <h1 className="text-3xl">{place.title}</h1>
          <AddressLink>{place.address}</AddressLink>
          <PlaceGallery place={place} />
          <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
            <div>
              <div className="my-4">
                <h2 className="font-semibold text-2xl truncate">Description</h2>
                {place.description}
              </div>
              Check-in: {place.checkIn}
              <br />
              Check-out: {place.checkOut}
              <br />
              Max number of guests: {place.maxGuests}
            </div>
            <div>
              <BookingWidget place={place} />
            </div>
          </div>
          <div className="bg-white -mx-8 px-8 py-8 border-t">
            <div>
              <h2 className="font-semibold text-2xl">Extra Info</h2>
            </div>
            <div className="text-sm text-gray-700 leading-5 mb-4 mt-2">
              {place.extraInfo}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Place;
