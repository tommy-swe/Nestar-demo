import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div style={{ marginTop: "20px 0" }}>
      <Stack className={"container"}>PROPERTY LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
