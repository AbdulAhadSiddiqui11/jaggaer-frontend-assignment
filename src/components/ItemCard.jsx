import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ItemCard({ item }) {
  return (
    <Card>
      <CardContent>
        {/* Placeholder for image */}
        <Typography variant="h5" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {item.price}
        </Typography>
        {/* Optionally add description component here */}
        <Button variant="contained">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
