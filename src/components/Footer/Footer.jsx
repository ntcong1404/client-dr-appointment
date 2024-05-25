import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.facebook.com/cong14t4",
    icon: <AiFillFacebook />,
  },
  {
    path: "https://github.com/ntcong1404",
    icon: <AiFillGithub />,
  },
  {
    path: "https://www.instagram.com/cog14t4/",
    icon: <AiOutlineInstagram />,
  },
];

const quickLinks01 = [
  {
    path: "#",
    display: "Specialists",
  },
  {
    path: "#",
    display: "Family Medicine",
  },
  {
    path: "#",
    display: "Vaccinations",
  },
  {
    path: "#",
    display: "Direct Billing With Insurance",
  },
  {
    path: "#",
    display: "Emergency Room Service",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Annual Health Check Programme",
  },
  {
    path: "#",
    display: "Visa Health Check",
  },
  {
    path: "#",
    display: "Corporate Health Check",
  },
  {
    path: "#",
    display: "Work Permit Health Check",
  },
  {
    path: "#",
    display: "School Enrollment Health Check",
  },
  {
    path: "#",
    display: "Offshore Health Check",
  },
];

const quickLinks03 = [
  {
    path: "#",
    display: "Feature Articles",
  },
  {
    path: "#",
    display: "News And Event",
  },
  {
    path: "#",
    display: "FAQ",
  },
  {
    path: "#",
    display: "Career Opportunity",
  },
  {
    path: "#",
    display: "Price List",
  },
  {
    path: "#",
    display: "Website Usage",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 mt-2 mb-6 bg-[#187F6B]">
      <div className="container">
        <div className="flex justify-between flex-col text-white md:flex-row flex-wrap gap-[30px]">
          <div>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <div
                  onClick={() => {
                    window.open(`${link.path}`, "_blank");
                  }}
                  key={index}
                  className="w-9 h-9 text-blacks bg-slate-800 rounded-full flex items-center justify-center group hover:cursor-pointer hover:scale-105"
                >
                  {link.icon}
                </div>
              ))}
            </div>
            <p className="text-[14px] leading-7 font-[400]  mt-4">
              Copyright © {year} developed by MiCog. All Rights Reserved
            </p>
          </div>

          <div>
            <h2 className="text-[16px] leading-[30px] font-[800] mb-6 ">
              Our Services
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 text-[14px] font-[400]  hover:underline"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[16px] leading-[30px] font-[800] mb-6 ">
              Health Check Programmes
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 text-[14px] font-[400]  hover:underline"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[16px] leading-[30px] font-[800] mb-6 ">
              New and Information
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 text-[14px] font-[400]  hover:underline"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
