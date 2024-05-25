import main_service from "../../assets/images/main_service.webp";
import * as Service from "../../service/Service";
import { useEffect, useState } from "react";
import FaqItem from "../../components/Faq/FaqItem";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Services = () => {
  const [services, setServices] = useState();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggleAccordion = (index) => {
    if (isOpen === index) setIsOpen(false);
    else setIsOpen(index);
  };

  useEffect(() => {
    Service.getAllServices()
      .then((res) => setServices(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" my-5">
      <div className="relative">
        <div className=" lg:w-full mx-auto">
          <img src={main_service} className=" w-full h-auto object-cover" />
        </div>
        <div className=" absolute top-1/4 left-1/2  translate-x-[-50%] text-[#187F6B]">
          <p className="py-1 font-semibold text-[30px] md:text-[40px] text-center lg:font-semibold lg:text-[60px] ">
            Our Services
          </p>
        </div>
      </div>
      <div className="text-center p-8 ">
        {services?.map((item, index) =>
          index % 2 ? (
            <div
              key={index}
              className="flex flex-wrap items-center  p-10  mt-10  text-center rounded-md"
            >
              <div className="w-full md:w-3/5 lg:w-1/2 ">
                <img
                  src={item?.img}
                  alt={item?.desc}
                  className="inline-block rounded  "
                />
              </div>
              <div className="w-full md:w-2/5 lg:w-1/2  md:text-left">
                <div className="flex items-center font-bold mt-8 text-lg md:mt-0 mg:text-xl lg:text-2xl text-[#187F6B]">
                  {item?.name}
                  <div
                    onClick={() => toggleAccordion(index)}
                    className={`${
                      isOpen && " text-textColor"
                    } bg-[#dcfff871] ml-2 cursor-pointer w-7 h-7 lg:w-8 lg:h-8 text-[#187F6B] rounded flex items-center justify-center`}
                  >
                    {isOpen === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                </div>
                <p className="sm:text-md mt-6 text-textColor">
                  Use the LocaleData gem to download translations directly into
                  your Ruby on Rails projects using the provided command line
                  interface. Just create a project and follow the step-by-step
                  instructions.
                </p>
              </div>

              {isOpen === index ? (
                <div className="w-full grid grid-cols-2 text-left mt-6 animate-fade-in">
                  {item?.content?.map((item, index) => (
                    <FaqItem item={item} key={index} />
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div
              key={index}
              className="  flex flex-wrap items-center  p-10  mt-10  text-center rounded-md"
            >
              <div className="w-full md:w-3/5 lg:w-1/2 ">
                <img
                  src={item?.img}
                  alt={item?.desc}
                  className="inline-block rounded  "
                />
              </div>
              <div className="w-full md:w-2/5 lg:w-1/2 md:order-first  md:text-left ">
                <div className="flex items-center font-bold mt-8 text-lg md:mt-0 mg:text-xl lg:text-2xl text-[#187F6B]">
                  {item?.name}
                  <div
                    onClick={() => toggleAccordion(index)}
                    className={`${
                      isOpen && " text-textColor"
                    } bg-[#dcfff871] ml-2 cursor-pointer w-7 h-7 lg:w-8 lg:h-8 text-[#187F6B] rounded flex items-center justify-center`}
                  >
                    {isOpen === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                </div>
                <p className="sm:text-md mt-6 text-textColor">
                  All LocaleData projects are private. Each project can have
                  multiple collaborators with different roles and access
                  permissions. You determine who can see and edit your
                  translations. Just add admins, developers, translators and
                  configure their access rights.
                </p>
              </div>

              {isOpen === index ? (
                <div className="w-full grid grid-cols-2 text-left mt-6 animate-fade-in">
                  {item?.content?.map((item, index) => (
                    <FaqItem item={item} key={index} />
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          )
        )}
      </div>
      <div className="p-8">
        <h2 className="text-center  py-4 font-bold text-[#187F6B] text-4xl md:text-4xl lg:text-5xl">
          Why to choose us
        </h2>
        <div className=" text-textColor mt-10 text-sm lg:text-base leading-7 pb-4">
          <p className="p-2">
            Raffles Medical Vietnam is a member of Raffles Medical Group, one of
            the largest private healthcare providers in Singapore and the
            region. Our medical centers offer a full range of diagnostic and
            screening services with experienced physicians and nurses who have
            been granted medical practice certificates as per law. Our
            specialist services include Internal medicine, Obstetrics &
            Gynecology, Surgery, Odontology, Ophthalmology & Optometry,
            Otorhinolaryngology (ENT), Dermatology, Pediatrics, Imaging
            diagnosis, Laboratory.
          </p>
          <p className="p-2">
            Specialists availability may vary between clinics, please contact
            our Customer Care Representative for more information:
          </p>
          <ul className="py-2 px-10 list-disc ">
            <li>
              167A Nam Ky Khoi Nghia Str., HCMC | (028)38240777 |
              frontdesk_hcmc@rafflesmedical.com
            </li>
            <li>
              01 Le Ngoc Han Str., Vung Tau | (0254)3858776 |
              frontdesk_vungtau@rafflesmedical.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
