import React, { useState } from "react";
import {
  Grid,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ZoomInIcon from "../../resources/icons/zoom-in.svg";
import packageIcon from "../../resources/icons/package.svg";

const images = [packageIcon, packageIcon, packageIcon];

const ProductDisplay = () => {
  const indexedImages = images.map((image, idx) => ({ idx, image }));
  const [selectedImage, setSelectedImage] = useState(indexedImages[0].image);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image.image);
    setSelectedIdx(image.idx);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Grid
            container
            spacing={1}
            direction={{ sm: "row", md: "column" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {indexedImages
              .filter((image) => image.idx !== selectedIdx)
              .map((image) => (
                <Grid
                  key={image.idx}
                  item
                  style={{
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                    marginRight: "5px",
                    padding: "0",
                  }}
                >
                  <div onClick={() => handleImageClick(image)}>
                    <img
                      src={image.image}
                      alt={`Product Image ${image.idx}`}
                      style={{
                        objectFit: "cover",
                        cursor: "pointer",
                        width: "100px",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid #ccc",
            position: "relative",
            padding: "0",
          }}
        >
          <div onClick={handleDialogOpen}>
            <img
              src={selectedImage}
              alt="Main Product Image"
              style={{
                width: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
            <img
              src={ZoomInIcon}
              alt="Zoom In"
              style={{
                position: "absolute",
                bottom: 5,
                right: 5,
                width: "30px",
                cursor: "pointer",
              }}
            />
          </div>
        </Grid>
        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Zoomed in product image</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div style={{ width: "50vh", height: "50vh", overflow: "auto" }}>
                <img
                  src={selectedImage}
                  alt="Enlarged Product Image"
                  style={{
                    width: "150%",
                    height: "150%",
                    objectFit: "contain",
                    cursor: "zoom-in",
                  }}
                />
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Grid>
    </div>
  );
};

export default ProductDisplay;
