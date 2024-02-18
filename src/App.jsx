import React from "react";
import Button from "@mui/material/Button";
import HeaderBar from "./components/HeaderBar";
import DetailsCard from "./components/DetailsCard";
import PricingAndShippingCard from "./components/PricingAndShippingCard";

import data from "../resources/data/data.json";

const App = () => {
  return (
    <div className="app">
      <HeaderBar />
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <DetailsCard data={data} />
        <DetailsCard data={data}/>
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <PricingAndShippingCard data={data} />
        <PricingAndShippingCard data={data}/>
      </div>
      
    </div>
  );
};

export default App;
