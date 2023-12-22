import { Box, HStack, Text } from "@chakra-ui/react";
import Emojis from "../main/Emojis";
import Game from "../../entities/Game";

interface Props {
  game: Game;
}
const GameRatingText = ({ game }: Props) => {
  let ratingText;
  switch (game.rating_top) {
    case 5:
      ratingText = <Text fontSize="bold">Exceptional</Text>;
      break;
    case 4:
      ratingText = <Text fontSize="bold">Recommended</Text>;
      break;
    case 3:
      ratingText = <Text fontSize="bold">Meh</Text>;
      break;
    default: {
      ratingText = <Text fontSize="bold">Not rated yet</Text>;
    }
  }
  return (
    <HStack spacing={2}>
      <Text fontWeight="bold" fontSize="lg">
        {ratingText}
      </Text>
      <Text fontWeight="bold" fontSize="lg">
        ({game.rating})
      </Text>
      <Box marginBottom={2}>
        <Emojis rating={game.rating_top}></Emojis>
      </Box>
    </HStack>
  );
};

export default GameRatingText;
