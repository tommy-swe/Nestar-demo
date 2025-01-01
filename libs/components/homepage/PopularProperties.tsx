import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularProperties = () => {
  const [popularProperties, setTrendProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className={"trend-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Trend Properties</span>
            <p>Trend is base on likes</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}></div>
            <WestIcon className={"swiper-trend-prev"} />
            <div className={"swiper-trend-pagination"}>
              <EastIcon className={"swiper-trend-next"} />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}>No properties found</Box>
          ) : (
            <Swiper
              className={"trend-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
                clickable: true,
              }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"trend-property-slide"}>
                    <PopularProperties />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PopularProperties;