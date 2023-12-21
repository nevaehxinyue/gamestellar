import { Box, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <div>
      <Box paddingLeft={2} marginBottom={5}>
        <GameHeading />

        <HStack spacing={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
      </Box>
      <GameGrid />
    </div>
  );
};

export default HomePage;
