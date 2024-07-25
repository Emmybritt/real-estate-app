import PropertyCardSkeleton from "@/app/common/components/molecules/loader/PropertyCardSkeleton";
import { fetchProperties } from "../../infrastructure/server-actions/actions";
import FilterInputs from "./Filters/FilterInputs";
import PropertyList from "./PropertyList/PropertyList";

export const List = async ({
  offset,
  maxPrice,
  minPrice,
  propertyType,
  searchTerms,
  location,
}: {
  offset: number;
  maxPrice: string;
  minPrice: string;
  propertyType: string;
  searchTerms: string;
  location: string;
}) => {
  const properties = await fetchProperties({
    offset,
    maxPrice,
    minPrice,
    propertyType,
    searchTerms,
    location,
  });

  console.log(properties, "hehehhe");

  return (
    <div>
      <FilterInputs />
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
        <PropertyList properties={properties} />
      </div>
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
        {properties.length !== 0 ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </>
        ) : (
          <p className="text-center font-medium text-[20px]">
            No properties found for your search criteria.
          </p>
        )}
      </div>
    </div>
  );
};
