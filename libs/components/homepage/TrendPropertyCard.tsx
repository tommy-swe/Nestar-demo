import React from "react";
import { Box, Stack, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className={"trend-card-box"}>
      <Box
        className={"card-img"}
        style={{ backgroundImage: `url("/img/banner/types/apartment.webp")` }}
      >
        <div className={"price"}>$420000</div>
      </Box>
      <Box className={"info"}>
        <strong className={"title"}> Kingston Buildings</strong>
        <p className={"desc"}>This is Super view Apartments</p>
        <div className={"options"}>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>2 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>5 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>150 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className={"bott"}>
          <p>Rent</p>
          <div className={"view-like-box"}>
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">250</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
