import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/main/GameGrid";
import GenreList from "./components/sidenavbar/GenreList";
import PlatformSelector from "./components/main/PlatformSelector";
import SortSelector from "./components/main/SortSelector";
import GameHeading from "./components/main/GameHeading";

function App() {
  return (
    // lg refers to the media screen width > 1024px
    <Grid
      templateAreas={{ base: `"main"`, lg: ` "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <Box paddingLeft={2} marginBottom={5}>
          <GameHeading />

          <HStack spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
