import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_API_HOST,
};

const baseUrl = process.env.REACT_APP_CRYPTO_API_BASE_URL;

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: cryptoApiHeaders,
  }),
  endpoints: (builder) => ({
    // specify the names of the options like-
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
  }),
});

// NOTE This is a hook from Redux for all the query and we can fetch any data from it. and name should be like this =>
//      Prefix      --       Middle       --        Last
//       'use'         'NAME_OF_THE_QUERY'        'Query'

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
