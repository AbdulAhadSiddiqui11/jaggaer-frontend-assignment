import React from "react";
import { Typography, Grid } from "@mui/material";
import DetailsCard from "./DetailsCard";
import PricingAndShippingCard from "./PricingAndShippingCard";

const Footer = ({ description, data }) => {
  return (
    <div style={{ backgroundColor: "#efefef", paddingBottom: '20px', paddingLeft: '10px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          <Typography
            component="div"
            style={{
              color: "#e14e42",
              padding: "20px 10px",
            }}
          >
            DESCRIPTION
          </Typography>
          <Typography style={{ padding: "0 10px", textAlign: "justify" }}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <DetailsCard data={data} />
        </Grid>
        <Grid item xs={12} md={5}>
          <PricingAndShippingCard data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
