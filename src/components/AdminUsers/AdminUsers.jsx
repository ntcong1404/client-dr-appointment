import { useState, useEffect } from "react";
import * as Service from "../../service/Service";
import Empty from "../Empty/Empty";
import { toast } from "react-hot-toast";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const HandleDeleteUser = (userId) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      Service.adminDeleteUser({ userId })
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
          return Service.adminGetAllUsers();
        })
        .then((res) => {
          setUsers(res);
        })
        .catch((err) => toast.error(err));
    } else {
      return;
    }
  };

  const handleSetUser = (userId) => {
    Service.adminSetUser({ userId, isAdmin: false })
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
        return Service.adminGetAllUsers();
      })
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => toast.error(err));
  };
  const handleSetAdmin = (userId) => {
    Service.adminSetUser({ userId, isAdmin: true })
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
        return Service.adminGetAllUsers();
      })
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    Service.adminGetAllUsers()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className=" overflow-x-auto ">
      <h3 className="text-4xl text-center font-extrabold text-[#1e375a] mb-4">
        {users.length > 0 ? (
          <p>{`All Users (${users.length})`}</p>
        ) : (
          <p>All Users</p>
        )}
      </h3>
      {users.length > 0 ? (
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
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  First Name
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Mobile No.
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  isAdmin
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  isUser
                </th>
                <th
                  scope="col"
                  className="border px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users?.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="border px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                      {i + 1}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.firstname}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.lastname}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ele?.email}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                      {ele?.mobile}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ele?.age}
                    </td>
                    <td className="border px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ele?.gender}
                    </td>
                    {ele?.isAdmin ? (
                      <>
                        <td className="border text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <p className=" py-2 px-1 rounded-md text-[#00FF00] font-semibold ">
                            Admin
                          </p>
                        </td>
                        <td className="border text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="bg-[#00e1ff] p-2 rounded-md text-white font-semibold hover:bg-[#2cbcd6]"
                            onClick={() => handleSetUser(ele?._id)}
                          >
                            setUser
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="border text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="bg-[#00e1ff] p-2 rounded-md text-white font-semibold hover:bg-[#2cbcd6]"
                            onClick={() => handleSetAdmin(ele?._id)}
                          >
                            setAdmin
                          </button>
                        </td>
                        <td className="border text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <p className=" py-2 px-1 rounded-md text-[#00FF00] font-semibold ">
                            User
                          </p>
                        </td>
                      </>
                    )}
                    <td className="border px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <button
                        className="p-2 bg-[#FF0000] rounded-md text-white font-semibold hover:bg-[#e64646]"
                        onClick={() => HandleDeleteUser(ele?._id)}
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
    </section>
  );
};

export default AdminUsers;
