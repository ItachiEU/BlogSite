import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { routes, RouteType } from "../../routes";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

const UserNavi = () => {
  const navigate = useNavigate();

  const settings: { path: RouteType, label: string }[] = [
    { path: "Create", label: "Create new post!" },
    { path: "Account", label: "Account" },
    { path: "Logout", label: "Log out"}
  ]
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
  };

  const handleClickUserMenu = (setting : {path: RouteType, label: string}) => {
      navigate(routes[setting.path]);
      setAnchorElUser(null);
  }
  
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="User" />
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
          {
            settings.map((setting) => (
              <MenuItem
                key={setting.path}
                onClick={() => handleClickUserMenu(setting)}
              >
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
          ))}
        </Menu>
      </Box>
    </React.Fragment>
  );
};

export default UserNavi;
