import React from "react";
import Button from "@mui/material/Button";
import HeaderBar from "./components/HeaderBar";
import DetailsCard from "./components/DetailsCard";
import PricingAndShippingCard from "./components/PricingAndShippingCard";

import data from "../resources/data/data.json";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <HeaderBar />
      <Footer description={data.article.description_long} data={data} />
    </div>
  );
};

export default App;
