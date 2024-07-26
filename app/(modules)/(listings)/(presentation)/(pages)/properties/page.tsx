"use server";
import PropertyCardSkeleton from "@/app/common/components/molecules/loader/PropertyCardSkeleton";
import { Suspense } from "react";
import { List } from "../../molecules/List";

interface PropertiesProps {
  searchParams: {
    offset: number;
    searchTerm: string;
    minPrice: string;
    maxPrice: string;
    location: string;
    propertyType: string[];
  };
}

const Propterties = async ({ searchParams }: PropertiesProps) => {
  return (
    <Suspense
      fallback={
        <div
          className="
				grid 
				grid-cols-1 
				md:grid-cols-2 
				lg:grid-cols-3 
				xl:grid-cols-4 
				px-[2rem]
				md:px-[3rem]
				lg:px-[4rem] 
				gap-[1rem]"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      }
    >
      <List
        location={searchParams.location}
        offset={searchParams.offset}
        maxPrice={searchParams.maxPrice}
        minPrice={searchParams.minPrice}
        searchTerms={searchParams.searchTerm}
        propertyType={searchParams.propertyType}
      />
    </Suspense>
  );
};

export default Propterties;
