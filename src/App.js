import React from "react";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import { Route, Routes } from "react-router-dom";
import TourPage from "./pages/TourPage";
import BookPage from "./pages/BookPage";
import PricePage from "./pages/PricePage";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/intro" element={<Introduce></Introduce>}></Route>
        <Route path="/tour" element={<TourPage></TourPage>}></Route>
        <Route path="/book" element={<BookPage></BookPage>}></Route>
        <Route path="/price" element={<PricePage></PricePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        {/* <Home></Home> */}
        {/* <Introduce></Introduce> */}
      </Routes>
    </div>
  );
};

export default App;
