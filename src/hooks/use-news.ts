import React from "react";
import { updateState } from "../helpers/update-state";
import type { NewsStateT } from "../types";

const URL = "https://finnhub.io/api/v1/news";
const API_KEY = import.meta.env.VITE_API_KEY;

export const useNews = () => {
   const [state, setState] = React.useState<NewsStateT>({
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
