import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
const CS: NextPage = () => {
  const device = useDeviceDetect();  

  if (device === "mobile") {
    return <Stack>CS MOBILE</Stack>;
  } else {
  return (
    <div style={{ marginTop: "20px 0" }}>
      <Stack className={"container"}>CS</Stack>
    </div>
  );
}
};

export default withLayoutBasic(CS);
