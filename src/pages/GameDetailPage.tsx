import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import ExpandableText from "../components/gamedetail/ExpandableText";
import GameAttributes from "../components/gamedetail/GameAttributes";
import GameTrailer from "../components/gamedetail/GameTrailer";
import GameScreenshots from "../components/gamedetail/GameScreenshots";
import GameRatingText from "../components/gamedetail/GameRatingText";
import GameDatePlaytime from "../components/gamedetail/GameDatePlaytime";
import ToggleMenu from "../components/main/ToggleMenu";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  // '!' here is a non-null assertion operator, which is telling
  // the TypeScript that 'slug' variable is not null.

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
    <Flex justifyContent='flex-end'>
    <ToggleMenu />
    </Flex>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} marginTop={5}>
      <GridItem>
        <VStack spacing="4" align="start">
          <Heading>{game.name}</Heading>
          <GameDatePlaytime game={game} />
          <GameRatingText game={game} />
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </VStack>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameSlug={game.slug} />
      </GridItem>
    </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
