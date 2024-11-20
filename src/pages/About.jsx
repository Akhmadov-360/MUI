import React from 'react';
import UserCard from '../components/cards/UserCard';
import { Box } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "30px", marginBottom: "30px" }}>
            <UserCard className={'card'}/>
        </Box>
    );
};

export default About;