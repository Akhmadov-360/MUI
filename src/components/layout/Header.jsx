import React from 'react';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
                <MuiLink component={Link} to="/" underline="none" sx={{ color: "#000000", fontWeight: "500", fontSize: "20px", lineHeight: "27px" }}>Home</MuiLink>
                <MuiLink component={Link} to="/about" underline="none" sx={{ color: "#000000", fontWeight: "500", fontSize: "20px", lineHeight: "27px" }}>About</MuiLink>
                <MuiLink component={Link} to="/product" underline="none" sx={{ color: "#000000", fontWeight: "500", fontSize: "20px", lineHeight: "27px" }}>Product</MuiLink>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <Button variant="contained" sx={{ backgroundColor: "#494949", width: "160px", height: "54px", borderRadius: "27px" }}>Order Now</Button>
            </Box>
        </Box>
    );
};

export default Header;
