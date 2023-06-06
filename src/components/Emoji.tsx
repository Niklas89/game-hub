import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // all the below properties will be added to the <Image /> component
  const emojiMap: { [key: number]: ImageProps } = {
    // [key: number] index signature, we tell Typescript that this object can have any number of keys
    // and the keys are numbers
    3: { src: meh, alt: "meh", boxSize: "25px" }, // boxSize: "25px": render the same size for each img
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  // emojiMap properties added here to the <Image /> component with ...emojiMap[rating]
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
