import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PropertiesApiSlice = createApi({
  reducerPath: "PropertiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://realty-in-us.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", "realty-in-us.p.rapidapi.com");
      headers.set("x-rapidapi-key", process.env.NEXT_PUBLIC_RAPIDAPI_KEY ?? "");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchProperties: builder.query({
      query: ({ offset = 0, limit = 20 }) => ({
        url: "/properties/v3/list",
        method: "POST",
        body: {
          limit,
          offset,
          postal_code: "90004",
          status: ["for_sale", "ready_to_build"],
          sort: {
            direction: "desc",
            field: "list_date",
          },
        },
      }),
    }),
    fetchPropertyDetails: builder.query({
      query: (propertyId) => ({
        url: "/properties/v3/detail",
        method: "GET",
        params: { property_id: propertyId },
      }),
    }),
  }),
});

export const { useFetchPropertiesQuery, useFetchPropertyDetailsQuery } =
  PropertiesApiSlice;
