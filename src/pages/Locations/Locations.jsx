import main_loca from "../../assets/images/main_loca.webp";
import loca1 from "../../assets/images/loca1.webp";
import loca2 from "../../assets/images/loca2.webp";
import loca3 from "../../assets/images/loca3.webp";
import loca4 from "../../assets/images/loca4.webp";

const location = [
  {
    img: loca1,
    desc: "RAFFLES MEDICAL – HCMC",
    to: "/location/raffles-medical-ho-chi-minh-city",
  },
  {
    img: loca2,
    desc: "RAFFLES MEDICAL – HANOI",
    to: "/location/raffles-medical-hanoi",
  },
  {
    img: loca3,
    desc: "RAFFLES MEDICAL – VUNGTAU",
    to: "/location/raffles-medical-vung-tau",
  },
  {
    img: loca4,
    desc: "RAFFLES MEDICAL – SINGAPORE",
    to: "/location/raffles-hospital-singapore",
  },
];
const Locations = () => {
  return (
    <div>
      <div className="relative">
        <div className="lg:w-full mx-auto">
          <img src={main_loca} className=" w-full h-auto object-cover" />
        </div>
        <div className=" absolute top-1/3 left-1/2 translate-x-[-50%] text-white">
          <p className="py-1 font-semibold text-[30px] md:text-[40px] text-center lg:font-semibold lg:text-[60px] ">
            HOSPITAL & CLINICS
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 mt-[10px] lg:mt-[10px]">
            {location?.map((item, index) => (
              <a
                href={item?.to}
                key={index}
                className=" flex flex-wrap items-center justify-center rounded-md shadow-md group"
              >
                <div className=" overflow-hidden">
                  <img
                    className=" w-full h-auto rounded-t-md group-hover:scale-105 "
                    src={item?.img}
                    alt={item?.desc}
                  />
                </div>

                <div className=" mt-[20px]  ">
                  <div className="text-[15px] leading-7  text-textColor font-[400] mt-4 mb-4 ">
                    {item?.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto mb-4">
            <h2 className="heading text-center text-[#187F6B]">HIGHLIGHT</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
