import TravelGirl from "../assets/travel.png";

const travelData = [
  {
    id: 1,
    totalPackages: "100+",
    packageName: "Holiday Package",
  },
  {
    id: 2,
    totalPackages: "100+",
    packageName: "Holiday Package",
  },
  {
    id: 3,
    totalPackages: "100+",
    packageName: "Holiday Package",
  },
  {
    id: 4,
    totalPackages: "100+",
    packageName: "Holiday Package",
  },
];

const TravelPoint = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 lg:px-24 pt-12">
        <div className="col-span-7">
          <img className="object-cover object-center" src={TravelGirl} alt="" />
        </div>
        <div className="col-span-5">
          <h1 className="text-[#FF630B] text-[23px] font-bold uppercase">
            Travel Point
          </h1>
          <h2 className="text-[#191825] text-[44px] font-bold">
            We helping you find <br /> your dream location
          </h2>
          <p className="text-[#19182580] text-[18px] font-normal pt-4 pb-8">
            Contrary to popular belief, Lorem Ipsum is not <br /> simply random
            text. It has roots in a piece of <br /> classical Latin literature
            from 45 BC.
          </p>
          <div>
            <div className="grid grid-cols-2 gap-4 max-w-fit">
              {travelData.map((travel) => (
                <div key={travel.id}>
                  <div className="bg-slate-100 p-2 rounded-2xl ">
                    <h2 className="text-[#FF630B] text-[35px] font-bold text-center">
                      {travel.totalPackages}
                    </h2>
                    <p className="text-center text-[#191825] text-[18px] font-normal pt-4">
                      {travel.packageName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelPoint;
