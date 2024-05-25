import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import * as Service from "../service/Service";

const Appointment = () => {
  const [formDetails, setFormDetails] = useState({
    clinic: "Preferred Clinic",
    reason: "Reason for visit",
    doctor: "",
    desc: "",
    date: "",
    time: "",
  });
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    window.scroll(0, 0);
    Service.adminGetAllDoctors()
      .then((res) => setDoctors(res))
      .catch((err) => console.log(err));
  }, []);

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { doctor, date, time } = formDetails;
    if (doctor === "") {
      toast.error("Choose your doctor");
    } else if (date === "") {
      toast.error("choose date");
    } else if (time === "") {
      toast.error("choose time");
    } else {
      Service.bookAppointment({ formDetails })
        .then((res) => {
          setFormDetails({
            clinic: "Preferred Clinic",
            reason: "Reason for visit",
            doctor: "",
            desc: "",
            date: "",
            time: "",
          });
          toast.success(res, {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
        })
        .catch((err) => toast.error(err));
    }
  };

  return (
    <div className="my-4 py-4">
      <div className="container">
        <div className="xl:w-[470px] mx-auto mb-4">
          <h2 className="heading text-center text-[#187F6B]">
            Make appointment
          </h2>
        </div>
        <div className=" text-[#187F6B]">
          <div className="px-4">
            <p className="text-lg font-semibold py-2">Telephone Appointment</p>
            <ul className=" text-textColor list-disc px-6">
              <li>
                Raffles Medical Ho Chi Minh | 285B Dien Bien Phu Str., HCMC |
                Tel: <span className=" text-red-500">(028)38240777</span>
              </li>
              <li>
                Raffles Medical Hanoi | 51 Xuan Dieu Str., Hanoi | Tel:
                <span className=" text-red-500">(024)36762222</span>
              </li>
              <li>
                Raffles Medical Vung Tau | 01 Le Ngoc Han Str., Vung Tau City |
                Tel: <span className=" text-red-500">(0254)3858776</span>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <p className="text-lg font-semibold py-2">Online Appointment</p>
          </div>
          <form
            className="p-6 m-4 border border-[#187F6B] rounded-lg"
            onSubmit={handleSubmit}
          >
            <p
              className={`text-center pb-4 text-xs ${
                formDetails.reason === "Reason for visit" ||
                formDetails.clinic === "Preferred Clinic"
                  ? "text-red-500"
                  : " text-sky-500"
              }`}
            >
              Please fill in our online form so we can nominate an appropriate
              specialist. After successful submission, our staff will contact
              you to confirm your appointment within 4 working – hour
            </p>
            <select
              name="clinic"
              value={formDetails.clinic}
              onChange={inputChange}
              className=" w-full  cursor-pointer border border-gray-300 my-2 mr-2 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#187F6B]"
            >
              <option>Preferred Clinic</option>
              <option>Ho Chi Minh</option>
              <option>Ha Noi</option>
              <option>Vung Tau</option>
            </select>
            <select
              name="reason"
              value={formDetails.reason}
              onChange={inputChange}
              className=" w-full cursor-pointer border border-gray-300 my-2 mr-2 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#187F6B]"
            >
              <option>Reason for visit</option>
              <option>Work Permit Health Check</option>
              <option>Vaccinations</option>
              <option>School Enrollment Health Check</option>
              <option>Personal Health Check</option>
              <option>OGUK Health Check</option>
              <option>Corporate Health Check</option>
              <option>Others Visa Check Up</option>
              <option>See a Doctor</option>
              <option>Teleconsultation</option>
            </select>
            {formDetails.reason === "Reason for visit" ||
            formDetails.clinic === "Preferred Clinic" ? (
              <></>
            ) : (
              <>
                <select
                  name="doctor"
                  value={formDetails.doctor}
                  onChange={inputChange}
                  className=" w-full cursor-pointer border border-gray-300  my-2 mr-2 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#187F6B]"
                >
                  <option selected>Choose a doctor</option>
                  {doctors?.map((item, index) => (
                    <option
                      value={item._id}
                      key={index}
                    >{`${item.name} (${item.specialty})`}</option>
                  ))}
                </select>

                <input
                  name="date"
                  type="date"
                  selected={formDetails.date}
                  onChange={inputChange}
                  className=" border border-gray-300  my-2 mr-2 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#187F6B]"
                />
                <input
                  name="time"
                  type="time"
                  value={formDetails.time}
                  onChange={inputChange}
                  className=" border border-gray-300  my-2 mr-2 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#187F6B]"
                />
                <textarea
                  name="desc"
                  value={formDetails.desc}
                  onChange={inputChange}
                  className="w-full cursor-pointer border border-gray-300 my-2 mr-2 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#187F6B]"
                  placeholder="More info about you ..."
                  cols="8"
                  rows="2"
                ></textarea>

                <button
                  type="submit"
                  className="border w-full bg-[#187F6B] hover:bg-[#318f7f] text-white text-[18px] border-gray-300  my-2 mr-2 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#187F6B]  "
                >
                  Book Appointment
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
