import { teamMembersData } from 'data/teamMembersData';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconifyIcon from 'components/base/IconifyIcon';
import Grid from '@mui/material/Grid';
import MemberCard from './MemberCard';

const TeamMembers = () => {
  return (
    <Box component={Paper} p={3} height={390} overflow="auto">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Family members</Typography>
        <Stack
          component={ButtonBase}
          alignItems="center"
          justifyContent="center"
          height={36}
          width={36}
          bgcolor="info.main"
          borderRadius={2.5}
        >
          <IconifyIcon
            icon="ic:round-add-circle"
            color="info.contrastText"
            fontSize="h4.fontSize"
          />
        </Stack>
      </Stack>
      <Grid container direction="column" spacing={2}>
        {teamMembersData.slice(0, 3).map((item) => (
          <Grid item key={item.id}>
            <MemberCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamMembers;
