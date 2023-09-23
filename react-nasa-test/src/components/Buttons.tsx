import React from "react";
import { Stack, Button, Box } from "@mui/material";

export const Buttons = () => {

    const handleNextClick = () => {
        window.location.reload();
      };

  return (
    <Box
      position="sticky"
      bottom="2rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "grey",
          }}
        >
          Save
        </Button>
        <Button 
         variant='outlined'
         style={{
           color: 'white',
           borderColor: 'white',
           backgroundColor: 'transparent',
         }}
         onClick={handleNextClick} 
         >Next</Button>
      </Stack>
    </Box>
  );
};
