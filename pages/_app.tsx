import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline } from "@mui/material";
import { light } from "@/scss/MaterialTheme";
import { useState } from "react";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // socket.io, Redux, Apollo, etc..
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
