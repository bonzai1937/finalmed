import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <Stack
      component={Paper}
      p={2.5}
      alignItems="center"
      justifyContent="center"
      spacing={2.25}
      height={100}
    >
      <div>
        <Typography variant="body2" color="text.disabled" noWrap>
          Blood Group
        </Typography>
        <Typography mt={0.25} variant="h3">
          O+
        </Typography>
      </div>
    </Stack>
  );
};

export default Projects;
