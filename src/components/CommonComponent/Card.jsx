import React from "react";
import Button from "./Button";
const Card = ({ cartitemData }) => {
  return (
    <div className="py-10">
      <div className="max-w-[350px] shadow-2xl rounded-xl flex flex-col  gap-y-4 p-3">
        <div className="w-full h-[230px] rounded-2xl">
          <picture>
            <img
              src={
                cartitemData?.image ||
                "https://images.pexels.com/photos/20798930/pexels-photo-20798930/free-photo-of-yellow-and-stone-fortification-in-morocco.png?auto=compress&cs=tinysrgb&w=600&lazy=load "
              }
              alt={cartitemData?.image || "image Missing"}
              className="w-full h-full object-cover rounded-2xl"
            />
          </picture>
        </div>

        {/* text area */}
        <div className="">
          <div className=" border-b-2 border-b-gray-900">
            <h2>{cartitemData?.title} </h2>
            <p className="mb-4">{cartitemData?.description}</p>
          </div>
        </div>
        {/* text area */}

        {/* profile area */}
        <div className="flex justify-between items-center">
          <div className="flex items-center  gap-x-4">
            <picture>
              <img
                src={cartitemData?.profile_picture}
                alt={cartitemData?.profile_picture}
                className="w-10 h-10 rounded-full object-cover"
              />
            </picture>
            <h3>
              {cartitemData.profileName
                ? cartitemData.profileName
                : "Alex Liones"}{" "}
            </h3>
          </div>

          <div>
            <p>{cartitemData?.date}</p>
          </div>
        </div>
        {/* profile area */}
        <div className=" flex  justify-center">
          <Button
            content={cartitemData?.buttonContent}
            style={"bg-black"}
            fansyStyle={cartitemData.fansyButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
