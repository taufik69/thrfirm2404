import React from "react";
import Card from "./CommonComponent/Card";
import Heading from "./CommonComponent/Heading";
import { FaSearch } from "react-icons/fa";
const Blog = () => {
  const cartContent = [
    {
      image:
        "https://images.pexels.com/photos/29353714/pexels-photo-29353714/free-photo-of-wild-yellow-flower-in-a-grassy-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Lorem Ipsum is",
      description: `Lorem Ipsum is simply text of the printing and type setting industry. make a type specimen`,
      profile_picture:
        "https://images.pexels.com/photos/30417380/pexels-photo-30417380/free-photo-of-lone-skier-in-foggy-winter-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      profileName: "MERN 2404",
      date: new Date().toLocaleTimeString(),
      buttonContent: "Read More",
      fansyButton: true,
    },

    {
      image:
        "https://images.pexels.com/photos/30482791/pexels-photo-30482791/free-photo-of-graceful-tricolored-heron-wading-in-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Lorem ",
      description: `Lorem Ipsum is simply text of the printing and type setting industry. make a type specimen`,
      profile_picture:
        "https://images.pexels.com/photos/30345882/pexels-photo-30345882/free-photo-of-delicate-winter-tree-branches-against-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      profileName: "MERN 2403",
      date: new Date().toLocaleTimeString(),
      buttonContent: "Read More",
    },

    {
      image:
        "https://images.pexels.com/photos/29690523/pexels-photo-29690523/free-photo-of-historic-architecture-in-pula-croatia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "HI Hello",
      description: `Lorem Ipsum is simply text of the printing and type setting industry. make a type specimen`,
      profile_picture:
        "https://images.pexels.com/photos/30507468/pexels-photo-30507468/free-photo-of-delicious-sweet-potato-fries-in-rustic-bowl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      profileName: "MERN 2306",
      date: new Date().toLocaleTimeString(),
      buttonContent: "Know More",
    },
  ];

  return (
    <div className="container">
      <div className="flex justify-center">
        <Heading title="Our Blogs" />
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {cartContent?.map((item, index) => (
          <Card cartitemData={{ ...item, id: index + 1 }} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
