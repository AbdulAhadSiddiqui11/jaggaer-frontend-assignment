import React, { useContext, useState } from "react";
import { Grid, Typography, Button, Box, Link, TextField } from "@mui/material";
import StarFilledIcon from "../../resources/icons/star-filled.svg";
import StarIcon from "../../resources/icons/star.svg";
import percentIcon from "../../resources/icons/discount.svg";

import { CartContext } from "../App";

const ProductInfo = ({
  desc,
  supplier,
  stars,
  cost,
  shipping,
  tax,
  min,
  currency,
}) => {
  const [items, setItems] = useState(min);
  const { addToCart } = useContext(CartContext);

  const renderStars = () => {
    const filledStars = Math.floor(Number(stars));
    const starIcons = [];
    for (let i = 0; i < filledStars; i++) {
      starIcons.push(
        <img
          key={i}
          src={StarFilledIcon}
          alt="star-filled"
          style={{ width: "20px" }}
        />
      );
    }
    for (let i = filledStars; i < 5; i++) {
      starIcons.push(
        <img key={i} src={StarIcon} alt="star" style={{ width: "20px" }} />
      );
    }
    return starIcons;
  };

  return (
    <div style={{ padding: "30px", height: "300px" }}>
      <Grid
        container
        spacing={1}
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Grid item xs={12}>
            <Typography variant="body1">{desc}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="textSecondary"
              fontSize={13}
              padding={0}
              margin={0}
            >
              by{" "}
              <Link href={supplier.link} style={{ textDecoration: "none" }}>
                {" "}
                {supplier.name}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ padding: "10px 0px" }}>
            <Box display="flex" alignItems="center">
              {renderStars()}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              paddingTop: "10px",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
                gap: "5px",
              }}
            >
              <Typography variant="body1">
                {Number(Number(cost).toFixed(2)).toLocaleString("de-DE")}{" "}
                {currency}
                <Typography variant="span" color="textSecondary">
                  {" "}
                  +{Number(Number(shipping).toFixed(2)).toLocaleString(
                    "de-DE"
                  )}{" "}
                  {currency} shipping
                </Typography>
              </Typography>
              <img
                src={percentIcon}
                alt="attachment"
                style={{ width: "15px" }}
              />
            </div>
            <Typography variant="body1" color="textSecondary">
              {" "}
              all prices incl. {tax}% taxes
            </Typography>
          </Grid>
        </div>
        <div>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <TextField
              type="number"
              label="Quantity"
              variant="outlined"
              InputProps={{ endAdornment: "PCE" }}
              value={items}
              onChange={(e) => setItems(e.target.value)}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#e14e42",
                color: "#fff",
                marginLeft: "10px",
                borderRadius: "0",
              }}
              onClick={() => addToCart(Number(items))}
            >
              + Add to cart
            </Button>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default ProductInfo;
