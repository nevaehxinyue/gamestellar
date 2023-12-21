import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import TopGames from "../components/TopGames";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Grid
        templateAreas={{ base: `"main"`, lg: ` "aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <TopGames />
            <GenreList />
          </GridItem>
        </Show>
        <GridItem padding={8} area="main">
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Layout;
