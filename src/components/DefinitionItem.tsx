import { Box, Flex, HStack, Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({term, children}: Props) => {
  return (
    <Box paddingY={5} fontSize='md'>
        <Heading as='dt' color='gray.600' fontSize='md'>{term}</Heading>
        <VStack spacing={1} align="start"> {/* This will add space between each child element */}
        {children}
      </VStack>
        {/* <Flex direction='row' flexWrap='wrap' alignItems='center'>
       {children}
      </Flex> */}
    
    </Box>
  )
}

export default DefinitionItem
