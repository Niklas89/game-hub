// https://api.rawg.io/docs/#operation/games_list and check below "Responses"

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[] // in browser, inspect, Network tab, click on get game request, Preview tab and click on a game
    metacritic: number;
    rating_top: number; // a whole number
    // rating: number; // a floating point number
  }
  
  
  //replaced by gameQuery: const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
  const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // anytime the values in gameQuery object changes, React will refetch the games from the backend
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: { 
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 // 24 hrs
    /* we now created class APIClient<T> 
    queryFn: () => apiClient.get<FetchResponse<Game>>("/games", {
      params: { 
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }}).then(res => res.data), */
    });
  /* replaced by useQuery above
  useData<Game>("/games", { 
    params: { // parameters for the server call
      // replaced by gameQuery - genres: selectedGenre?.id, 
      // platforms: selectedPlatform?.id 
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }}, 
    // [selectedGenre?.id, selectedPlatform?.id]); - dependency array replaced by gameQuery
    [gameQuery]); // call server when gameQuery is updated
  */

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