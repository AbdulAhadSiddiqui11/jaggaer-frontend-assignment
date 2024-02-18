import React from "react";
import ItemCard from "./ItemCard";
import Grid from "@mui/material/Grid";
import sampleData from "../../resources/data/data.json"; // Import your data

function ItemList() {
  console.log(sampleData);
  return (
    <Grid container spacing={2}>
      {" "}
      {/* Adjust spacing as needed */}
      {sampleData.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          {" "}
          {/* Responsive sizing */}
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemList;
