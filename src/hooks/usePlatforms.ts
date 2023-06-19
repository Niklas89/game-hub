import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    /* we now created class APIClient<T> 
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
    */
    
  //staleTime: 24 * 60 * 60 * 1000, // platforms will be stored for 24hrs in the cache
  staleTime: ms("24h"), // installed ms package
  // for the initial data we use our platforms static data, so we don't need to show the loading spinner
  // initialData: {count: platforms.length, results: platforms, next: null} 
  // in the static data file we now added count, next, previous and results properties by going to "Network" > request > "Response" tabs
  initialData: platforms
});

export default usePlatforms;