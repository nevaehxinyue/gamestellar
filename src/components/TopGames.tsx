import { Box, HStack, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { GiLaurelsTrophy } from "react-icons/gi";

const TopGames = () => {
  return (
  <Box marginBottom={5} marginTop={8}>
    <Heading>Top</Heading>
    <List>
      <ListItem>
        <HStack>
      <GiLaurelsTrophy />
      <Text>Best of the Year</Text>
      </HStack>

      </ListItem>

    </List>
    </Box>
    );
};

export default TopGames;
