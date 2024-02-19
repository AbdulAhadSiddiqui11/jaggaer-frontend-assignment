import React, { createContext, useState, useContext } from "react";

import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import data from "../resources/data/data.json";
import ProductDisplay from "./components/ProductDisplay";
import ProductInfo from "./components/ProductInfo";
import { Grid } from "@mui/material";

export const CartContext = createContext();

const App = () => {
  const [cartItems, setCartItems] = useState(Number(data.cart.items));

  const addToCart = (items) => {
    setCartItems((prevItems) => prevItems + items);
  };

  console.log("Items: ", cartItems);
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <div className="app">
        <HeaderBar />
        <Grid container spacing={2}>
          {/* On small screens and below, take full width */}
          <Grid item xs={12} sm={12} md={5}>
            <ProductDisplay />
          </Grid>
          {/* On small screens and below, take full width */}
          <Grid item xs={12} sm={12} md={5}>
            <ProductInfo
              desc={data.article.description_short}
              supplier={{
                name: data.article.supplier_name,
                link: data.article.supplier_link,
              }}
              stars={Number(data.article.stars)}
              cost={data.article.price}
              shipping={data.article.transport_costs}
              tax={data.article.vat_percent}
              min={data.article.minimum_order_quantity}
              currency={data.article.currency}
            />
          </Grid>
        </Grid>
        <Footer description={data.article.description_long} data={data} />
      </div>
    </CartContext.Provider>
  );
};

export default App;
