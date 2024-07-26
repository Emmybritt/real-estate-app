"use server";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import PropertyDetailsBanner from "../../../atoms/PropertyDetailsBanner/PropertyDetailsBanner";
import PropertiesDetails from "../../../molecules/PropertiesDetails/PropertiesDetails";
import PropertiesImage from "../../../atoms/PropertiesImage/PropertiesImage";
import { fetchPropertyDetails } from "@/app/(modules)/(listings)/infrastructure/server-actions/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property details",
  description: "View details about your properties",
};

interface PropertiesProps {
  searchParams: { name: string };
  params: { id: string };
}

const PropertyDetails = async ({ params, searchParams }: PropertiesProps) => {
  const property = await fetchPropertyDetails(params.id);

  return (
    <div>
      <PropertyDetailsBanner image={property?.photos[0].href} />
      <PropertiesDetails
        address={property?.location.address?.line}
        description={property?.description?.text}
        name={searchParams.name ?? ""}
        postedBy={property?.advertisers[0].name}
        price={property?.list_price}
        status={property.status}
        contactEmail={property?.advertisers[0].email}
      />
      <PropertiesImage photos={property?.photos} />
    </div>
  );
};

export default PropertyDetails;
