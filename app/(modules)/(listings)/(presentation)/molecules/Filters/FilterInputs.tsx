"use client";
import { CustomInput } from "@/app/common/components/atoms/Input/Input";
import CustomSelect from "@/app/common/components/atoms/Select/CustomSelect";
import { propertTypeArr } from "@/app/common/constants/data";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import useDebouncedSearch from "../../../infrastructure/hooks/useDebounceSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterInputs = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialSearchTerm = searchParams.get("searchTerm") || "";
  const initialLocation = searchParams.get("location") || "";
  const initialMinPrice = searchParams.get("minPrice") || "";
  const initialMaxPrice = searchParams.get("maxPrice") || "";
  const initialPropertyTypes = searchParams.getAll("propertyType") || []; // Handle multiple types

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [location, setLocation] = useState(initialLocation);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [propertyTypes, setPropertyTypes] =
    useState<string[]>(initialPropertyTypes);
  const debouncedSearchTerm = useDebouncedSearch(searchTerm, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    let shouldSetSearchAndFilter = false;

    if (debouncedSearchTerm) {
      params.set("searchTerm", debouncedSearchTerm);
      shouldSetSearchAndFilter = true;
    } else {
      params.delete("searchTerm");
    }

    if (location) {
      params.set("location", location);
      shouldSetSearchAndFilter = true;
    } else {
      params.delete("location");
    }

    if (minPrice) {
      params.set("minPrice", minPrice);
      shouldSetSearchAndFilter = true;
    } else {
      params.delete("minPrice");
    }

    if (maxPrice) {
      params.set("maxPrice", maxPrice);
      shouldSetSearchAndFilter = true;
    } else {
      params.delete("maxPrice");
    }

    if (propertyTypes.length > 0) {
      propertyTypes.forEach((type) => params.append("propertyType", type)); // Append each property type
      shouldSetSearchAndFilter = true;
    } else {
      params.delete("propertyType");
    }

    if (shouldSetSearchAndFilter) {
      params.set("searchAndFilter", "true");
    } else {
      params.delete("searchAndFilter");
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [
    debouncedSearchTerm,
    location,
    minPrice,
    maxPrice,
    propertyTypes,
    searchParams,
    router,
    pathname,
  ]);

  return (
    <div className="grid grid-cols-2 px-[3em] md:px-[6rem] lg:px-[12rem] items-center gap-[1rem] mb-[3rem] mt-[2rem]">
      <CustomInput
        className="h-[56px] rounded-none"
        suffix={<SearchOutlined />}
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CustomInput
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <CustomSelect
        placeholder="Property Type"
        mode="multiple"
        options={propertTypeArr}
        onChange={(e) => setPropertyTypes(e)}
        value={propertyTypes}
      />
      <div className="flex items-center">
        <CustomInput
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <CustomInput
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterInputs;
