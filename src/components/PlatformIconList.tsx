import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; // fontawesome
import { MdPhoneIphone } from "react-icons/md"; // material design
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; // Bootstrap
import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // key: string is an index signature, it says that the slugs pc, playstation,... is a key of type string
  const iconMap: { [key: string]: IconType } = {
    // slug of platform: icon
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    // marginY={1} is a theme.space (1 is 4px in ChakraUI), we can also use marginY={"10px"}
    <HStack marginY={1}>
      {platforms.map((platform) => (
        // <Text>{platform.name}</Text>
        // gray.500 found in https://chakra-ui.com/docs/styled-system/theme
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
