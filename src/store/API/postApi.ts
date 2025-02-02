import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Utils/baseUrl";

interface ISeasonWinner {
  id: number,
  name: string,
  shortName: string,
  tla: string,
  crest: string,
  address: string,
  website: string,
  founded: number,
  clubColors: string,
  venue: string,
  lastUpdated: string
}

interface ISeasons {
  id: number,
  startDate: string,
  endDate: string,
  currentMatchday: number,
  winner: null | ISeasonWinner
}

interface IGetLigue {
  area: {
    id: number,
    name: string,
    code: string,
    flag: string,
  },
  id: number,
  name: string,
  code: string,
  type: string,
  emblem: string,
  currentSeason: {
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number,
    winner: null | {}
  },
  seasons: ISeasons[]
}





export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-Auth-Token", "7150ef761a0f463389f3cdd826014de3");
      return headers;
    } }),
  endpoints: (builder) => ({
    getLigue: builder.query<IGetLigue, string>({
      query: (ligue) => `/competitions/${ligue}`
    })
  })
})

export const {useLazyGetLigueQuery} = postApi;
