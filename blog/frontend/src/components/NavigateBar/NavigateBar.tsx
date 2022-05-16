import * as React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import Tooltip from '@mui/material/Tooltip';

const NavigateBar = ({message} : {message: string}) => {
    const navigate = useNavigate();

    // more: "Bloggers"
  const pages: {[key: string]: string} = { "About" : "About", "Contact" : "Contact"};

  const settings: {[key: string]: string} = { "Create": "Create new post!", "Account": "Account", "Logout": "Log out"};
    // const unknow_user_settings = ['Log in', 'Create account']
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickUserMenu = (setting : string) => {
        navigate(routes[setting]);
        setAnchorElUser(null);
    }

    return (
      <>
        <AppBar
          position="static"
          style={{ backgroundColor: "#6495ED", color: "black" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <LaptopChromebookIcon
                style={{ cursor: "pointer" }}
                onClick={() => navigate(routes.Blogs)}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />

              <Typography
                variant="h6"
                noWrap
                onClick={() => navigate(routes.Blogs)}
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  letterSpacing: ".3rem",
                  fontFamily: "monospace",
                  color: "inherit",
                  textDecoration: "none",
                }}
                style={{ cursor: "pointer" }}
              >
                BlogSite
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {Object.keys(pages).map((page) => (
                    <MenuItem key={page} onClick={() => navigate(routes[page])}>
                      <Typography textAlign="center">{pages[page]}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <LaptopChromebookIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(routes.Blogs)}
                />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {Object.keys(pages).map((page) => (
                  <Button
                    key={pages[page]}
                    onClick={() => navigate(routes[page])}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        mr: 2,
                        ml: 2,
                        display: { xs: "none", md: "flex" },
                        color: "#F0FFFF",
                        textDecoration: "none",
                      }}
                    >
                      {pages[page]}
                    </Typography>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {Object.keys(settings).map((setting) => (
                    <MenuItem key={setting} onClick={() => handleClickUserMenu(setting)}>
                      <Typography textAlign="center">{settings[setting]}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Container style={{backgroundColor: "white"}}>
          <Outlet />
        </Container>
      </>
    );
};

export default NavigateBar;