import { Image } from "antd";
import React from "react";

export interface ReviewerCardProp {
  review: string;
  reviewerName: string;
  address: string;
  image: string;
}
const ReviewerCard: React.FC<ReviewerCardProp> = ({
  address,
  image,
  review,
  reviewerName,
}) => {
  return (
    <div className="border flex flex-col p-[2rem] justify-center border-[#3F3FB5] space-y-3">
      <h1 className="text-[20px] font-medium leading-[24.8px]">{review}</h1>
      <div className="flex items-center space-x-2">
        <Image src={image} alt={reviewerName} preview={false} />
        <div className="">
          <h1 className="text-[20px] font-bold">{reviewerName}</h1>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewerCard;
