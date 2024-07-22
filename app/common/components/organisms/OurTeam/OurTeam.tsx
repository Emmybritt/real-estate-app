import { ourTeam } from "@/app/common/constants/data";
import { Image } from "antd";
import React from "react";

const OurTeam = () => {
  return (
    <div className="md:px-[6rem] sm:px-[3rem] px-[1rem] py-[4rem]">
      <div className="sx-auto py-[1rem]">
        <h1 className="text-center font-cabinet text-[48px] font-bold">
          Our Team
        </h1>
        <p className="text-[#696969] text-center text-[24px] font-cabinet leading-[29.76px]">
          Our team comprises of professionals from different branches and
          specializations
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 justify-center items-center gap-5">
        {ourTeam.map((team, _index) => (
          <div className="relative group" key={_index}>
            <Image
              alt="image"
              className="w-[100%]"
              src={team.image}
              preview={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg font-bold">{team.name}</h2>
              <p className="text-white">{team.position}</p>
              <div className="flex items-center gap-4 mt-2 justify-between">
                <a href={team.socials.facebook}>
                  <Image
                    alt="image"
                    src="/images/facebook.png"
                    preview={false}
                  />
                </a>
                <a href={team.socials.instagram}>
                  <Image
                    alt="image"
                    src="/images/instagram.png"
                    preview={false}
                  />
                </a>
                <a href={team.socials.linkedin}>
                  <Image
                    alt="image"
                    src="/images/linkedin.png"
                    preview={false}
                  />
                </a>
                <a href={team.socials.twitter}>
                  <Image
                    alt="image"
                    src="/images/twitter.png"
                    preview={false}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
