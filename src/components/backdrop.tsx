"use client"

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {AppContext} from "../providers/appProvider";
import {useContext} from "react";

export default function SimpleBackdrop() {
    const context: any = useContext(AppContext)

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={context.isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}