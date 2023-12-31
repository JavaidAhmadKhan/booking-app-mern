import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import LoadingCircle from "../components/LoadingCircle";
import Banner from "../components/Banner";
import TravelPoint from "../components/TravelPoint";
import KeyFeatures from "../components/KeyFeatures";

export const IndexPage = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="mt-12 mb-12">
        <Banner />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-96">
          <LoadingCircle />
        </div>
      ) : (
        <div className="mt-8 gap-x-6 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {places.length > 0 &&
            places.map((place) => (
              <Link to={"/place/" + place._id} key={place._id}>
                <div className="bg-gray-500 rounded-2xl flex mb-2">
                  {place.photos?.[0] && (
                    <Image
                      className="rounded-2xl object-cover aspect-square"
                      src={place.photos?.[0]}
                      alt=""
                    />
                  )}
                </div>
                <h2 className="font-bold">{place.address}</h2>
                <h3 className="text-smtext-gray-500/70">{place.title}</h3>
                <div className="mt-1">
                  <span className="text-sm font-bold">₹{place.price}</span> per
                  night
                </div>
              </Link>
            ))}
        </div>
      )}
      <>
        <TravelPoint />
      </>
      <>
        <KeyFeatures />
      </>
    </>
  );
};

export default IndexPage;
