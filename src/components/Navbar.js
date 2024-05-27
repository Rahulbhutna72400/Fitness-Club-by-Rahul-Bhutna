import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Logo from '../assets/images/Logo.png';
import ThemeContext from '../context/themeContext';

const NavbarContainer = styled(Stack)(({ theme }) => ({
  direction: 'row',
  justifyContent: 'space-between',
  padding: theme.spacing(2.5),
  alignItems: 'center',
}));

const LogoImage = styled('img')({
  width: '180px', // Adjust the width as needed
  height: 'auto', // Maintain aspect ratio
  margin: '0px 20px',
});

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontSize: '24px',
  fontFamily: 'Alegreya',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <NavbarContainer>
      <NavLink to="/">
        <LogoImage src={Logo} alt="logo" />
      </NavLink>
      <Stack direction="row" gap="40px" alignItems="flex-end">
        <NavLink to="/">Home</NavLink>
        <NavLink as="a" href="#exercises">
          Exercises
        </NavLink>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Stack>
    </NavbarContainer>
  );
};

export default React.memo(Navbar);

