import React from "react";
import Heading from "./CommonComponent/Heading";
import { TiVendorMicrosoft } from "react-icons/ti";
import Slider from "react-slick";
import { LuBrain } from "react-icons/lu";
import { GiBrainDump } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Partner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] absolute right-0 top-1/2 -translate-y-1/2 rounded-full "
        }
        style={{
          ...style,
          display: "block",
          padding: "20px",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <div>
          <IoIosArrowForward className="text-white  text-2xl cursor-grab" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] animate-pulse shadow-2xl absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10"
        }
        style={{
          ...style,
          display: "block",
          background: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-black_color  text-2xl cursor-grab" />
      </div>
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const item = [
    {
      id: 1,
      icon: <TiVendorMicrosoft />,
    },
    {
      id: 2,
      icon: <LuBrain />,
    },
    {
      id: 3,
      icon: <GiBrainDump />,
    },
    {
      id: 1,
      icon: <LuBrain />,
    },
    {
      id: 1,
      icon: <GiBrainDump />,
    },
    {
      id: 1,
      icon: <TiVendorMicrosoft />,
    },
    {
      id: 1,
      icon: <TiVendorMicrosoft />,
    },
    {
      id: 1,
      icon: <TiVendorMicrosoft />,
    },
  ];
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="flex items-center justify-center mb-20">
          <Heading title={"Our Partner"} />
        </div>

        <Slider {...settings}>
          {item?.map((item, index) => (
            <div className="px-4">
              <div className=" h-[120px] bg-gray_color rounded-2xl flex items-center justify-center ">
                <span className="text-[80px]">{item.icon}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
