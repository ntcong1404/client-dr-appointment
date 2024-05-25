import {
  FaHome,
  FaList,
  FaSignal,
  FaUser,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import onToTop from "../assets/images/onToTop.svg";
import { useEffect, useState } from "react";

const AdminPage = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className=" grid grid-cols-10 bg-[#e9f1fa] gap-4 ">
      <div className=" col-span-3 lg:col-span-2 md:col-span-2 p-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 shadow ">
        <h2 className=" pt-6 text-center text-md md:text-2xl lg:text-3xl font-bold text-white">
          <Link to="/admin">Dashboard</Link>
        </h2>

        <div className="flex justify-center py-4">
          <ul className="py-4 space-y-1">
            <li className="rounded-sm py-4 ">
              <a
                href="/"
                className="flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
              >
                <span>
                  <FaHome />
                </span>
                <span>Home</span>
              </a>
            </li>
            <li className="rounded-sm py-4 ">
              <NavLink
                to="/admin/users"
                // className="flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                className={(navClass) =>
                  navClass.isActive
                    ? " flex items-center hover:translate-x-1 p-3 space-x-3 text-xs md:text-lg lg:text-xl text-black"
                    : "flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                }
              >
                <span>
                  <FaUsers />
                </span>
                <span>Users</span>
              </NavLink>
            </li>
            <li className="rounded-sm py-4 ">
              <NavLink
                to="/admin/doctors"
                // className="flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                className={(navClass) =>
                  navClass.isActive
                    ? "flex items-center hover:translate-x-1 p-3 space-x-3 text-xs md:text-lg lg:text-xl text-black"
                    : "flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                }
              >
                <span>
                  <FaUserMd />
                </span>
                <span>Doctors</span>
              </NavLink>
            </li>
            <li className="rounded-sm py-4 ">
              <NavLink
                to="/admin/appointments"
                // className="flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                className={(navClass) =>
                  navClass.isActive
                    ? "flex items-center hover:translate-x-1 p-3 space-x-3 text-xs md:text-lg lg:text-xl text-black"
                    : "flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                }
              >
                <span>
                  <FaList />
                </span>
                <span>Appointments</span>
              </NavLink>
            </li>
            <li className="rounded-sm py-4 ">
              <NavLink
                to="/admin/services"
                // className="flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                className={(navClass) =>
                  navClass.isActive
                    ? "flex items-center hover:translate-x-1 p-3 space-x-3 text-xs md:text-lg lg:text-xl text-black"
                    : "flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                }
              >
                <span>
                  <FaSignal />
                </span>
                <span>Services</span>
              </NavLink>
            </li>
            <li className="rounded-sm py-4 ">
              <NavLink
                to="/admin/profile"
                // className="flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                className={(navClass) =>
                  navClass.isActive
                    ? "flex items-center hover:translate-x-1 p-3 space-x-3 text-xs md:text-lg lg:text-xl text-black"
                    : "flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl"
                }
              >
                <span>
                  <FaUser />
                </span>
                <span>Profile</span>
              </NavLink>
            </li>
            <li className="rounded-sm py-4 ">
              <div className="flex items-center hover:translate-x-1 p-3 space-x-3 text-white text-xs md:text-lg lg:text-xl">
                <span>
                  <MdLogout />
                </span>
                <span>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" col-span-7 lg:col-span-8 md:col-span-8 pr-4">
        {children}
      </div>
      {isVisible ? (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-10 flex justify-center items-center hover:scale-125"
        >
          <img src={onToTop} alt="" />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminPage;
