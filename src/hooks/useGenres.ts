import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { CACHE_KEY_GENRES } from "../components/Constants";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24h
    initialData: genres,
  });
};
// ({data: genres, isLoading: false, error: null});

export default useGenres;
