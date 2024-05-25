import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast";
import * as Service from "../service/Service";

function Profile() {
  const navigate = useNavigate();
  const { userId } = jwt_decode(localStorage.getItem("token"));
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    mobile: "",
    gender: "neither",
    address: "",
    password: "",
    confpassword: "",
  });

  useEffect(() => {
    Service.getUser({ userId })
      .then((res) => {
        setFormDetails({
          ...res,
          password: "",
          confpassword: "",
          mobile: res.mobile === null ? "" : res.mobile,
          age: res.age === null ? "" : res.age,
        });
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      const {
        firstname,
        lastname,
        email,
        age,
        mobile,
        address,
        gender,
        password,
        confpassword,
      } = formDetails;

      if (!email) {
        toast.error("Email should not be empty", {
          style: {
            fontSize: "14px",
          },
        });
      } else if (firstname.length < 3) {
        toast.error("First name must be at least 3 characters long", {
          style: {
            fontSize: "14px",
          },
        });
      } else if (lastname.length < 3) {
        toast.error("Last name must be at least 3 characters long", {
          style: {
            fontSize: "14px",
          },
        });
      } else if (password.length < 5) {
        toast.error("Password must be at least 5 characters long", {
          style: {
            fontSize: "14px",
          },
        });
      } else if (password !== confpassword) {
        toast.error("Passwords do not match", {
          style: {
            fontSize: "14px",
          },
        });
      } else {
        await Service.updateUser({
          firstname,
          lastname,
          age,
          mobile,
          address,
          gender,
          email,
          password,
        });
        toast.success("Update profile successfully!", {
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
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" container">
      <section className="flex flex-col items-center">
        <h2 className=" text-[#1e375a] text-5xl font-extrabold py-2 my-1">
          Profile
        </h2>
        <form onSubmit={formSubmit} className="py-2 my-2">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstname"
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              placeholder="Enter your first name"
              value={formDetails.firstname}
              onChange={inputChange}
            />
            <input
              type="text"
              name="lastname"
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              placeholder="Enter your last name"
              value={formDetails.lastname}
              onChange={inputChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              placeholder="Enter your email"
              value={formDetails.email}
              onChange={inputChange}
            />
            <select
              name="gender"
              value={formDetails.gender}
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              id="gender"
              onChange={inputChange}
            >
              <option value="neither">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="age"
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              placeholder="Enter your age"
              value={formDetails.age}
              onChange={inputChange}
            />
            <input
              type="number"
              name="mobile"
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              placeholder="Enter your mobile number"
              value={formDetails?.mobile}
              onChange={inputChange}
            />
          </div>
          <textarea
            type="text"
            name="address"
            className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
            placeholder="Enter your address"
            value={formDetails.address}
            onChange={inputChange}
            rows="2"
          ></textarea>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="password"
              name="password"
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              placeholder="Enter your password"
              value={formDetails.password}
              onChange={inputChange}
            />
            <input
              type="password"
              name="confpassword"
              className="w-full my-2 border border-gray-300 mr-2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d9b99b]"
              placeholder="Confirm your password"
              value={formDetails.confpassword}
              onChange={inputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-primaryColor text-white text-[18px] font-semibold w-full my-2 py-2 rounded-md border-none "
          >
            UPDATE
          </button>
        </form>
      </section>
    </div>
  );
}

export default Profile;
