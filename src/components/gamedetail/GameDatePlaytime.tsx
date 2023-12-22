import { Box, HStack, Text } from "@chakra-ui/react";
import formattedDate from "../../services/date-conversion";
import Game from "../../entities/Game";

interface Props {
  game: Game;
}

const GameDatePlaytime = ({ game }: Props) => {
  return (
    <HStack spacing={4} letterSpacing={2}>
      <Box
        paddingX="6px"
        textAlign="center"
        borderRadius="md"
        bg="white"
        color="black"
        borderWidth="2px"
        fontSize="sm"
      >
        {formattedDate(game.released)}
      </Box>

      <Text>Average Playtime: {game.playtime} hours</Text>
    </HStack>
  );
};

export default GameDatePlaytime;
