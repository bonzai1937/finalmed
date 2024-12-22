import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import RevenueChart from './RevenueChart';
import { revenueChartData } from 'data/revenueChartData';

const Revenue = () => {
  return (
    <Box component={Paper} sx={{ p: 3, height: 350 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Weekly Revenue</Typography>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={36}
          width={36}
          borderRadius={2.5}
        >
          <IconifyIcon icon="ic:round-bar-chart" color="primary.main" fontSize="h4.fontSize" />
        </Stack>
      </Stack>
      <RevenueChart data={revenueChartData} sx={{ height: '265px !important' }} />
    </Box>
  );
};

export default Revenue;
