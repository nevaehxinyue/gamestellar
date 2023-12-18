import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    // lg refers to the media screen width > 1024px
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre?.id })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <Box paddingLeft={2} marginBottom={5}>
        <GameHeading gameQuery={gameQuery} />

        <HStack spacing={5} >
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id})
            }
          />
          <SortSelector
            selectedOrder={gameQuery.sortOrder}
            onSelectOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
