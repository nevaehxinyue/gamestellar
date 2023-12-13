import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => useData<Platform>("/xplatforms/lists/parents");

export default usePlatforms;
