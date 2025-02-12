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

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    
  staleTime: ms("24h"),
  initialData: platforms
});

export default usePlatforms;