import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/sidenavbar/GenreList";
import TopGamesNav from "../components/sidenavbar/TopGamesNav";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Grid
        templateAreas={{ base: `"main"`, lg: `"main"`, xl: ` "aside main"` }}
        templateColumns={{
          base: "1fr",
          xl: "300px 1fr",
        }}
      >
        <Show above="xl">
          <GridItem area="aside" padding={5}>
            <TopGamesNav />
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
