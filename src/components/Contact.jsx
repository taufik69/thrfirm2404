import React from "react";

const Contact = () => {
  const inputField = [
    {
      name: "firstName",
      label: "Enter Your",
    },
    {
      name: "email",
      label: "Enter Your",
    },
    {
      name: "phone",
      label: "Enter Your",
    },
    {
      name: "Subject",
      label: "Enter Your",
    },
    {
      name: "lastName",
      label: "Enter Your",
    },
    {
      name: "telePhone",
      label: "Enter Your",
    },
  ];
  return (
    <div className="my-20">
      <div className="container flex justify-center">
        <div className="w-[50vw] h-[50vh] flex  flex-wrap bg-gray-200 rounded shadow-2xs">
          {inputField?.map((item) => (
            <div className="flex w-1/2 flex-col items-start gap-y-2 px-10">
              <label htmlFor="">
                {item.label} {item.name}
                <span className="text-red-500">*</span>
              </label>

              {item.name !== "Subject" ? (
                <input
                  type={
                    item.name == "firstName"
                      ? "text"
                      : item.name == "email"
                      ? "email"
                      : item.name == "phone"
                      ? "number"
                      : "text"
                  }
                  name="jani na"
                  placeholder={item.name}
                  className=" py-1 px-3 border-b-2 w-[80%] border-b-black  shadow focus:outline-0"
                />
              ) : (
                <select name="hi" className="w-full">
                  <option>MERN</option>
                  <option>FDR</option>
                  <option>Web DEVELEPOMENT</option>
                  <option>MERN</option>
                  <option selected>FDR</option>
                </select>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
