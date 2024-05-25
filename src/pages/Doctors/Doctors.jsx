import { IoMdClose } from "react-icons/io";
import main_doc from "../../assets/images/main_doc.webp";
import * as Service from "../../service/Service";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState();
  const [doctor, setDoctor] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Service.adminGetAllDoctors()
      .then((res) => setDoctors(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className=" relative">
        <div className="lg:w-full mx-auto">
          <img src={main_doc} className=" w-full h-auto object-cover" />
        </div>
        <div className=" absolute top-1/3 left-1/2 translate-x-[-50%] text-[#187F6B]">
          <p className="py-1 font-semibold text-[20px] md:text-[35px] text-center lg:font-semibold lg:text-[50px] ">
            YOUR TRUSTED PARTNER
          </p>
          <p className="py-1 text-[15px] md:text-[25px] font-medium text-center lg:font-medium lg:text-[35px]">
            for Health
          </p>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto mb-4">
            <h2 className="heading text-center text-[#187F6B]">OUR DOCTORS</h2>
          </div>
          <div>
            <ul className="mt-[30px]">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 mt-[30px] lg:mt-[55px]">
                {doctors?.map((doctor, index) => (
                  <div
                    onClick={() => {
                      setDoctor(doctor);
                      setShowModal(true);
                    }}
                    key={index}
                    className="flex flex-wrap items-center justify-center border border-[#f3defa] rounded-md shadow-md group cursor-pointer"
                  >
                    <div className=" overflow-hidden w-full h-[350px]">
                      <img
                        className="w-full h-full object-cover rounded-t-md group-hover:scale-105 "
                        src={doctor.img}
                        alt={doctor.name}
                      />
                    </div>
                    <div className=" my-4 text-center text-[#1e375a] ">
                      <div className="text-[15px] font-semibold my-2 ">
                        {doctor.name}
                      </div>
                      <div className="text-[15px]  my-2 ">
                        {doctor.specialty}
                      </div>
                      <div className="text-[15px] text-[#1e375a7a] my-2 ">
                        {doctor.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </section>
      {showModal && (
        <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            onClick={() => {
              setDoctor();
              setShowModal(false);
            }}
            className="w-full h-full bg-black  opacity-40 "
          ></div>
          <div className=" bg-[#faf8f6] w-3/4 lg:w-1/2 absolute top-18 mx-auto rounded-md shadow-lg z-50 p-8">
            <h2 className=" text-[#a69279] text-2xl lg:text-4xl font-extrabold text-center p-2 my-2">
              {doctor.name}
            </h2>
            <IoMdClose
              onClick={() => {
                setDoctor();
                setShowModal(false);
              }}
              className=" absolute top-8 right-4 text-[#a69279] cursor-pointer z-50 w-6 h-6 rounded-full text-center hover:shadow hover:shadow-slate-400"
            />
            <div className="text-[#a69279] text-[13px]">
              <div className="grid grid-cols-3 gap-4">
                <div className=" col-span-2">
                  <div className="py-2">
                    <p className="mb-1 text-[16px] font-semibold ">Specialty</p>
                    <p>{doctor.specialty}</p>
                  </div>
                  <div className="py-2">
                    <p className="mb-1 text-[16px] font-semibold ">
                      Special Interests
                    </p>
                    <p>{doctor.specialInterests}</p>
                  </div>
                  <div className="py-2">
                    <p className="mb-1 text-[16px] font-semibold ">Language</p>
                    <p>{doctor.language}</p>
                  </div>
                  <div className="py-2">
                    <p className="mb-1 text-[16px] font-semibold ">Location</p>
                    <p>{doctor.location}</p>
                  </div>
                </div>
                <div className=" col-span-1 ">
                  <img
                    className="w-full h-auto object-cover rounded-lg"
                    src={doctor.img}
                    alt={doctor.name}
                  />
                </div>
              </div>
              <div className="text-center py-2">
                <a
                  href="/appointment"
                  className="py-2 px-4 bg-[#fdebab] text-[#66594a] font-semibold rounded-2xl hover:bg-[#e9dcb0]"
                >
                  Book Appointment
                </a>
              </div>
              <div className="py-2 my-2 h-[100px] overflow-y-scroll">
                <p>{doctor.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
