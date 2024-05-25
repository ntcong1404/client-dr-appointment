import { useState } from "react";
import { toast } from "react-hot-toast";

import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoInstagram,
  BiLock,
} from "react-icons/bi";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import * as Service from "../service/Service";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState("password");
  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = formDetails;
      if (!email || !password) {
        return toast.error("Input field should not be empty");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      }
      const { res, err } = await Service.Login({
        email,
        password,
      });
      if (res) {
        navigate("/");
        console.log(document.cookie);
        localStorage.setItem("token", res.token);
        window.location.reload();
        toast.success("Đăng nhập thành công!", {
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
      }
      if (err) {
        toast.error(err);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="my-14">
      <div className="text-center">
        <div className="flex items-center justify-center text-8xl text-[#187F6B] mb-3">
          <BiLock />
        </div>
        <h2 className="text-4xl tracking-tight">Sign in into your account</h2>
        <span className="text-sm ">
          or
          <Link to="/register" className="pl-2 text-blue-500">
            register a new account
          </Link>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Email address
              </label>
              <input
                value={formDetails.email}
                onChange={inputChange}
                name="email"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                required
              />
            </div>
            <div className=" relative w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                value={formDetails.password}
                onChange={inputChange}
                name="password"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type={showPass}
                required
              />
              <div className=" absolute top-9 right-6 flex justify-between items-center text-lg text-[#777777]">
                {showPass === "text" ? (
                  <RiEyeOffFill
                    className=" cursor-pointer"
                    onClick={() => setShowPass("password")}
                  />
                ) : (
                  <RiEyeFill
                    className=" cursor-pointer"
                    onClick={() => setShowPass("text")}
                  />
                )}
              </div>
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <Link to="#" className="text-blue-500 text-sm tracking-tight">
                Forget your password?
              </Link>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-[#187F6B] text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-[#205f54] focus:border-gray-500">
                Sign in
              </button>
            </div>
            <div className="mx-auto mb-4 pb-1">
              <span className="text-center text-xs text-gray-700">
                or sign up with
              </span>
            </div>
            <div className="flex items-center w-full mt-2">
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex text-xl items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <BiLogoFacebook />
                </button>
              </div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex text-xl items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <BiLogoInstagram />
                </button>
              </div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex text-xl items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <BiLogoLinkedin />
                </button>
              </div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex text-xl items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <BiLogoGithub />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
