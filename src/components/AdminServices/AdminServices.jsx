import { useState, useEffect } from "react";
import * as Service from "../../service/Service";
import { toast } from "react-hot-toast";
import Empty from "../Empty/Empty";
import { IoMdClose } from "react-icons/io";

const AdminService = () => {
  const [service, setServices] = useState([]);
  const [showModalAddService, setShowModalAddService] = useState(false);
  const [showModalContentService, setShowModalContentService] = useState(false);

  const [formDetails, setFormDetails] = useState({
    name: "",
    img: "",
    desc: "",
  });
  const [formAddContent, setFormAddContent] = useState({
    title: "",
    description: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const inputChangeContent = (e) => {
    const { name, value } = e.target;
    return setFormAddContent({
      ...formAddContent,
      [name]: value,
    });
  };

  const handleAddService = (e) => {
    e.preventDefault();
    const { name } = formDetails;
    if (name === "") {
      return toast.error("Enter your service");
    }
    Service.adminAddServices({ formDetails })
      .then((res) => {
        setShowModalAddService(false);
        setFormDetails({
          name: "",
          img: "",
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
        return Service.getAllServices();
      })
      .then((res) => {
        setServices(res);
      })
      .catch((err) => toast.error(err));
  };

  const handleAddContentService = (e) => {
    e.preventDefault();
    const { title, description } = formAddContent;
    if (title === "") {
      return toast.error("Enter title content");
    } else if (description === "") {
      return toast.error("Enter description content");
    }
    Service.adminAddContentService({ showModalContentService, formAddContent })
      .then((res) => {
        setShowModalContentService(false);
        setFormAddContent({
          title: "",
          description: "",
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
        return Service.getAllServices();
      })
      .then((res) => {
        setServices(res);
      })
      .catch((err) => toast.error(err));
  };

  const deleteService = (serviceId) => {
    Service.adminDeleteService({ serviceId })
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
        return Service.getAllServices();
      })
      .then((res) => {
        setServices(res);
      })
      .catch((err) => toast.error(err));
  };

  const handleDeleteContent = (contentId, serviceId) => {
    Service.adminDeleteContentService({ contentId, serviceId })
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
        return Service.getAllServices();
      })
      .then((res) => {
        setServices(res);
      })
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    Service.getAllServices()
      .then((res) => setServices(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <div className="flex justify-evenly items-center lg:relative mb-4">
        <h3 className=" text-xl lg:text-4xl md:text-4xl text-center font-extrabold text-[#1e375a] ">
          {service.length > 0 ? (
            <p>{`All Services (${service.length})`}</p>
          ) : (
            <p>All Services</p>
          )}
        </h3>
        <button
          className=" lg:absolute lg:top-0 lg:left-10 border border-[#a69279] rounded-lg p-2 text-[#a69279] font-semibold lg:font-extrabold text-xs lg:text-lg hover:bg-[#faf8f6]"
          onClick={() => setShowModalAddService(true)}
        >
          Add Service
        </button>
      </div>
      {service.length > 0 ? (
        <div className=" overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
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
                  Name Service
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
                  Content
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Add Content
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
              {service?.map((ele, i) => {
                return (
                  <tr key={i}>
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
                      <div className=" py-3 w-40 overflow-x-auto">
                        {ele?.name}
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className=" py-3 whitespace-normal w-60 overflow-x-auto">
                        {ele?.desc}
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className=" w-70 overflow-x-auto">
                        {ele?.content?.map((item, index) => (
                          <div
                            className="border-b-[1px] py-2 border-black my-1 whitespace-nowrap "
                            key={index}
                          >
                            <p className="my-2">
                              <span className="font-bold">Title: </span>
                              <span>{item?.title}</span>
                            </p>
                            <p className="my-2 h-40 overflow-y-auto">
                              <span className="font-bold">Description: </span>
                              <span className="whitespace-normal">
                                {item?.description}
                              </span>
                            </p>
                            <button
                              onClick={() =>
                                handleDeleteContent(item?._id, ele?._id)
                              }
                              className="bg-[#FF0000] text-white font-semibold rounded-md p-1 my-1 hover:bg-[#e64646]"
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                      <button
                        className="p-2 font-semibold bg-[#68c2ff] text-white rounded-lg hover:bg-[#32b4ff]"
                        onClick={() => setShowModalContentService(ele?._id)}
                      >
                        Add Content
                      </button>
                    </td>

                    <td className="border px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <button
                        className="p-2 font-semibold bg-[#FF0000] text-white rounded-lg hover:bg-[#e64646]"
                        onClick={() => deleteService(ele?._id)}
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
      {showModalAddService && (
        <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            onClick={() => setShowModalAddService(false)}
            className="w-full h-full bg-black  opacity-40 "
          ></div>
          <div className=" bg-[#faf8f6] w-3/4 lg:w-1/2 absolute mx-auto rounded-md shadow-lg z-50 p-8">
            <h2 className=" text-[#a69279] text-2xl lg:text-5xl font-extrabold text-center p-2 my-2">
              Add Service
            </h2>
            <IoMdClose
              onClick={() => {
                setShowModalAddService(false);
              }}
              className=" absolute top-8 right-4 text-[#a69279] cursor-pointer z-50 w-6 h-6 rounded-full text-center hover:shadow hover:shadow-slate-400"
            />
            <form className="py-4 " onSubmit={handleAddService}>
              <textarea
                cols="8"
                rows="2"
                type="text"
                name="name"
                placeholder="Name"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.name}
                onChange={inputChange}
              />
              <textarea
                cols="8"
                rows="2"
                type="text"
                name="img"
                placeholder="Image"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.img}
                onChange={inputChange}
              />
              <textarea
                cols="8"
                rows="4"
                type="text"
                name="desc"
                placeholder="Description"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formDetails.desc}
                onChange={inputChange}
              />

              <button
                type="submit"
                className="bg-[#a69279] text-white text-[16px] font-semibold w-full my-2 py-4 rounded-md border-none hover:bg-[#c3b091] "
              >
                Add Service
              </button>
            </form>
          </div>
        </div>
      )}
      {showModalContentService && (
        <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            onClick={() => setShowModalContentService(false)}
            className="w-full h-full bg-black  opacity-40 "
          ></div>
          <div className=" bg-[#faf8f6] w-3/4 lg:w-1/2 absolute mx-auto rounded-md shadow-lg z-50 p-8">
            <h2 className=" text-[#a69279] text-2xl lg:text-5xl font-extrabold text-center p-2 my-2">
              Add Content Service
            </h2>
            <IoMdClose
              onClick={() => {
                setShowModalContentService(false);
              }}
              className=" absolute top-8 right-4 text-[#a69279] cursor-pointer z-50 w-6 h-6 rounded-full text-center hover:shadow hover:shadow-slate-400"
            />
            <form className="py-4 " onSubmit={handleAddContentService}>
              <textarea
                cols="8"
                rows="2"
                type="text"
                name="title"
                placeholder="Title"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formAddContent.title}
                onChange={inputChangeContent}
              />

              <textarea
                cols="8"
                rows="4"
                type="text"
                name="description"
                placeholder="Description"
                className=" w-full my-2 border border-gray-300 mr-2 px-4 py-2  content-center rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
                value={formAddContent.description}
                onChange={inputChangeContent}
              />

              <button
                type="submit"
                className="bg-[#a69279] text-white text-[16px] font-semibold w-full my-2 py-4 rounded-md border-none hover:bg-[#c3b091] "
              >
                Add Content
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminService;
