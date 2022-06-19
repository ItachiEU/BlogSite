import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { routes, RouteType } from "../../routes";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

const Navi = () => {
  const navigate = useNavigate();

  const pages: { path: RouteType, label: string }[] = [
    { path: "About", label: "About" },
    { path: "Contact", label: "Contact" }
  ]

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
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
          {pages.map((page) => (
            <MenuItem key={page.path} onClick={() => navigate(routes[page.path])}>
              <Typography textAlign="center">{page.label}</Typography>
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
        {pages.map((page) => (
          <Button
            key={page.path}
            onClick={() => navigate(routes[page.path])}
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
              {page.label}
            </Typography>
          </Button>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Navi;