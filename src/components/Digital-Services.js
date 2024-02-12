import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Services = () => {
  const Data = [
    {
      img: "/software-web.png",
      title: "Website Development",
      description:
        "We specialize in responsive website development, ensuring optimal performance across various devices.",
    },
    {
      img: "/PhoneCode.png",
      title: "App Development",
      description:
        "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.",
    },
    {
      img: "/cloud-computing.png",
      title: "Software Development",
      description:
        " We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.",
    },
    {
      img: "/marketing.png",
      title: "UI/UX Design",
      description:
        " We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.",
    },
    {
      img: "/seo.png",
      title: "SEO Optimization",
      description:
        "We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.",
    },
    {
      img: "/marketing.png",
      title: "Digital Marketing",
      description:
        "We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.",
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
          Stackkaroo’s Digital Services
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
      <div className="flex flex-wrap justify-center">
        {Data.map((item, index) => (
        <Card sx={{ width: "400px", borderRadius: "20px", margin: "15px" }}
        key={index}>
          <CardContent>
          <div className="w-96 px-10">
            <div className="flex flex-wrap">
              <Image
                src={item.img}
                width={80}
                height={80}
                alt="Picture of the author"
              />
               <Typography
                variant="h6"
                color="#0A56F1"
                fontWeight={600}
                fontSize="22px"
                fontFamily="outfit"
                component="div"
                sx={{ margin: "auto" }}
              >
                {item.title}
              </Typography>
            </div>
            <Typography
                variant="body2"
                color="#36454F"
                fontSize="20px"
                fontFamily="Outfit"
                fontWeight={500}
                marginY="20px"
                height={120}
              >
                {item.description}
              </Typography>
            <div className="py-5">
              <Image
                src="/Back.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </div>
          </div>
          </CardContent>
        </Card>
        ))}
      </div>
    </>
  );
};

export default Services;
