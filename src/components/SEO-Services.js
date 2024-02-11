import React from "react";
import Image from "next/image";

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
      <div>
        <p className="text-[#E68F50] text-center my-10">SEO Services</p>
      </div>
      <div className="flex flex-wrap justify-center">
      {Data.map((item, index) => (
      <div key={index} className="w-96 p-5">
      <div className="flex flex-wrap">
        <Image
          src="/right.png"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <h3 className="text-[#0A56F1] px-5">{item.title}</h3>
      </div>
      <div className="pl-12">
        <p>{item.discription}</p>
      </div>
      </div>
      ))}
      </div>
    </>
  );
};

export default Seo;
