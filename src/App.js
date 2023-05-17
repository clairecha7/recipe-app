import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrivateRouter from "./components/PrivateRouter";
import { RecipeProvider } from "./context/Recipe";
import { About, Home, Login, Details } from "./pages";

const App = () => {
  return (
    <RecipeProvider>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </RecipeProvider>
  );
};

export default App;
