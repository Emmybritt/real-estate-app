import { reviews } from "@/app/common/constants/data";
import React from "react";
import ReviewerCard from "../../molecules/Card/ReviewerCard";

const OurReview = () => {
  return (
    <div className="reviews-background-image font-cabinet py-[3rem]">
      <div className="flex flex-col items-center">
        <h3 className="text-[32px] text-center font-bold leading-[39.68px]">
          Let Our Reviews do the Talking
        </h3>
        <p className="pb-[1rem]">See what our clients are saying about us</p>
      </div>
      <div className="grid md:grid-cols-2 px-[1rem] sm:px-[3rem] md:px-[6rem] gap-[2rem] rounded-sm">
        {reviews.map((review, _index: number) => (
          <ReviewerCard
            address={review.address}
            image={review.image}
            review={review.review}
            reviewerName={review.author}
            key={_index}
          />
        ))}
      </div>
    </div>
  );
};

export default OurReview;
