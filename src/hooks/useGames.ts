import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import  { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // An array of objects, with each object having a property called 'platform' of type 'Platform'.
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
          params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,

          },
        }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 //24h
  });
 
};

export default useGames;
