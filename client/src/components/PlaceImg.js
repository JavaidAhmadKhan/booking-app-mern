import Image from "./Image";

/* eslint-disable react/prop-types */
const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.photos?.length) {
    return "";
  }

  if (!className) {
    className = "object-cover";
  }
  return <Image className={className} src={place.photos[index]} alt="place" />;
};

export default PlaceImg;
