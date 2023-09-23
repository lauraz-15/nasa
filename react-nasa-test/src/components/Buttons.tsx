import React from 'react';
import { Stack, Button, Box } from '@mui/material';

export const Buttons = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Stack spacing={2} direction='row'>
        <Button variant='contained'>Save</Button>
        <Button variant='outlined'>Next</Button>
      </Stack>
    </Box>
  );
};
