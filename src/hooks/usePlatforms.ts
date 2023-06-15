import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
    
  staleTime: 24 * 60 * 60 * 1000, // platforms will be stored for 24hrs in the cache
  initialData: {count: platforms.length, results: platforms} // for the initial data we use our platforms static data, so we don't need to show the loading spinner
});

export default usePlatforms;