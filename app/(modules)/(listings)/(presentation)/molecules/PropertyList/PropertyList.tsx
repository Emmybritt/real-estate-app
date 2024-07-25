"use client";
import PropertyCard from "@/app/common/components/molecules/Card/PropertyCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../../infrastructure/hooks/useIntersectionObserver";

const PropertyList: React.FC<any> = ({ properties }) => {
  const [data, setData] = useState<Array<Record<string, any>>>([]);
  const loader = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const isSearch = searchParams.get("searchAndFilter");
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePagination = () => {
    const currentOffset = searchParams.get("offset");
    const params = new URLSearchParams(searchParams);
    params.set("offset", `${Number(currentOffset || 0) + 20}`);
    params.set("searchAndFilter", "false");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useIntersectionObserver({ containerRef: loader, onView: handlePagination }, [
    data,
  ]);

  useEffect(() => {
    if (isSearch === "true") {
      setData(properties);
    } else {
      setData((prev) => [...prev, ...properties]);
    }
  }, [properties, isSearch]);
  return (
    <>
      {data.map((property: any, _index: number) => (
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

      <div ref={loader} className="h-10 w-full" />
    </>
  );
};

export default PropertyList;
