import React from "react";
import { Navbar } from "./components/navbar";
import { Routes } from "./routes";
import { Loader } from "./components/loader";


const App = () => {
   return (
      <React.Suspense fallback={<Loader />}>
         <Navbar />
         <Routes />
      </React.Suspense>
   )
}

export default App;