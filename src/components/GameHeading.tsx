import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
    const selectedGenre = useGenre(gameQuery.genreId);

   const selectedPlatform = usePlatform(gameQuery.platformId);

    const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`
  return (
    <Heading as='h1'fontSize='5xl' marginY={5}>{heading}</Heading>
  )
}

export default GameHeading
