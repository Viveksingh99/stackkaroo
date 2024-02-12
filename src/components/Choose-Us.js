import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
    <>
      <div className="text-center my-10">
        <Typography
          color="#E68F50"
          fontFamily="Outfit"
          variant="h5"
          fontSize="40px"
          marginBottom="10px"
          fontWeight={600}
          textAlign="center"
          // marginY={1}
        >
          Why Choose Us?
        </Typography>
        <Typography
          variant="subtitle2"
          fontFamily="outfit"
          fontWeight={500}
          fontSize="22px"
          color="#36454F"
        >
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br />
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center gap-11 my-10">
        {Data.map((item, index) => (
          <Card key={index} className="rounded-3xl" color='#FFFFFF'>
            <CardContent>
              <div className="flex flex-wrap p-5">
                <Image
                  src={item.img}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Typography
                  variant="h6"
                  color="#0A56F1"
                  fontWeight={600}
                  fontSize="22px"
                  fontFamily="outfit"
                  component="div"
                  marginLeft={5}
                  width={200}
                >
                  {item.titel}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Choose;
