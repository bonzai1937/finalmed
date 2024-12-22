import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'components/base/Image';
import Fingerprint from 'assets/images/fingerprint.png';

const CardSecurity = () => {
  return (
    <Stack
      spacing={3}
      component={Paper}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: 350, p: 3 }}
    >
      <Image src={Fingerprint} height={85} width={75} />
      <Typography variant="h4" textAlign="center">
        Authenticate Your Profile
      </Typography>
      <Typography variant="caption" color="text.disabled" fontWeight={400} textAlign="center">
        Update KYC Details
      </Typography>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 'auto' }}>
        Get Started
      </Button>
    </Stack>
  );
};

export default CardSecurity;
