import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Img,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Game from "../../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/img-url";
import Emojis from "./Emojis";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in, height .3s ease",
        height: isExpanded ? "auto" : undefined,
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Img src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" _hover={{ filter: "brightness(0.7)" }}>
          <Link to={"/games/" + game.slug}>
            {game.name}
            <Emojis rating={game.rating_top} />
          </Link>
        </Heading>
        {isExpanded && (
          <Box>
            <Flex
              paddingY={2}
              justifyContent="space-between"
              borderBottom="1px solid"
              borderColor="gray.500"
              fontSize="small"
            >
              <Text fontWeight="bold" color="gray.500">
                Release data:{" "}
              </Text>
              <Text fontWeight="semibold">{game.released}</Text>
            </Flex>
            <Flex
              paddingY={2}
              justifyContent="space-between"
              borderBottom="1px solid"
              borderColor="gray.500"
              fontSize="small"
            >
              <Text  marginRight={2} fontWeight="bold" color="gray.500">
                Genres:
              </Text>
              <Text></Text>
              <HStack fontWeight="semibold">
                <Wrap>
                  {game.genres.map((genre, index) => (
                    <WrapItem  key={genre.id}>
                      <Text textDecoration='underline'>{genre.name}</Text>
                      {index < game.genres.length - 1 &&  <Text as="span">, </Text>
                      }
                    </WrapItem>
                  ))}
                </Wrap>
              </HStack>
            </Flex>
          </Box>
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;
