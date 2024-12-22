import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Spend = () => {
  return (
    <Stack
      component={Paper}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 2.5, height: 100 }}
    >
      <Typography variant="body2" color="text.disabled">
        Insurance
      </Typography>
      <Typography mt={0.25} variant="h3">
        $500
      </Typography>
    </Stack>
  );
};

export default Spend;
