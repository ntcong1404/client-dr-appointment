import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : ""
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    toast.success("Đăng xuất thành công!", {
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
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  return (
    <header className=" py-2 flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a className="w-1/6" href="/">
            <img className="w-full" src={logo} alt="" />
          </a>
          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              <li>
                <NavLink
                  to="/services"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor text-[14px] leading-7 font-[600]"
                      : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/location"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor text-[14px] leading-7 font-[600]"
                      : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                  }
                >
                  HOSPITAL & CLINICS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctors"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor text-[14px] leading-7 font-[600]"
                      : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                  }
                >
                  OUR DOCTOR
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor text-[14px] leading-7 font-[600]"
                      : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              {token && user.isAdmin && (
                <>
                  <li>
                    <NavLink
                      to="/appointment"
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[14px] leading-7 font-[600]"
                          : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                      }
                    >
                      APPOINTMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/users"
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[14px] leading-7 font-[600]"
                          : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                      }
                    >
                      DASHBOARD
                    </NavLink>
                  </li>
                </>
              )}
              {token && !user.isAdmin && (
                <>
                  <li>
                    <NavLink
                      to="/appointment"
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[14px] leading-7 font-[600]"
                          : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                      }
                    >
                      APPOINTMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[14px] leading-7 font-[600]"
                          : "text-[#008066] p-2 text-[14px] leading-7 font-[500] hover:underline "
                      }
                    >
                      PROFILE
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* nav Right */}
          <div className="flex items-center gap-4">
            {!token ? (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            ) : (
              <button onClick={handleLogout}>
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Logout
                </button>
              </button>
            )}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
