import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Sales = () => {
  return (
    <Stack
      component={Paper}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ px: 2.5, py: 1.5, height: 100 }}
    >
      <Typography variant="body2" color="text.disabled">
        Weight
      </Typography>
      <Typography variant="h3">68kg</Typography>
      <Typography variant="caption" color="text.disabled" fontWeight={400} textAlign="center">
        <Typography variant="body2" component="span" color="success.main" fontWeight={700}>
          +0.5%
        </Typography>{' '}
        since last month
      </Typography>
    </Stack>
  );
};

export default Sales;
