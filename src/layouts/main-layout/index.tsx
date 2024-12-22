import { useState, PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Sidebar from 'layouts/main-layout/sidebar';
import Topbar from './topbar';
import Footer from './footer';
import './main-layout.css'; // Import the CSS file

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setIsClosing] = useState(false);

  return (
    <Stack direction="row" width={1} minHeight="100vh">
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setIsClosing={setIsClosing} // Correct setter function passed here
      />
      <Stack className="main-layout-container" flexGrow={1}>
        <Topbar setMobileOpen={setMobileOpen} isClosing={false} mobileOpen={false} />
        <Stack component="main" flexGrow={1} p={3} alignItems="center" justifyContent="center">
          <Card className="family-card">
            <CardContent>{children}</CardContent>
          </Card>
        </Stack>
        <Footer />
      </Stack>
    </Stack>
  );
};

export default MainLayout;
