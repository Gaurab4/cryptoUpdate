
   
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinpaprika1.p.rapidapi.com',
    'x-rapidapi-key': 'dbaebd1947msh4d95bece4773188p112fefjsn63a254c7b297'
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinpaprika1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/global`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/tickers'),
    }),
    
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;