import meh from "../../assets/meh.webp";
import thumbsup from "../../assets/thumbs-up.webp";
import bullseye from "../../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
  5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
};

const Emojis = ({ rating }: Props) => {
  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emojis;
