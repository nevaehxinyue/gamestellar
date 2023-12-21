import Platform  from "../entities/Platform";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import APIClient from "../services/api-client";
import ms from "ms";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: platforms,
  });
};
// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
