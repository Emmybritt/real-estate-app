"use client";
import React from "react";
import FilterInputs from "../../molecules/Filters/FilterInputs";
import { useProperties } from "../../../infrastructure/hooks/useProperties";
import PropertyCard from "@/app/common/components/molecules/Card/PropertyCard";
import PropertyCardSkeleton from "@/app/common/components/molecules/loader/PropertyCardSkeleton";

const Propterties = () => {
  const { properties, isLoading, error, loader, isFetching } = useProperties();

  if (error) return <div>Error loading properties</div>;
  return (
    <div>
      {/* <FilterInputs /> */}
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
        {properties.map((property, _index) => (
          <PropertyCard
            property_id={property.property_id}
            status={property.status}
            key={_index}
            address={property.location.address.line}
            amount={property.last_sold_price}
            name={property.branding[0].name}
            advertisers={property.advertisers[0].name}
            rating={5}
            image={property.primary_photo.href}
          />
        ))}
        {(isLoading || isFetching) &&
          Array.from({ length: 8 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
      </div>
      <div ref={loader} className="h-10 w-full" />
    </div>
  );
};

export default Propterties;
