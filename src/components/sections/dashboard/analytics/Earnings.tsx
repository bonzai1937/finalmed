import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Earnings = () => {
  return (
    <Stack
      component={Paper}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 3 }}
    >
      <Typography variant="body2" color="text.disabled">
        Height
      </Typography>
      <Typography mt={0.25} variant="h3">
        178cm
      </Typography>
    </Stack>
  );
};

export default Earnings;
