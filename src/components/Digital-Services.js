import React from "react";
import Image from "next/image";

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
    <div>
      <h3 className="text-center text-[#E68F50] my-5">
        Stackkaroo’s Digital Services
      </h3>
      <p className="text-center mb-5">
        We excel with reliability, innovation and customer-centric approach for
        our quality products.
        <br />
        Our dedicated team ensures that the solutions provided are dependable
        and long-term
      </p>
      <div className="flex flex-wrap justify-center my-20">
        {Data.map((item, index) => (
          <div key={index} className="w-96 px-10">
            <div className="flex flex-wrap">
              <Image
                src={item.img}
                width={80}
                height={80}
                alt="Picture of the author"
              />
            <p className="text-[#0A56F1] p-5">{item.title}</p>
            </div>
            <p className="pt-5">
              {item.description}
            </p>
            <div className="py-5">
            <Image
              src="/Back.png"
              width={30}
              height={30}
              alt="Picture of the author"
              />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
