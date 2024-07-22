import { Image } from "antd";
import React from "react";

interface PropertyDetailsBannerProp {
  image: string;
}

const PropertyDetailsBanner: React.FC<PropertyDetailsBannerProp> = ({
  image,
}) => {
  return (
    <>
      <Image
        src={image}
        alt="property-banner"
        preview={false}
        height={571}
        style={{ width: "2000px" }}
      />
    </>
  );
};

export default PropertyDetailsBanner;
