import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_API_HOST,
};

const baseUrl = process.env.REACT_APP_NEWS_API_BASE_URL;

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: cryptoNewsApiHeader,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
