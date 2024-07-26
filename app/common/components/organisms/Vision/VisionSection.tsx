import { Image } from "antd";
import React from "react";

const VisionSection = () => {
  return (
    <div
      className="grid md:grid-cols-2
				px-[1rem]
				md:px-[3rem]
        lg:px-[6rem] 
        gap-[3rem] 
        py-[4rem]"
    >
      <div>
        <h1 className="text-[48px] font-bold  mb-[2rem] font-cabinet">
          Our Vision
        </h1>
        <p className="text-[18px] font-medium font-cabinet text-[#696969]">
          Get access to only the best selected tutors from all over the world.
          Learn from experienced experts hand picked just for you . Learning is
          a continuous process. Build a reputable brand by choosing us.Get
          access to only the best selected tutors from all over the world. Learn
          from experienced experts hand picked just for you . Learning is a
          continuous process. Build a reputable brand by choosing us.Get access
          to only the best selected tutors from all over the world. Learn from
          experienced experts hand picked just for you . Learning is a
          continuous process. Build a reputable brand by choosing us
        </p>
      </div>
      <div className="">
        <Image
          className="w-[100%] lg:w-[630px]"
          src="/images/vision.png"
          preview={false}
          alt="vision"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default VisionSection;
