import clientsImg from "../assets/client.png";
import BannerImg from "../assets/banner.png";
import bgBanner from "../assets/layer.png";
import { Building2, MapPin, PlayCircle } from "lucide-react";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-24 pt-12 lg:pt-24">
        <div className="">
          <button className="flex items-center gap-4 bg-slate-100 py-3 px-4 rounded-2xl text-[#FF630B] font-bold text-sm">
            Explore the world!
            <Building2 />
          </button>
          <h1 className="text-[24px] lg:text-[69px] font-bold leading-tight mt-11">
            Travel <span className="text-[#FF630B]">top destination</span>{" "}
            <br />
            of the world
          </h1>
          <p className="text-[#19182580] text-base font-normal mt-11">
            We always make our customer happy by providing <br /> as many
            choices as possible
          </p>
          <div className="flex gap-6">
            <button className="mt-11 bg-[#FF630B] rounded-full text-white text-sm font-bold py-3 px-6">
              Get Started
            </button>
            <button className="flex flex-row-reverse items-center gap-4 mt-11 bg-slate-100 rounded-full  text-sm font-bold py-3 px-6">
              Watch Demo
              <PlayCircle color="#5D50C6" />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0">
            <img className="" src={bgBanner} alt="" />
          </div>
          <img
            className="object-cover w-full h-auto object-center"
            src={BannerImg}
            alt="banner"
          />
          <div className="absolute top-24 lg:top-96 right-[-5px] lg:right-[-50px] ">
            <button className="flex flex-row-reverse items-center gap-2 bg-white py-2 px-2 rounded-2xl  font-bold text-sm">
              Top Places
              <MapPin color="#FF630B" size={22} />
            </button>
          </div>
        </div>
      </div>
      <img src={clientsImg} alt="clients" />
    </>
  );
};

export default Banner;
