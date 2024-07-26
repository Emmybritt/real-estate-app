import { Button } from "@/app/common/components/atoms/Button/Button";
import { Image } from "antd";
import React from "react";
import { formatNumber } from "../../../infrastructure/helper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property details",
  description: "View details about your properties",
};

interface PropertiesDetailsProps {
  name: string;
  description: string;
  postedBy: string;
  address: string;
  price: number;
  status: string;
  contactEmail: string;
}
const PropertiesDetails: React.FC<PropertiesDetailsProps> = ({
  address,
  description,
  name,
  postedBy,
  price,
  status,
  contactEmail,
}) => {
  return (
    <div
      className="
				flex
				flex-col
				sm:flex-row
				gap-[2rem]
				py-[3rem]
				md:items-center 
				justify-between 
				px-[1rem]
				md:px-[3rem] 
				lg:px-[6rem] 
				font-cabinet"
    >
      <div>
        <div className="flex flex-wrap items-center md:space-x-3">
          <h1 className="font-bold text-[40px] text-[#1E1E1E] leading-tight">
            {name}
          </h1>
          <p className="text-[12px] text-[#1818A6] font-medium bg-[#d1d1ed] px-[5px] py-[3px]">
            {status.split("_").join(" ")}
          </p>
        </div>
        <div className="text-sm text-[#1E1E1E]">
          <b>Description:</b> {description}
        </div>
        <div className="flex items-center space-x-3 text-[16px] text-[#1E1E1E] my-2">
          Posted by: {postedBy}
        </div>
        <div className="flex items-center space-x-2 mt-3">
          <Image
            src="/images/locationIcon.png"
            alt="location icon"
            loading="lazy"
          />
          <p className="text-[24px]">{address}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-[48px] text-[#1E1E1E] mb-3">
          ${formatNumber(price)}
        </h1>
        <a href={`mailto:${contactEmail}`} className="text-blue-500 underline">
          <Button label="Contact Agent" activeClass />
        </a>
      </div>
    </div>
  );
};

export default PropertiesDetails;
