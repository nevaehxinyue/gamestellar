import { SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl" spacing={4}>
        <DefinitionItem term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Developers">
          {game.developers.map((developer) => (
            <Text key={developer.id}>{developer.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
      <DefinitionItem term="Tags">
        <Wrap>
          {game.tags.map((tag, index) =>
             (
              <WrapItem key={tag.id}>{tag.name}{index < game.tags.length - 1 ? ',' : ''}</WrapItem>
            ) 
          )}
        </Wrap>
      </DefinitionItem>
    </>
  );
};

export default GameAttributes;
