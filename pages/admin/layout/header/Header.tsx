import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Logo from "../shared/Logo";
// components
import Profile from './Profile';
import Search from './Search';
import { IconMenu2 } from '@tabler/icons-react';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px !important;",
    background: theme.palette.primary.main,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up('lg')]: {
      minHeight: '64px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    // width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>

      <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            color:'#fff',
            marginRight: "15px",
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <IconMenu2 width="22" height="22" />
        </IconButton>

        <Typography style={{color: 'white' , fontWeight: '400' ,width: "22", height: "22"}}>
          Go-Food
        </Typography>


        <Box flexGrow={1} />
        <Search />

        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
