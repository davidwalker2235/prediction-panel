"use client"

import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerAppBar from "./components/drawerAppBar";
import {AppProvider} from "./providers/appProvider";
import App from "./App";
import AidaProvider from "./providers/aidaProvider";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1b2635'
    }
  },
});

export default function RootLayout({
                                       children
                                   }: any) {
    const endPoint = process.env.REACT_APP_AIDA_ENDPOINT as string;
    const azureApiKey = process.env.REACT_APP_AIDA_AZURE_API_KEY as string
    const deploymentId = process.env.REACT_APP_AIDA_DEPLOIMENT_ID as string

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppProvider>
            <AidaProvider credentials={{endPoint, azureApiKey, deploymentId}}>
              <DrawerAppBar />
              <App />
            </ AidaProvider>
        </AppProvider>
      </ThemeProvider>
    );
}
