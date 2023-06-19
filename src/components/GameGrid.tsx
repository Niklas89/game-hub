import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
  /* replaced by GameQuery
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null; */
}

const GameGrid = ({ gameQuery }: Props) => {
  // const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  // const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  // get the number of games already fetched
  // reduce to combine the number of results in each page
  // initial value of total is 0, add the number of results of each page to the total
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; // 0 is the default value

  return (
    // {error && <Text>{error}</Text>}
    // columns change according to screen size
    // removed when added InfiniteScroll: <Box padding="10px">
    // hasNextPage will be converted to boolean with "!!", undefined default value converted to boolean false as default value
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
    /* removed when added InfiniteScroll:
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} 
    </Box> */
  );
};

export default GameGrid;
