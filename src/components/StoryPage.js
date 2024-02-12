import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const StoryPage = () => {
  return (
    <>
      <div className="text-center py-10">
        <Typography
          fontFamily="Outfit"
          fontWeight={600}
          fontSize="40px"
          color="#E68F50"
        >
          Stay Ahead!
        </Typography>
        <Typography
          fontFamily="Outfit"
          fontWeight={600}
          fontSize="40px"
          color="#E68F50"
        >
          Launch Your Next Project with Stackkaroo
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-[500px]">
          <Typography
            fontFamily="outfit"
            fontWeight={700}
            fontSize="35px"
            color="#0A56F1"
          >
            Our Story
          </Typography>
          <Typography
            variant="subtitle2"
            fontFamily="outfit"
            fontWeight={400}
            fontSize="22px"
            color="#36454F"
          >
            Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra
            bring their extensive experience to the forefront as industry
            veterans. Our team is fueled by innovation, continually striving to
            exceed customer expectations.
          </Typography>
          <Typography
            fontFamily="outfit"
            fontWeight={400}
            fontSize="22px"
            color="#36454F"
          >
            Operating from our registered office in Agartala Sadar, Tripura (W),
            our company is officially registered with the Corporate
            Identification Number (CIN). Our active status and an authorized
            share capital of Rs 10.00 lac are a source of pride.
          </Typography>
          <div className="flex mt-5 bg-[#E68F50] w-[240px] p-3 rounded-3xl text-white">
          <Image
            src="/rupya.png"
            width={25}
            height={25}
            alt="Picture of the author"
          />
            <button className="ml-2">Get Estimated Project Cost</button>
          </div>
        </div>
        <div>
          <Image
            src="/new-photo.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default StoryPage;
