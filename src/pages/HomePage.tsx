import { Box, Flex, HStack } from "@chakra-ui/react";
import GameGrid from "../components/main/GameGrid";
import GameHeading from "../components/main/GameHeading";
import PlatformSelector from "../components/main/PlatformSelector";
import SortSelector from "../components/main/SortSelector";
import ToggleMenu from "../components/main/ToggleMenu";

const HomePage = () => {
  return (
    <div>
      <Box paddingLeft={2} marginBottom={5}>
        <GameHeading />
        <Flex justifyContent='space-between'>
        <HStack spacing={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <ToggleMenu />
        </Flex>
      </Box>
      <GameGrid />
    </div>
  );
};

export default HomePage;
