import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact={true} element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
