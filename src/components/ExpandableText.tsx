import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return children;

  const summary = expanded? children : children.substring(0, limit) + '...';

  return <Text>{summary}<Button size="xs" fontWeight="bold" colorScheme="yellow" marginLeft={2} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Show more'}</Button></Text>;
};

export default ExpandableText;
