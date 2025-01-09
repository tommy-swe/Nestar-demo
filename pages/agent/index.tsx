import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const AgentsList: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>AGENTS MOBILE</Stack>;
  } else {
    return (
      <div style={{ marginTop: "20px 0" }}>
        <Stack className={"container"}>AGENTS LIST</Stack>
      </div> 
    );
  }
};

export default withLayoutBasic(AgentsList);
