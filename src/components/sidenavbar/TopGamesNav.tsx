import { Box, Heading, List } from "@chakra-ui/react";
import { GiLaurelsTrophy } from "react-icons/gi";
import { BsFire } from "react-icons/bs";

import TopGameCategory from "./TopGameCategory";

const topGameCategories = [
  {
    year: 2023,
    text: "Best of the Year",
    Icon: GiLaurelsTrophy,
  },
  {
    year: 2022,
    text: "Popular in 2022",
    Icon: BsFire,
  },
];

const TopGamesNav = () => {
  return (
    <Box marginBottom={5} marginTop={8}>
      <Heading as="h2" fontSize=" 2xl" marginBottom={3}>
        Top
      </Heading>
      <List spacing={4}>
        {topGameCategories.map((category) => (
          <TopGameCategory
            key={category.year}
            year={category.year}
            text={category.text}
            Icon={category.Icon}
          />
        ))}
      </List>
    </Box>
  );
};

export default TopGamesNav;
