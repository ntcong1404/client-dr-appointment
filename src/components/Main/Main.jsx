import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import main1 from "../../assets/images/main1.jpeg";
import main2 from "../../assets/images/main2.png";
import { useState } from "react";

const lists = [
  {
    img: main1,
    video: true,
    title: "Raffles Medical Clinic HCMC Is Ready To Serve You!",
    desc: "285B Dien Bien Phu, Vo Thi Sau Ward, District 3, HCMC",
  },
  {
    img: main2,
    video: false,
    title: "Welcome to Raffles Medical Vietnam",
    desc: "Raffles Medical Vietnam is a member of Raffles Medical Group, a leading integrated healthcare provider in Asia, with a presence in 14 cities across five countries including Singapore, China, Japan, Vietnam and Cambodia.",
  },
];

function Main() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    variableWidth: false,
    centerMode: false,
    arrows: false,
  };
  const [playVideo, setPlayVideo] = useState(false);
  const handlePlayVideo = (play) => {
    if (play) setPlayVideo(true);
  };

  return (
    <>
      <Slider {...settings}>
        {lists?.map((list, index) => (
          <div key={index} className="relative w-full h-screen">
            <div className=" w-full h-screen ">
              <img
                className="w-full h-full object-cover "
                src={list?.img}
                alt={list?.img}
              />
              <div className="absolute top-0 bottom-0 text-slate-50 px-20 py-40">
                <h1 className=" text-base w-[260px] font-bold my-4 lg:text-5xl lg:w-full md:w-full md:text-xl ">
                  {list?.title}
                </h1>
                <p className=" mt-12 w-[250px] text-xs lg:text-base lg:w-[500px] md:w-[500px] md:text-sm ">
                  {list?.desc}
                </p>

                <div className="mt-14 mb-6">
                  <button
                    onClick={() => handlePlayVideo(list?.video)}
                    className="rounded-3xl text-base font-semibold bg-transparent border text-white py-3 px-8 hover:scale-105"
                  >
                    {list?.video ? "Click Here for A Tour" : "Read More"}
                  </button>
                </div>
                {list?.video ? (
                  <>
                    {playVideo ? (
                      <div className=" absolute top-0 bottom-0 left-0 right-0 ">
                        <button
                          onClick={() => setPlayVideo(false)}
                          className=" absolute top-4 right-4 bg-[#E1E1E1EB] px-2 py-1 text-black rounded-md z-50 hover:underline"
                        >
                          Close
                        </button>
                        <video
                          className="w-full h-full object-cover md:w-full lg:w-full "
                          controls
                          autoPlay
                          muted
                        >
                          <source
                            src="https://rafflesmedical.vn/wp-content/uploads/2024/04/Raffles%20Medical%20Facilitiesss.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Main;
