import { useState, useRef } from 'react';
import { NFTData } from 'data/NFTData';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import NFTCard from './NFTCard';
import Grid from '@mui/material/Grid';

const TrendingNFTs = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(NFTData.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const paginatedData = NFTData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <Stack component={Paper} ref={containerRef} direction="column" spacing={1.75} width={1} p={2}>
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <Typography variant="h5">Reports</Typography>
        <Stack mr={-1} spacing={1} alignItems="center" justifyContent="center" direction="row">
          <IconButton
            onClick={handlePrev}
            size="large"
            sx={{
              p: 1,
              border: 'none',
              bgcolor: 'transparent !important',
              pointerEvents: currentPage === 0 ? 'none' : 'auto',
            }}
          >
            <IconifyIcon
              icon="ic:round-arrow-back-ios"
              color={currentPage === 0 ? 'text.secondary' : 'text.primary'}
              fontSize="h4.fontSize"
            />
          </IconButton>
          <IconButton
            onClick={handleNext}
            size="large"
            sx={{
              p: 1,
              border: 'none',
              bgcolor: 'transparent !important',
              pointerEvents: currentPage === totalPages - 1 ? 'none' : 'auto',
            }}
          >
            <IconifyIcon
              icon="ic:round-arrow-forward-ios"
              color={currentPage === totalPages - 1 ? 'text.secondary' : 'text.primary'}
              fontSize="h4.fontSize"
            />
          </IconButton>
        </Stack>
      </Stack>

      {/* Grid Layout */}
      <Grid container spacing={2}>
        {paginatedData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <NFTCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default TrendingNFTs;
