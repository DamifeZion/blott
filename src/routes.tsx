import React from "react";
import { Routes as Router, Route } from "react-router-dom"

const News = React.lazy(() => import("./pages/news"));
const NotFound = React.lazy(() => import("./pages/not-found"));

export const Routes = () => {
   return (
      <Router>
         <Route path="/" element={<News />} />
         <Route path="*" element={<NotFound />} />
      </Router>
   )
}