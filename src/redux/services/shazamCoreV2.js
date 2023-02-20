/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreAPIv2 = createApi({
  reducerPath: 'shazamCoreApiV2',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v2',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '547e6a6dfbmsha00e439e689b12ep1dd9d3jsn980ed104633c'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetArtistDetailsQuery } = shazamCoreAPIv2;
