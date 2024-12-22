import { NFTData } from 'data/NFTData';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HistoryCard from './HistoryCard';

const History = () => {
  return (
    <Paper sx={{ px: 1.5, py: 2, height: 350, overflow: 'auto' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Health Records</Typography>
        <Button variant="contained" color="secondary" size="small">
          See all
        </Button>
      </Stack>
      <Grid container direction="column" spacing={2}>
        {NFTData.slice(0, 3).map((item) => (
          <Grid item key={item.id}>
            <HistoryCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default History;
