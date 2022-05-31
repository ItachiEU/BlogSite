import * as React from 'react';
import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Navi from "./Navi";
import UserNavi from './UserNavi';

const NavigateBar = () => {
    return (
      <>
        <AppBar
          position="static"
          style={{ backgroundColor: "#6495ED", color: "black" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Navi />
              <UserNavi />
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth={false} style={{backgroundColor: "white"}}>
          <Outlet />
        </Container>
      </>
    );
};

export default NavigateBar;