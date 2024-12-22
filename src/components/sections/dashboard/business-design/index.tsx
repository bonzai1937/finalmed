import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AvatarGroup from '@mui/material/AvatarGroup';
import IconifyIcon from 'components/base/IconifyIcon';

import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5 } from 'data/images';

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

const BusinessDesign = () => {
  return (
    <Stack
      component={Paper}
      direction="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      height={{ xs: 390, lg: 350, xl: 390 }}
      p={0}
    >
      <Stack p={3.5} pb={1} spacing={1.5} alignItems="center">
        <Stack
          component={ButtonBase}
          alignItems="center"
          justifyContent="center"
          height={52}
          width={52}
          bgcolor="error.light"
          borderRadius={3}
        >
          <IconifyIcon icon="mdi:fire" color="error.main" fontSize="h2.fontSize" />
        </Stack>

        <Box mt={-0.5} textAlign="center">
          <Typography variant="caption" color="text.disabled">
            Support
          </Typography>
          <Typography mt={-0.35} variant="body1" fontWeight={700} noWrap>
            Blood Donation camp
          </Typography>
        </Box>
      </Stack>

      <Typography px={3.5} variant="h5" lineHeight={1.65} textAlign="center">
        When to donate blood?
      </Typography>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        px={3.5}
        py={2.5}
        height={150}
      >
        <Stack alignItems="center" spacing={3.5}></Stack>

        <Stack alignItems="center" justifyContent="center">
          <Stack height={1} alignItems="center">
            <AvatarGroup
              renderSurplus={(surplus) => (
                <Typography component="span" variant="body2" color="primary.main" fontWeight={700}>
                  {surplus.toString()}+
                </Typography>
              )}
              total={22}
              sx={{ '& .MuiAvatarGroup-avatar': { height: 30, width: 30 } }}
            >
              {avatars.map((avatar: string, index) => (
                <Avatar key={avatar} alt="avatar" src={avatar} sx={{ zIndex: index }} />
              ))}
            </AvatarGroup>
          </Stack>

          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default BusinessDesign;
