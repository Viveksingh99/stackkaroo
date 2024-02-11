import React from "react";
import Image from "next/image";

const StoryPage = () => {
  return (
    <>
      <div className="text-center py-10">
        <p className="text-[#E68F50] text-lg">Stay Ahead!</p>
        <p className="text-[#E68F50] text-lg">Launch Your Next Project with Stackkaroo</p>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-[480px]">
          <p className="text-[#0A56F1] text-4xl">Our Story</p>
          <p className="mt-5">
            Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra
            bring their extensive experience to the forefront as industry
            veterans. Our team is fueled by innovation, continually striving to
            exceed customer expectations.
          </p>
          <p className="mt-5">
            Operating from our registered office in Agartala Sadar, Tripura (W),
            our company is officially registered with the Corporate
            Identification Number (CIN). Our active status and an authorized
            share capital of Rs 10.00 lac are a source of pride.
          </p>
          <div className="mt-5 bg-[#E68F50] w-[240px] p-3 rounded-3xl text-white">
            <button>Get Estimated Project Cost</button>
          </div>
        </div>
        <div>
          <Image
            src="/new-photo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default StoryPage;
