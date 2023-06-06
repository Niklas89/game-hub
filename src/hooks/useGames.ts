// https://api.rawg.io/docs/#operation/games_list and check below "Responses"

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[] // in browser, inspect, Network tab, click on get game request, Preview tab and click on a game
    metacritic: number;
  }
  
  
  //replaced by gameQuery: const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
  const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", { 
    params: { // parameters for the server call
      /*replaced by gameQuery - genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id */
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }}, 
    // [selectedGenre?.id, selectedPlatform?.id]); - dependency array replaced by gameQuery
    [gameQuery]); // call server when gameQuery is updated

  /*
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  } 

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return; 
        setError(err.message);
        setLoading(false);
    });

      return () => controller.abort();
  }, []);

  return {games, error, isLoading};
} */

export default useGames; 