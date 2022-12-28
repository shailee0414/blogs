import React from "react";
import PostList from "./components/PostList";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Details from "./components/Details";
import About from "./components/About";
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes >
        <Route path="/"   element={<PostList />}/>
        <Route path="/details"   element={<Details />}/>
        <Route path="/about"   element={<About />}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
};
export default App;
