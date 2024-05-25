import { useState, useEffect } from "react";
import * as Service from "../../service/Service";
import Empty from "../Empty/Empty";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: "",
    img: "",
    specialty: "",
    specialInterests: "",
    language: "",
    location: "Ha Noi",
    desc: "",
  });
  const [formDetailsUpdate, setFormDetailsUpdate] = useState({
    doctorId: "",
    name: "",
    img: "",
    specialty: "",
    specialInterests: "",
    language: "",
    location: "",
    desc: "",
  });

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const { name, img, specialty, specialInterests, language, desc } =
      formDetails;

    if (name === "") {
      return toast.error("Enter your doctor");
    } else if (img === "") {
      return toast.error("Enter your image");
    } else if (specialty === "") {
      return toast.error("Enter your specialty");
    } else if (specialInterests === "") {
      return toast.error("Enter your special interests");
    } else if (language === "") {
      return toast.error("Enter your language");
    } else if (desc === "") {
      return toast.error("Enter your description");
    }
    Service.adminAddDoctors({ formDetails })
      .then((res) => {
        setShowModal(false);
        setFormDetails({
          name: "",
          img: "",
          specialty: "",
          specialInterests: "",
          language: "",
          location: "Ha Noi",
          desc: "",
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
        return Service.adminGetAllDoctors();
      })
      .then((res) => {
        setDoctors(res);
      })
      .catch((err) => toast.error(err));
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const inputChangeUpdate = (e) => {
    const { name, value } = e.target;
    return setFormDetailsUpdate({
      ...formDetailsUpdate,
      [name]: value,
    });
  };

  const handleShowUpdateDoctor = (doctor) => {
    setShowModalUpdate(true);
    setFormDetailsUpdate({
      doctorId: doctor?._id,
      name: doctor?.name,
      img: doctor?.img,
      specialty: doctor?.specialty,
      specialInterests: doctor?.specialInterests,
      language: doctor?.language,
      location: doctor?.location,
      desc: doctor?.desc,
    });
  };
  const handleUpdateDoctor = (e) => {
    e.preventDefault();
    const { name, img, specialty, specialInterests, language, desc } =
      formDetailsUpdate;

    if (name === "") {
      return toast.error("Enter your doctor");
    } else if (img === "") {
      return toast.error("Enter your image");
    } else if (specialty === "") {
      return toast.error("Enter your specialty");
    } else if (specialInterests === "") {
      return toast.error("Enter your special interests");
    } else if (language === "") {
      return toast.error("Enter your language");
    } else if (desc === "") {
      return toast.error("Enter your description");
    }
    Service.adminUpdateDoctors({ formDetailsUpdate })
      .then((res) => {
        setShowModalUpdate(false);
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
        return Service.adminGetAllDoctors();
      })
      .then((res) => {
        setDoctors(res);
      })
      .catch((err) => toast.error(err));
  };

  const deleteDoctor = (doctorId) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      Service.adminDeleteDoctor({ doctorId })
        .then((res) => {
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
          return Service.adminGetAllDoctors();
        })
        .then((res) => {
          setDoctors(res);
        })
        .catch((err) => toast.error(err));
    } else {
      return;
    }
  };

  useEffect(() => {
    Service.adminGetAllDoctors()
      .then((res) => setDoctors(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="flex justify-evenly items-center lg:relative mb-4 ">
        <h3 className=" text-xl lg:text-4xl md:text-4xl text-center font-extrabold text-[#1e375a] ">
          {doctors.length > 0 ? (
            <p>{`All Doctors (${doctors.length})`}</p>
          ) : (
            <p>All Doctors</p>
          )}
        </h3>
        <button
          onClick={() => setShowModal(true)}
          className=" lg:absolute lg:top-0 lg:left-10 border border-[#a69279] rounded-lg p-2 text-[#a69279] font-semibold lg:font-extrabold text-xs lg:text-lg hover:bg-[#faf8f6]"
        >
          Add Doctor
        </button>
      </div>
      {doctors.length > 0 ? (
        <div className=" overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  S.No
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Specialty
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Special Interests
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Language
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Update
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {doctors?.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="border px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {i + 1}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-14 w-14">
                          <img
                            className="h-full w-full object-cover rounded-full"
                            src={ele?.img}
                            alt={ele?.name}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.name}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className=" py-3 w-40 overflow-x-auto">
                        {ele?.specialty}
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                      <div className=" py-3 w-60 overflow-x-auto">
                        {ele?.specialInterests}
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className=" py-3 w-40 overflow-x-auto">
                        {ele?.language}
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ele?.location}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className=" py-3 w-96 overflow-x-auto">
                        {ele?.desc}
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <button
                        className="p-2 font-semibold bg-[#00FF00]  text-white rounded-lg hover:bg-[#7FFF00]"
                        onClick={() => handleShowUpdateDoctor(ele)}
                      >
                        Update
                      </button>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <button
                        className="p-2 font-semibold bg-[#FF0000] text-white rounded-lg hover:bg-[#e64646]"
                        onClick={() => deleteDoctor(ele?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Empty />
      )}
      {showModal && (
        <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            onClick={() => setShowModal(false)}
            className="w-full h-full bg-black  opacity-40 "
          ></div>
          <div className=" bg-[#faf8f6] w-3/4 lg:w-1/2 absolute mx-auto rounded-md shadow-lg z-50 p-8">
            <h2 className=" text-[#a69279] text-2xl lg:text-5xl font-extrabold text-center p-2 my-2">
              Add a doctor
            </h2>
            <IoMdClose
              onClick={() => {
                setShowModal(false);
              }}
              className=" absolute top-8 right-4 text-[#a69279] cursor-pointer z-50 w-6 h-6 rounded-full text-center hover:shadow hover:shadow-slate-400"
            />
            <form className="py-4 " onSubmit={handleAddDoctor}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.name}
                onChange={inputChange}
              />
              <input
                type="text"
                name="img"
                placeholder="Image"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.img}
                onChange={inputChange}
              />
              <input
                type="text"
                name="specialty"
                placeholder="Specialty"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.specialty}
                onChange={inputChange}
              />
              <input
                type="text"
                name="specialInterests"
                placeholder="Special Interests"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.specialinterests}
                onChange={inputChange}
              />
              <input
                type="text"
                name="language"
                placeholder="Language"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.language}
                onChange={inputChange}
              />
              <select
                name="location"
                value={formDetails.location}
                onChange={inputChange}
                className="w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              >
                <option>Ho Chi Minh</option>
                <option>Ha Noi</option>
                <option>Vung Tau</option>
              </select>
              <textarea
                name="desc"
                placeholder="Description ... "
                cols="10"
                rows="4"
                value={formDetails.desc}
                onChange={inputChange}
                className="w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#a69279] text-white text-[16px] font-semibold w-full my-2 py-4 rounded-md border-none hover:bg-[#c3b091] "
              >
                Add Doctor
              </button>
            </form>
          </div>
        </div>
      )}
      {showModalUpdate && (
        <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            onClick={() => setShowModalUpdate(false)}
            className="w-full h-full bg-black  opacity-40 "
          ></div>
          <div className=" bg-[#faf8f6] w-3/4 lg:w-1/2 absolute mx-auto rounded-md shadow-lg z-50 p-8">
            <h2 className=" text-[#a69279] text-2xl lg:text-5xl font-extrabold text-center p-2 my-2">
              Update doctor
            </h2>
            <IoMdClose
              onClick={() => {
                setShowModalUpdate(false);
              }}
              className=" absolute top-8 right-4 text-[#a69279] cursor-pointer z-50 w-6 h-6 rounded-full text-center hover:shadow hover:shadow-slate-400"
            />
            <form className="py-4 " onSubmit={handleUpdateDoctor}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetailsUpdate.name}
                onChange={inputChangeUpdate}
              />
              <input
                type="text"
                name="img"
                placeholder="Image"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetailsUpdate.img}
                onChange={inputChangeUpdate}
              />
              <input
                type="text"
                name="specialty"
                placeholder="Specialty"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetailsUpdate.specialty}
                onChange={inputChangeUpdate}
              />
              <input
                type="text"
                name="specialInterests"
                placeholder="Special Interests"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetailsUpdate.specialInterests}
                onChange={inputChangeUpdate}
              />
              <input
                type="text"
                name="language"
                placeholder="Language"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetailsUpdate.language}
                onChange={inputChangeUpdate}
              />
              <select
                name="location"
                value={formDetailsUpdate.location}
                onChange={inputChangeUpdate}
                className="w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              >
                <option>Ho Chi Minh</option>
                <option>Ha Noi</option>
                <option>Vung Tau</option>
              </select>
              <textarea
                name="desc"
                placeholder="Description ... "
                cols="10"
                rows="4"
                value={formDetailsUpdate.desc}
                onChange={inputChangeUpdate}
                className="w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#a69279] text-white text-[16px] font-semibold w-full my-2 py-4 rounded-md border-none hover:bg-[#c3b091] "
              >
                Update Doctor
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminDoctors;
