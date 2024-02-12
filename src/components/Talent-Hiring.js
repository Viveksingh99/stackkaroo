import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Hiring = () => {
  const Data = [
    {
      img: "/locations.png",
      title: "Unleashing Top Talent Globally",
      description:
        "We offer 5% top talents and supports companies hiring from various time zones.",
    },
    {
      img: "/promotion.png",
      title: "Securing Success",
      description:
        "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.",
    },
    {
      img: "/pin.png",
      title: "Beyond Borders",
      description: "We provide both, flexible full-time and part-time jobs",
    },
    {
      img: "/badge.png",
      title: "End-to-End Excellence",
      description:
        "In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.",
    },
    {
      img: "/performance.png",
      title: "Efficiency Redefined",
      description:
        "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.",
    },
    {
      img: "/commitment.png",
      title: "Simplified Contracts Satisfied Partnerships",
      description:
        "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.",
    },
  ];
  return (
    <>
      <div className="text-center my-10">
        <Typography
          color="#E68F50"
          variant="h5"
          fontSize="40px"
          marginBottom="10px"
          fontWeight={600}
          fontFamily="outfit"
        >
          Stackkaroo’s Talent Hiring & Job Placement Services
        </Typography>
        <Typography
          variant="subtitle2"
          fontFamily="outfit"
          fontWeight={500}
          fontSize="22px"
          color="#36454F"
        >
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries. <br /> We
          also provide global job opportunities with good salaries, support, and
          professional development.
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center px-5">
        {Data.map((item, index) => (
          <Card
            sx={{ width: "400px", borderRadius: "20px", margin: "15px" }}
            key={index}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Image
                src={item.img}
                width={80}
                height={80}
                alt="Picture of the author"
                style={{ display: "block", margin: "auto" }}
              />
              <Typography
                variant="h6"
                color="#0A56F1"
                fontWeight={600}
                fontSize="22px"
                fontFamily="outfit"
                component="div"
                sx={{ margin: "auto", marginY: "20px" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="#36454F"
                fontSize="20px"
                fontFamily="Outfit"
                fontWeight={600}
                marginBotton="20px"
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Hiring;
