import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
      <Box sx={{ padding: "50px", marginTop: "130px" }}>
        <Box>
          <Box sx={{ display: "block" }}>
            <Typography variant='h1' component='h1' sx={{ fontWeight: "600", fontSize: "76px", lineHeight: "96px", width: "596px", height: "285px", textWrap: "wrap" }}>
              Just <Typography body1 sx={{ color: "#5FB848", fontWeight: "600", fontSize: "76px", lineHeight: "96px" }} variant='h1' component='h1'>Eat healthy</Typography>
              food to live a healthier life
            </Typography>
            <Typography component='p' sx={{ width: "504px", height: "102px", marginTop: "120px", color: "#181D19", fontWeight: "500", fontSize: "24px", lineHeight: "34px" }}>
              Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#64BB47", marginTop: "50px", width: "160px", height: "54px", borderRadius: "27px" }}>Order Now</Button>
          </Box>
          <Box>
            
          </Box>
        </Box>
      </Box>
  )
};

export default App;