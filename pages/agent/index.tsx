import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentsList: NextPage = () => {
  return (
    <div style={{ marginTop: "20px 0" }}>
      <Stack className={"container"}>AGENTS LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentsList);
