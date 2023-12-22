import {
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box paddingY={5} fontSize="md">
      <Heading as="dt" color="gray.600" fontSize="md">
        {term}
      </Heading>
      <VStack spacing={1} align="start">
        {children}
      </VStack>
    </Box>
  );
};

export default DefinitionItem;
