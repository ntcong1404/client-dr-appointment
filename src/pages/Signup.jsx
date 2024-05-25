import { useState } from "react";
import { BiLock } from "react-icons/bi";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import * as Service from "../service/Service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password } = formDetails;
    if (!firstname || !lastname || !email || !password) {
      return toast.error("Input field should not be empty");
    } else if (firstname.length < 3) {
      return toast.error("First name must be at least 3 characters long");
    } else if (lastname.length < 3) {
      return toast.error("Last name must be at least 3 characters long");
    } else if (password.length < 5) {
      return toast.error("Password must be at least 5 characters long");
    } else {
      Service.Signup({
        formDetails,
      })
        .then((res) => {
          navigate("/login");
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
    <div className="my-14">
      <div className="text-center">
        <div className="flex items-center justify-center text-8xl text-[#187F6B] mb-3">
          <BiLock />
        </div>
        <h2 className="text-4xl tracking-tight">Create new account</h2>
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
                htmlFor="firstname"
              >
                First name
              </label>
              <input
                value={formDetails.firstname}
                onChange={inputChange}
                name="firstname"
                placeholder="First name"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastname"
              >
                Last name
              </label>
              <input
                value={formDetails.lastname}
                onChange={inputChange}
                name="lastname"
                placeholder="Last name"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                value={formDetails.email}
                onChange={inputChange}
                name="email"
                placeholder="Email@gmail.com"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                required
              />
            </div>
            <div className=" relative w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Your Password
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

            <div className="w-full md:w-full px-3 mb-6">
              <button className="block w-full bg-[#187F6B] text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-[#205f54] focus:border-gray-500">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
