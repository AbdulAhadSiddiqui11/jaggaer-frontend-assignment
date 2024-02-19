import React from "react";

import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";

import data from "../resources/data/data.json";

import ProductDisplay from "./components/ProductDisplay";



const App = () => {
  return (
    <div className="app">
      <HeaderBar />
      <ProductDisplay />
      <Footer description={data.article.description_long} data={data} />
    </div>
  );
};

export default App;
