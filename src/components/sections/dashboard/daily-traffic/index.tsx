import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import DailyTrafficChart from './DailyTrafficChart';

const DailyTraffic = () => {
  return (
    <Paper sx={{ p: 3, height: 350 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <div>
          <Typography variant="body2" color="text.disabled" fontWeight={500}>
            Heart Rate
          </Typography>
          <Typography mt={0.5} variant="h2">
            102{' '}
            <Typography component="span" variant="body2" color="text.disabled" fontWeight={500}>
              Avg BPM
            </Typography>
          </Typography>
        </div>
        <Stack alignItems="center" spacing={0.25}>
          <IconifyIcon
            icon="ic:baseline-arrow-drop-up"
            color="success.main"
            fontSize="h6.fontSize"
          />
          <Typography variant="body2" color="success.main" fontWeight={700}>
            +2.45%
          </Typography>
        </Stack>
      </Stack>
      <DailyTrafficChart
        data={[110, 80, 150, 100, 130, 160, 60]}
        sx={{ height: '230px !important' }}
      />
    </Paper>
  );
};

export default DailyTraffic;
