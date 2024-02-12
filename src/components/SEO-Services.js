import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";


const Seo = () => {
  const Data = [
    {
      title: "Customized SEO Services",
      discription:
        "We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.",
    },
    {
      title: "On-Page SEO Services",
      discription:
        "We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.",
    },
    {
      title: "Off-Page SEO Services",
      discription:
        "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.",
    },
    {
      title: "Mobile SEO Services",
      discription:
        "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.",
    },
    {
      title: "Free Website Audit and Strategies",
      discription:
        "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.",
    },
  ];
  return (
    <>
        <Typography  color="#E68F50"
        fontFamily="Outfit"
          variant="h5"
          fontSize="40px"
          marginBottom="10px"
          fontWeight={600} textAlign="center" marginY={5}>SEO Services</Typography>
      <div className="flex flex-wrap justify-center">
      {Data.map((item, index) => (
      <div key={index} className="w-[550px] m-5">
      <div className="flex flex-wrap">
        <div>
        <Image
          src="/right.png"
          width={35}
          height={35}
          alt="Picture"
        />
        </div>
        <div>
        <Typography variant="h5" textAlign="center" fontFamily="outfit" fontSize="28px" fontWeight={600} color="#0A56F1" paddingX={2}>{item.title}</Typography>
        </div>
      </div>
      <div className="pl-14">
        <Typography variant="subtitle2" fontFamily="outfit" fontWeight={500} fontSize="22px" color="#36454F">{item.discription}</Typography>
      </div>
      </div>
      ))}
      </div>
    </>
  );
};

export default Seo;
