import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center my-20">
        <div className="w-[650px]">
          <Typography
            color="#0A56F1"
            fontFamily="outfit"
            fontWeight={600}
            fontSize="40px"
            className="text-4xl"
            width="500px"
          >
            Diversifying the Designs of Digital World
          </Typography>
          <Typography
            variant="subtitle2"
            fontFamily="outfit"
            fontWeight={400}
            fontSize="22px"
            color="#36454F"
            className="mt-5"
          >
            Explorogent International Services Private Limited (EISPL) is one of
            the most famous companies in the sector of Web and Mobile
            Development. In the market, EISPL has a strong presence in providing
            quality services to its clients.
          </Typography>
          <Typography
            variant="subtitle2"
            fontFamily="outfit"
            fontWeight={400}
            fontSize="22px"
            color="#36454F"
            className="mt-5"
          >
            EISPL is convinced that one should diversify the offering, given the
            changing needs of the clients. That is why we engage in multiple
            projects and activities. We also possess knowledge in web
            development, app development, UI/UX design, as well as digital
            marketing.
          </Typography>
          <div className="flex gap-3 mt-5 bg-[#E68F50] w-[150px] p-3 rounded-3xl text-white">
            <Image
              src="/call.png"
              width={30}
              height={30}
              alt="Picture of the author"
              style={{ background: "#ffff", borderRadius: "20px" }}
            />
            <button>Book a Call</button>
          </div>
        </div>
        <div>
          <Image
            src="/phone-photo.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
