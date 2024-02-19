import React, { useState, useContext } from "react";
import { Grid, Badge } from "@mui/material"; // Import Badge component from MUI

import sampleData from "../../resources/data/data.json";

import like from "../../resources/icons/favorite-filled.svg";
import unlike from "../../resources/icons/favorite.svg";
import factsoft from "../../resources/icons/facts-soft.svg";
import cart from "../../resources/icons/cart.svg";

import { CartContext } from "../App";

const HeaderBar = () => {
  const [liked, setLiked] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <div className="top-header">
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <h1 className="product-title">
            {sampleData.article.description_short}
          </h1>
        </Grid>
        <Grid item xs={2} className="icon-container">
          <img
            src={liked ? like : unlike}
            alt="Favorite Icon"
            className="header-icon"
            onClick={() => setLiked((like) => !like)}
          />
          <img src={factsoft} alt="" className="header-icon" />
        </Grid>
      </Grid>
      <Badge badgeContent={cartItems} color="error">
        <div id="cart-icon">
          <img src={cart} alt="" className="header-icon" />
        </div>
      </Badge>
    </div>
  );
};

export default HeaderBar;
