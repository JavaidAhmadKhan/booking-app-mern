import Image from "../components/Image";

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover w-[350px] h-[292px]";
  }
  return <Image className={className} src={place.photos[index]} alt="" />;
}
