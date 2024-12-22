import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Tasks = () => {
  return (
    <Stack
      component={Paper}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 2.5, height: 100 }}
    >
      <Typography variant="body2" color="text.disabled">
        Sex
      </Typography>
      <Typography mt={0.25} variant="h3">
        M
      </Typography>
    </Stack>
  );
};

export default Tasks;
