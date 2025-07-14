import React from "react";
import { updateState } from "../helpers/update-state";
import type { NewsT } from "../types";

const URL = "https://finnhub.io/api/v1/news";
const API_KEY = "crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg";

export const useNews = () => {
   const [state, setState] = React.useState<{
      data: Array<NewsT>;
      isLoading: boolean;
      isError: boolean;
      error: string;
   }>({
      data: [],
      isLoading: false,
      isError: false,
      error: "",
   });

   const handleUpdateState = updateState(setState);

   React.useLayoutEffect(() => {
      const getNews = async () => {
         try {
            handleUpdateState("isLoading", true);
            handleUpdateState("isError", false);
            handleUpdateState("error", "");

            const res = await fetch(URL, {
               method: "GET",
               headers: {
                  "X-Finnhub-Token": API_KEY,
               },
            });

            if (!res.ok) {
               handleUpdateState("error", "");
               handleUpdateState("isError", true);
               return;
            }

            const data = await res.json();

            console.log("Data: ", data);

            handleUpdateState("data", data);
            handleUpdateState("isLoading", false);
         } catch (err) {
         } finally {
            handleUpdateState("isLoading", false);
         }
      };

      getNews();
   }, []);

   return { state };
};
