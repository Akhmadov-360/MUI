import React from "react";
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#FCFCFC", padding: "40px" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                    borderBottom: "1px dashed #64BB47",
                    paddingBottom: "20px",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            color: "#2C3847",
                            fontWeight: "700",
                            fontSize: "26px",
                            lineHeight: "32.5px",
                            marginBottom: "10px",
                        }}
                    >
                        UI.desk
                    </Typography>
                    <Typography
                        sx={{
                            color: "#7A8CA0",
                            fontSize: "14px",
                            lineHeight: "20px",
                        }}
                    >
                        On formed merits hunted unable <br />
                        merely by mr whence or.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: "40px" }}>
                    <Box>
                        <Typography
                            sx={{
                                color: "#2C3847",
                                fontWeight: "700",
                                fontSize: "18px",
                                marginBottom: "10px",
                            }}
                        >
                            Home
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Company
                            </Link>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                News
                            </Link>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Team
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                color: "#2C3847",
                                fontWeight: "700",
                                fontSize: "18px",
                                marginBottom: "10px",
                            }}
                        >
                            About
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                History
                            </Link>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Service
                            </Link>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Pricing
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                color: "#2C3847",
                                fontWeight: "700",
                                fontSize: "18px",
                                marginBottom: "10px",
                            }}
                        >
                            Partner
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Business
                            </Link>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Plan
                            </Link>
                            <Link href="#" underline="none" sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Marketing
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                color: "#2C3847",
                                fontWeight: "700",
                                fontSize: "18px",
                                marginBottom: "10px",
                            }}
                        >
                            Contact
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <Typography sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                UI.desk
                            </Typography>
                            <Typography sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                (465)954-8487
                            </Typography>
                            <Typography sx={{ color: "#7A8CA0", fontSize: "14px" }}>
                                Lahore, Pakistan
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    backgroundColor: "#64BB47",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20px",
                    }}
                >
                    © Copyright 2020 by ui.desk. All right reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;