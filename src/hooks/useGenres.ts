import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
/* import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios"; */


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}



// const useGenres = () => useData<Genre>("/genres"); -- before we called the server to get the data
// const useGenres = () => ({ data: genres, isLoading: false, error: null }) // thend we used static data 
// now we use react query
const useGenres = () => useQuery({ 
  queryKey: ["genres"], 
  queryFn: () => 
    apiClient 
      .get<FetchResponse<Genre>>("/genres").then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, // genres will be stored for 24hrs in the cache
  initialData: {count: genres.length, results: genres} // for the initial data we use our genres static data, so we don't need to show the loading spinner
}); 

/*
interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }
  
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return; 
        setError(err.message);
        setLoading(false);
    });

      return () => controller.abort();
  }, []);

  return {genres, error, isLoading};
} */

export default useGenres;