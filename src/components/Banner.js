import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center mt-10">
      <div className="w-[480px]">
        <p className="text-[#0A56F1] text-4xl">Diversifying the Designs of Digital World</p>
        <p className="mt-5">
          Explorogent International Services Private Limited (EISPL) is one of
          the most famous companies in the sector of Web and Mobile Development.
          In the market, EISPL has a strong presence in providing quality
          services to its clients.
        </p>
        <p className="mt-5"> 
          EISPL is convinced that one should diversify the offering, given the
          changing needs of the clients. That is why we engage in multiple
          projects and activities. We also possess knowledge in web development,
          app development, UI/UX design, as well as digital marketing.
        </p>
        <div className="mt-5 bg-[#E68F50] w-[115px] p-3 rounded-3xl text-white">
        <button>Book a Call</button>
        </div>
      </div>
      <div>
        <Image
          src="/phone-photo.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
    </>
  );
};

export default Banner;
