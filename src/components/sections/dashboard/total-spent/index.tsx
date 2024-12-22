import { spentChartData } from 'data/spentChartData';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import IconifyIcon from 'components/base/IconifyIcon';
import DateSelect from './DateSelect';
import SpentChart from './SpentChart';

const TotalSpent = () => {
  return (
    <Box component={Paper} height={{ xs: 450, sm: 350 }}>
      <Stack justifyContent="space-between">
        <DateSelect />
        <Stack
          component={ButtonBase}
          alignItems="center"
          justifyContent="center"
          height={36}
          width={36}
          bgcolor="info.main"
          borderRadius={2.5}
        >
          <IconifyIcon icon="ic:round-bar-chart" color="primary.main" fontSize="h4.fontSize" />
        </Stack>
      </Stack>
      <SpentChart data={spentChartData} sx={{ width: 1, height: '235px !important' }} />
    </Box>
  );
};

export default TotalSpent;
