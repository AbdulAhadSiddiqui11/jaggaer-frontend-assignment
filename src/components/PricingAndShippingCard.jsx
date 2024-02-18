import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const PricingAndShippingCard = ({ data }) => {
  const { article } = data;
  const {
    price_breaks,
    minimum_order_quantity,
    transport_costs,
    delivery_time,
    unit,
    currency,
  } = article;

  const renderPriceBreaks = () => {
    return (
      <TableContainer component={Paper} style={{ marginTop: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(price_breaks).map(([quantity, price]) => (
              <TableRow key={quantity}>
                <TableCell>
                  {quantity} {unit}
                </TableCell>
                <TableCell>
                  {Number((Number(price) / Number(quantity)).toFixed(2)).toLocaleString('de-DE')} {currency}/
                  {unit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Card variant="outlined" style={{height: '420px'}}>
          <CardContent style={{ borderBottom: "1px solid #ccc" }}>
          <Typography
          component="div"
          style={{
            color: "#e14e42",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
          }}
        >
          PRICING & SHIPPING
        </Typography>

        {/* Details */}
        <ul style={{ paddingLeft: 17 }}>
          <li>
            <Typography>
              <span style={{color: '#757575'}}>Minimum order:</span>{minimum_order_quantity} {unit}
            </Typography>
          </li>
          <li>
            <Typography>
            <span style={{color: '#757575'}}>Shipping:</span>{" "}
              {Number(transport_costs).toLocaleString('de-DE')}{" "}
              {currency}
            </Typography>
          </li>
          <li>
            <Typography>
            <span style={{color: '#757575'}}>Delivery:</span> {delivery_time} days
            </Typography>
          </li>
        </ul>

              {/* Price Breaks */}
              <Typography
          component="div"
          color="textSecondary"
          style={{ margin: "5px" }}
        >
          Price breaks
        </Typography>

        {renderPriceBreaks()}
      </CardContent>
    </Card>
  );
};

export default PricingAndShippingCard;
