import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      const params = {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        dates: gameQuery.year
          ? `${gameQuery.year}-01-01,${gameQuery.year}-12-31`
          : undefined,
      };
      return apiClient.getAll({ params });
    },

    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), //24h
  });
};

export default useGames;
