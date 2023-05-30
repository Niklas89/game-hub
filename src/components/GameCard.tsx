import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      {/* overflow:hidden is needed, otherwise border radius on the top is not applied on the image */}
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* by grabing the platform object : 
        {game.parent_platforms.map((platform) => (
          <Text>{platform.platform.name}</Text> 
          OR by grabing the platform property below: 
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
        */}
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
