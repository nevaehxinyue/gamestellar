import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    // lg refers to the media screen width > 1024px
    <Grid templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}> 
      <GridItem area="nav">
        <NavBar /> 
      </GridItem>
      <Show above="lg">
      <GridItem area="aside">
        Aside
      </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
