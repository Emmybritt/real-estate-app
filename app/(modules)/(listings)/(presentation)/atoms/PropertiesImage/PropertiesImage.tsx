import { Image } from "antd";
import React from "react";

interface PropertiesImageProp {
  photos: Array<Record<string, any>>;
}

const PropertiesImage: React.FC<PropertiesImageProp> = ({ photos }) => {
  return (
    <div>
      <h1 className="font-bold text-[20px] mb-4 px-[1rem] md:px-[3rem] lg:px-[6rem]">
        Other images of the apartment
      </h1>
      <div className="overflow-x-auto flex space-x-4 mx-[4rem]">
        {photos.map((photo, _index) => (
          <div key={_index} className="flex-shrink-0 w-[348px] h-[370px]">
            <Image
              width={348}
              height={370}
              src={photo.href}
              alt={`Property Image ${_index}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesImage;
