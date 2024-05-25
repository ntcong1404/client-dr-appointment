import { useState, useEffect } from "react";
import * as Service from "../../service/Service";
import { toast } from "react-hot-toast";
import Empty from "../Empty/Empty";

const AdminAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  const handleAcceptAppointment = (appointId) => {
    Service.appointmentAccepted({ appointId })
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
        return Service.getAllAppointments();
      })
      .then((res) => {
        setAppointments(res);
      })
      .catch((err) => toast.error(err));
  };

  const handleCancelAppointment = (appointId) => {
    Service.appointmentCancelled({ appointId })
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
        return Service.getAllAppointments();
      })
      .then((res) => {
        setAppointments(res);
      })
      .catch((err) => toast.error(err));
  };

  const handleDeleteAppointment = (appointId) => {
    Service.appointmentDeleted({ appointId })
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
        return Service.getAllAppointments();
      })
      .then((res) => {
        setAppointments(res);
      })
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    Service.getAllAppointments()
      .then((res) => setAppointments(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className=" overflow-x-auto ">
      <h3 className="text-4xl text-center font-extrabold text-[#1e375a] mb-4">
        {appointments.length > 0 ? (
          <p>{`All Appointments (${appointments.length})`}</p>
        ) : (
          <p>All Appointments</p>
        )}
      </h3>
      {appointments.length > 0 ? (
        <div className="  overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50 ">
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
                  User
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Doctor
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reason
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time
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
                  Create At
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Accept
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Cancel
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
              {appointments?.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="border px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                      {i + 1}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.userId?.firstname} {ele?.userId?.lastname}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.doctorId?.name}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.reason}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.date}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.time}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.clinic}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className=" whitespace-normal ">{ele?.desc}</div>
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.createdAt}
                    </td>
                    {ele?.status === "pending" ? (
                      <>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="bg-[#00FF00] p-2 rounded-md text-white font-semibold hover:bg-[#7FFF00]"
                            onClick={() => handleAcceptAppointment(ele?._id)}
                          >
                            Accept
                          </button>
                        </td>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="bg-[#FF0000] p-2 rounded-md text-white font-semibold hover:bg-[#e64646]"
                            onClick={() => handleCancelAppointment(ele?._id)}
                          >
                            Cancel
                          </button>
                        </td>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="bg-[#FF0000] p-2 rounded-md text-white font-semibold hover:bg-[#e64646]"
                            onClick={() => handleDeleteAppointment(ele?._id)}
                          >
                            Remove
                          </button>
                        </td>
                      </>
                    ) : ele?.status === "accepted" ? (
                      <>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <p className=" py-2 px-1 rounded-md text-[#00FF00] font-semibold ">
                            Accepted
                          </p>
                        </td>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="bg-[#FF0000] p-2 rounded-md text-white font-semibold hover:bg-[#e64646]"
                            onClick={() => handleCancelAppointment(ele?._id)}
                          >
                            Cancel
                          </button>
                        </td>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="bg-[#FF0000] p-2 rounded-md text-white font-semibold hover:bg-[#e64646]"
                            onClick={() => handleDeleteAppointment(ele?._id)}
                          >
                            Remove
                          </button>
                        </td>
                      </>
                    ) : ele?.status === "cancelled" ? (
                      <>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="bg-[#00FF00] p-2 rounded-md text-white font-semibold hover:bg-[#7FFF00]"
                            onClick={() => handleAcceptAppointment(ele?._id)}
                          >
                            Accept
                          </button>
                        </td>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <p className=" py-2 px-1 rounded-md text-[#FF0000] font-semibold ">
                            Cancelled
                          </p>
                        </td>
                        <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="bg-[#FF0000] p-2 rounded-md text-white font-semibold hover:bg-[#e64646]"
                            onClick={() => handleDeleteAppointment(ele?._id)}
                          >
                            Remove
                          </button>
                        </td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Empty />
      )}
    </section>
  );
};

export default AdminAppointment;
