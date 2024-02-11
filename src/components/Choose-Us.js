import React from "react";
import Image from "next/image";

const Choose = () => {
  const Data = [
    {
      img: "/Vector.png",
      titel: "User-Centric Approach",
    },
    {
      img: "/GroupSC.png",
      titel: "Customer Satisfaction",
    },
    {
      img: "/GroupPancile.png",
      titel: "Integrating Feedback",
    },
    {
      img: "/Mask group.png",
      titel: "High Quality Products",
    },
    {
      img: "/Group 399.png",
      titel: "On-Time Product Delivery",
    },
  ];
  return (
    <div>
      <h3 className="text-center text-[#E68F50] my-5">Why Choose Us?</h3>
      <p className="text-center mb-5">
        We excel with reliability, innovation and customer-centric approach for
        our quality products.
        <br />
        Our dedicated team ensures that the solutions provided are dependable
        and long-term
      </p>
      <div className="flex flex-wrap justify-center gap-11 my-10 px-80">
        {Data.map((item, index) => (
          <div key={index} className="flex flex-wrap">
            <Image
              src={item.img}
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="pl-5 mt-2 text-[#0A56F1]">{item.titel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
