"use server";

import axios from "axios";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

const baseUrl = "https://realty-in-us.p.rapidapi.com";
const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY ?? "";

export const fetchProperties = async ({
  offset = 0,
  limit = 20,
  maxPrice,
  minPrice,
  propertyType,
  searchTerms,
  location,
}: {
  offset?: number;
  limit?: number;
  maxPrice: string;
  minPrice: string;
  propertyType: string;
  searchTerms: string;
  location: string;
}): Promise<Record<any, any>> => {
  unstable_noStore(); // ensures dynamic site generation
  try {
    const response = await axios.post(
      `${baseUrl}/properties/v3/list`,
      {
        limit,
        offset,
        keywords: [searchTerms],
        address: location,
        postal_code: "90004",
        list_price: { max: maxPrice, min: minPrice },
        type: [propertyType],
        status: ["for_sale", "ready_to_build"],
        sort: {
          direction: "desc",
          field: "list_date",
        },
      },
      {
        headers: {
          "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    );
    return response.data.data.home_search.results;
  } catch (error: any) {
    throw new Error("Failed to fetch properties: " + error.message);
  }
};

export const fetchPropertyDetails = async (
  propertyId: string,
): Promise<Record<any, any>> => {
  unstable_noStore(); // ensures dynamic site generation
  try {
    const response = await axios.get(`${baseUrl}/properties/v3/detail`, {
      params: { property_id: propertyId },
      headers: {
        "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    });
    return response.data.data.home;
  } catch (error: any) {
    notFound();
  }
};
