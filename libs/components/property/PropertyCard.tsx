import React from "react";
import Link from "next/link";
import { Box, Stack, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";

  return (
    <Stack className="card-config">
      {/* Top Section */}
      <Stack className="top">
        <Link
          href={{
            pathname: "/property-detail",
            query: { id: "test123dhjdhjdjhdhfhd" },
          }}
        >
          <img src={imagePath} alt="Property" />
        </Link>
        <Box className="top-badge">
          <img src="/img/icons/electricity.svg" alt="Badge" />
          <Typography>TOP</Typography>
        </Box>
        <Box className="price-box">
          <Typography>$250,000</Typography>
        </Box>
      </Stack>

      {/* Bottom Section */}
      <Stack className="bottom">
        {/* Name and Address */}
        <Stack className="name-address">
          <Stack className="name">
            <Link
              href={{
                pathname: "/property/detail",
                query: { id: "test123dhjdhjdjhdhfhd" },
              }}
            >
              <Typography>Kingstone Apartments</Typography>
            </Link>
          </Stack>
          <Stack className="address">
            <Typography>INCHEON, City-Hall 1122 - 60</Typography>
          </Stack>
        </Stack>

        {/* Options */}
        <Stack className="options">
          <Stack className="option">
            <img src="/img/icons/bed.svg" alt="Bed" />
            <Typography>2 bed</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/room.svg" alt="Room" />
            <Typography>7 room</Typography>
          </Stack>
          <Stack className="option">
            <img src="/img/icons/expand.svg" alt="Expand" />
            <Typography>170 m²</Typography>
          </Stack>
        </Stack>

        {/* Divider */}
        <Divider className="divider" />

        {/* Type and Buttons */}
        <Stack className="type-buttons">
          <Stack className="type">
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>
          <Stack className="buttons">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
            <IconButton color="default">
              <FavoriteIcon color="primary" />
            </IconButton>
            <Typography className="view-cnt">30</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
