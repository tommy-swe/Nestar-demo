import React, { useState } from "react";
import {
  Button,
  Stack,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const propertySquare = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

const Filter: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [propertyPrice, setPropertyPrice] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: 2500000,
  });

  return (
    <Stack className="filter-main">
      <Stack className="find-your-home" mb="40px">
        <Typography className="title-main">Find Your Home</Typography>
        <Stack className="input-box">
          <OutlinedInput
            value={searchText}
            type="text"
            className="search-input"
            placeholder="What are you looking for?"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
          />
          <img src="/img/icons/search_icon.png" alt="" />
          <Tooltip title="Reset">
            <IconButton onClick={() => setSearchText("")}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <p className="title" style={{ textShadow: "0px 3px 4px #b9b9b9" }}>
          Location
        </p>
        <Stack
          className="property-location"
          style={{ height: showMore ? "253px" : "115px" }}
        >
          {["SEOUL", "BUSAN", "INCHEON"].map((location) => (
            <Stack className="input-box" key={location}>
              <Checkbox
                id={location}
                className="property-checkbox"
                color="primary"
                size="small"
                checked={false}
              />
              <label htmlFor={location} style={{ cursor: "pointer" }}>
                <Typography className="property-type">{location}</Typography>
              </label>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <Typography className="title">Property Type</Typography>
        {["APARTMENT", "HOUSE", "VILLA"].map((type) => (
          <Stack className="input-box" key={type}>
            <Checkbox
              id={type}
              className="property-checkbox"
              color="default"
              size="small"
              value={type}
            />
            <label htmlFor={type} style={{ cursor: "pointer" }}>
              <Typography className="property_type">{type}</Typography>
            </label>
          </Stack>
        ))}
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <Typography className="title">Rooms</Typography>
        <Stack className="button-group">
          {["Any", "1", "2", "3", "4", "5+"].map((room, index) => (
            <Button
              key={index}
              sx={{
                borderRadius: index === 0 ? "12px 0 0 12px" : "0",
                border: "1px solid #b9b9b9",
              }}
            >
              {room}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <Typography className="title">Bedrooms</Typography>
        <Stack className="button-group">
          {["Any", "1", "2", "3", "4", "5+"].map((bedroom, index) => (
            <Button
              key={index}
              sx={{
                borderRadius: index === 0 ? "12px 0 0 12px" : "0",
                border:
                  index === 2 || index === 4
                    ? "2px solid #181a20"
                    : "1px solid #b9b9b9",
              }}
            >
              {bedroom}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <Typography className="title">Options</Typography>
        {["Barter", "Rent"].map((option) => (
          <Stack className="input-box" key={option}>
            <Checkbox
              id={option}
              className="property-checkbox"
              color="default"
              size="small"
              value={`property${option}`}
            />
            <label htmlFor={option} style={{ cursor: "pointer" }}>
              <Typography className="property-type">{option}</Typography>
            </label>
          </Stack>
        ))}
      </Stack>

      <Stack className="find-your-home" mb="30px">
        <Typography className="title">Square Meter</Typography>
        <Stack className="square-year-input" direction="row" spacing={2}>
          <FormControl>
            <InputLabel>Min</InputLabel>
            <Select value={0} label="Min">
              {propertySquare.map((square) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="central-divider"></div>
          <FormControl>
            <InputLabel>Max</InputLabel>
            <Select value={500} label="Max">
              {propertySquare.map((square) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <Stack className="find-your-home">
        <Typography className="title">Price Range</Typography>
        <Stack className="square-year-input" direction="row" spacing={2}>
          <input
            type="number"
            placeholder="$ min"
            min={0}
            value={propertyPrice.start}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseInt(e.target.value) || 0;
              if (value >= 0)
                setPropertyPrice({ ...propertyPrice, start: value });
            }}
          />
          <div className="central-divider"></div>
          <input
            type="number"
            placeholder="$ max"
            value={propertyPrice.end}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseInt(e.target.value) || 0;
              if (value >= 0)
                setPropertyPrice({ ...propertyPrice, end: value });
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
