import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {/* overflow:hidden is needed, otherwise border radius on the top is not applied on the image */}
      {children}
    </Box> // Box returns a div in chakra when rendered
  );
};

export default GameCardContainer;
