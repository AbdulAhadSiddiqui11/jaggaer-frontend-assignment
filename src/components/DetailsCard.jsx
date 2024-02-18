import React from "react";
import { Card, CardContent, Typography, Link, Chip } from "@mui/material";

import clipIcon from "../../resources/icons/attachment.svg";

const DetailsCard = ({ data }) => {
  const { article } = data;

  const renderFeatures = () => {
    return (
      <ul>
        {Object.entries(article.features).map(([feature, description]) => (
          <li key={feature}>
            <Typography variant="body1" color="textSecondary" component="span">
              {feature}:
            </Typography>{" "}
            <Typography variant="body1" color="textPrimary" component="span">
              {description}
            </Typography>
          </li>
        ))}
      </ul>
    );
  };

  const renderKeywords = () => {
    return article.keywords.map((keyword, index) => (
      <Chip
        key={index}
        label={keyword}
        style={{
          marginRight: "5px",
          marginBottom: "5px",
          backgroundColor: "black",
          color: "white",
        }}
      />
    ));
  };

  const renderAttachments = () => {
    return article.attachments.map((attachment, index) => (
      <div
        key={index}
        style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
      >
        <img src={clipIcon} alt="attachment" style={{ width: "15px" }} />
        <Link
          href={attachment.file_link}
          style={{ marginLeft: "5px", textDecoration: "none" }}
        >
          {attachment.file_label}
        </Link>
      </div>
    ));
  };

  return (
    <Card variant="outlined" style={{ height: '420px' }}>
      <CardContent>
        <Typography
          component="div"
          style={{
            color: "#e14e42",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
            marginBottom: "15px",
          }}
        >
          DETAILS
        </Typography>

        <Typography
          component="div"
          color="textSecondary"
        >
          Features
        </Typography>
        {renderFeatures()}

        <Typography
          component="div"
          color="textSecondary"
          style={{ margin: "5px" }}
        >
          Attachments
        </Typography>
        <div style={{ marginBottom: "10px" }}>{renderAttachments()}</div>

        <Typography
          component="div"
          color="textSecondary"
          style={{ margin: "5px" }}
        >
          Keyboards
        </Typography>
        {renderKeywords()}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
