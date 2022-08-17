import React from 'react';
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";

const SplashScreen = () =>{
    return <Box p={6} height="100vh" display="flex" flexDirection="column" alignItems='center'>
  <Box flex={1} overflow="auto" display='flex' justifyContent='center' alignItems='center'>
    <Image src='/logo.png' height={484 } width={269 } alt='Logo' />
        </Box>
        <CircularProgress color="success" />
</Box> 
}

export default SplashScreen;
