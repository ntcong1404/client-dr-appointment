import CountUp from "react-countup";
import choose1 from "../assets/images/choose1.webp";
import choose2 from "../assets/images/choose2.webp";
import choose3 from "../assets/images/choose3.webp";
import choose4 from "../assets/images/choose4.webp";
import loca1 from "../assets/images/loca1.webp";
import loca2 from "../assets/images/loca2.webp";
import loca3 from "../assets/images/loca3.webp";
import Main from "../components/Main/Main";
import { Link } from "react-router-dom";

const reason = [
  {
    img: choose1,
    desc: "Over 45 years as a trusted brand with three tertiary hospitals and over 100 multi-disciplinary clinics",
    to: "/location/raffles-hospital-singapore",
  },
  {
    img: choose2,
    desc: "Leading integrated private healthcare provider in Asia, serving patients in 5 countries covering 14 cities",
    to: "/services",
  },
  {
    img: choose3,
    desc: "Continuum of care spanning primary to tertiary care",
    to: "/services",
  },
  {
    img: choose4,
    desc: "Patient-centric care driven by innovation, technology and service excellence",
    to: "/service/direct-billing-with-insurances",
  },
];

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
];

const Home = () => {
  return (
    <>
      <Main />

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center text-[#187F6B]">
              WHY CHOOSE US
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {reason?.map((item, index) => (
              <div key={index} className=" relative">
                <div className="py-[30px] px-5">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-1/2 h-1/2"
                      src={item?.img}
                      alt={item?.desc}
                    />
                  </div>

                  <div className="h-full mt-[30px]  ">
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 ">
                      {item?.desc}
                    </p>
                    <a
                      href={item?.to}
                      className=" absolute bottom-0 text-[#187F6B] hover:underline"
                    >
                      See more...
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-[#187F6B]">
              HOSPITAL & CLINICS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {location?.map((item, index) => (
              <div
                key={index}
                className="py-[30px] px-5 flex flex-wrap items-center justify-center"
              >
                <div className="flex items-center justify-center ">
                  <Link to={item?.to}>
                    <div className="hover:cursor-pointer group relative">
                      <div className=" overflow-hidden">
                        <img
                          className=" w-full h-1/2 group-hover:blur-sm hover:cursor-pointer transform group-hover:scale-125 transition duration-700 ease-in-out"
                          src={item?.img}
                          alt={item?.desc}
                        />
                      </div>
                      <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] scale-0 group-hover:transform group-hover:scale-125 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out ">
                        <p className=" text-[11px] text-white">{item?.desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className=" mt-[20px]  ">
                  <div className="text-[18px] leading-7  text-textColor font-[400] mt-4 mb-4 ">
                    {item?.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" pb-20 pt-0 ">
        <div className="container">
          <div className=" flex-col flex justify-evenly items-center lg:flex-row">
            <div className="w-[250px] h-[250px] my-6 flex flex-col justify-center rounded-full shadow-lg border bg-slate-50 items-center">
              <CountUp
                start={0}
                end={1000}
                delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={500}
              >
                {({ countUpRef }) => (
                  <div className=" text-5xl text-blue-500 font-bold p-2">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <span className="text-xl font-bold text-slate-500">
                Satisfied
                <br />
                Patients
              </span>
            </div>
            <div className="w-[250px] h-[250px] my-6 flex flex-col justify-center rounded-full shadow-lg border bg-slate-50 items-center">
              <CountUp
                start={0}
                end={250}
                delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={500}
              >
                {({ countUpRef }) => (
                  <div className=" text-5xl text-blue-500 font-bold p-2">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <span className="text-xl font-bold text-slate-500">
                Verified
                <br />
                Doctors
              </span>
            </div>
            <div className="w-[250px] h-[250px] my-6 flex flex-col justify-center rounded-full shadow-lg border bg-slate-50 items-center">
              <CountUp
                start={0}
                end={75}
                delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={500}
              >
                {({ countUpRef }) => (
                  <div className=" text-5xl text-blue-500 font-bold p-2">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <span className="text-xl font-bold text-slate-500">
                Specialist
                <br />
                Doctors
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
