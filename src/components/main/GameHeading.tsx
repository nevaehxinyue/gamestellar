import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const year = useGameQueryStore((s) => s.gameQuery.year);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {year === 2023 && "Best of the Year"}
      {year === 2022 && "Popular in 2022"}
      {year != 2022 && year != 2023 && heading}
    </Heading>
  );
};

export default GameHeading;
