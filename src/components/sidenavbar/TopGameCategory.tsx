import { ListItem, HStack, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../store";
import { IconType } from "react-icons";

interface Props {
  year: number;
  text: string;
  Icon: IconType;
}

const TopGameCategory = ({ year, text, Icon }: Props) => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const setYear = useGameQueryStore((s) => s.setYear);
  const selectedYear = useGameQueryStore((s) => s.gameQuery.year);

  const navigate = useNavigate();

  // A function to apply styles conditionally
  const isSelected = selectedYear === year;
  const iconBoxStyle = isSelected ? "white" : "gray.650";
  const iconColor = isSelected ? "gray.800" : "white";
  const fontWeight = isSelected ? "bold" : "normal";

  return (
    <ListItem>
      <HStack
        _hover={{
          ".icon-box": { bg: "white" },
          ".icon": { color: "gray.800", bg: "white" },
        }}
        sx={{
          ".icon-box": { bg: iconBoxStyle },
          ".icon": { color: iconColor },
        }}
      >
        <Box className="icon-box" padding={1.5} borderRadius={6}>
          <Icon className="icon" size="28px" />
        </Box>

        <Text
          as="button"
          fontSize="lg"
          _hover={{ fontWeight: "bold" }}
          onClick={() => {
            setYear(year);
            setSortOrder("-metacritic");
            navigate("/");
          }}
          fontWeight={fontWeight}
        >
          {text}
        </Text>
      </HStack>
    </ListItem>
  );
};

export default TopGameCategory;
