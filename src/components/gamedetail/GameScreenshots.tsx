import { Img, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../../hooks/useScreenshots";

interface Props {
  gameSlug: string;
}

const GameScreenshots = ({ gameSlug }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameSlug);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
      {data?.results.map((img) => (
        <Img borderRadius={8} src={img.image} key={img.id}></Img>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
