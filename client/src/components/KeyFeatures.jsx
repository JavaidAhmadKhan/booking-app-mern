import { Calendar, MapPin, MapPinIcon, Ticket } from "lucide-react";
import Bg_1 from "../assets/bg_image.png";
import Bg_2 from "../assets/bg_1.png";
import Bg_3 from "../assets/bg_2.png";

const bestServices = [
  {
    icon: <MapPin />,
    offerHeading: "We offer best services",
    offerDescription: "Lorem Ipsum is not simply random text",
  },
  {
    icon: <MapPin />,
    offerHeading: "Schedule your trip",
    offerDescription: "It has roots in a piece of classical",
  },
  {
    icon: <MapPin />,
    offerHeading: "Get discounted coupons",
    offerDescription: "Lorem Ipsum is not simply random text",
  },
];

const KeyFeatures = () => {
  const submitHandler = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <div className="grid grid-cols-1  lg:grid-cols-12 px-4 lg:px-24 pt-24 pb-24">
        <div className="col-span-6">
          <h1 className="text-[23px] font-bold uppercase text-[#FF630B]">
            Key features
          </h1>
          <h2 className="text-[#191825] text-[44px] font-bold">
            We offer best services
          </h2>
          <p className="text-[#19182580] text-[18px] font-normal">
            Contrary to popular belief, Lorem Ipsum is not simply random <br />{" "}
            text. It has roots in a piece of classical Latin literature <br />{" "}
            from 45 BC.
          </p>
        </div>
        <div className="col-span-6">
          <div className="relative">
            <div className="absolute top-[-50px] left-[250px]">
              <img className="object-contain object-center" src={Bg_1} alt="" />
            </div>
            <div className="absolute">
              <img className="object-contain object-center" src={Bg_2} alt="" />
            </div>
            <div className="absolute top-[260px] left-[150px]">
              <img className="object-contain object-center" src={Bg_3} alt="" />
            </div>
          </div>
          <div className="absolute right-[45px] lg:right-[150px] bottom-[-4500px] lg:bottom-[-2300px]">
            <button
              onClick={submitHandler}
              className="flex items-center gap-4 bg-white py-3 px-6 rounded-3xl text-[#191825] text-[23px] font-bold"
            >
              <MapPin color="#FF5722" />
              Paradise on Earth
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[500px] lg:pt-24 px-4 lg:px-24">
        <div className=" flex items-center gap-4 ">
          <div className="bg-[#FF630B] py-6 px-6 rounded-2xl">
            <MapPinIcon color="#fff" />
          </div>
          <div>
            <div>
              <h2 className="text-[#191825] text-[23px] font-bold">
                We offer best services
              </h2>
            </div>
            <div>
              <p className="text-[#19182580] text-[18px] font-normal">
                Lorem Ipsum is not simply random text
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-4  pt-12">
          <div className="bg-[#FACD49] py-6 px-6 rounded-2xl">
            <Calendar color="#fff" />
          </div>
          <div>
            <div>
              <h2 className="text-[#191825] text-[23px] font-bold">
                We offer best services
              </h2>
            </div>
            <div>
              <p className="text-[#19182580] text-[18px] font-normal">
                Lorem Ipsum is not simply random text
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-4 pt-12 ">
          <div className="bg-[#F85E9F] py-6 px-6 rounded-2xl">
            <Ticket color="#fff" />
          </div>
          <div>
            <div>
              <h2 className="text-[#191825] text-[23px] font-bold">
                We offer best services
              </h2>
            </div>
            <div>
              <p className="text-[#19182580] text-[18px] font-normal">
                Lorem Ipsum is not simply random text
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
