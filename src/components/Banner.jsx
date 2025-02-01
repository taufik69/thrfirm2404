import React from "react";
import bannerImage from "../assets/banner.png";
import Button from "../components/CommonComponent/Button";
import Shape from "../assets/shape.png";
const Banner = () => {
  return (
    <div
      className={
        "bg-[url(./assets/banner_bg.png)]  w-full bg-cover bg-no-repeat bg-center relative"
      }
    >
      <div className="container">
        <div className="flex items-center  h-[500px]">
          <div className="w-[50%]">
            <h1 className="font-nunito text-[48px] text-black_color font-black">
              Get Bussiness{" "}
              <span className="block">Solutions with TheFirm.</span>
            </h1>
            <p className="font-lora font-normal text-[18px] leading-[176%] text-black_color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="mt-10">
              <Button content="Get In touch" style={"bg-yellow_color"} />
            </div>
          </div>
          <div className="w-[60vw] absolute right-[0%] top-[0%] h-[500px] -z-10  rounded-3xl ">
            <div className="absolute left-0 top-[48%] -translate-y-1/2">
              <img src={Shape} alt={Shape} />
            </div>
            <img
              src={bannerImage}
              alt={bannerImage}
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Banner;
