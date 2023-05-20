import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

//queries and mutations along with the loading and error state
const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"], //add more
  endpoints: () => ({}),
});

export default apiSlice;
