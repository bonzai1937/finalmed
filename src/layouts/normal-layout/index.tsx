import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const AuthLayout = () => {
  return (
    <Stack width="100%" minHeight="100vh">
      <Stack component="main" direction="column" flexGrow={1} px={3.5} mt={3}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
