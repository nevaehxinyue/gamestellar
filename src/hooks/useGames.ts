import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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
}

const useGames = (
    gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id } },
    [gameQuery]
  );

export default useGames;
