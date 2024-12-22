import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import IconifyIcon from 'components/base/IconifyIcon';
import { NFTProps } from 'data/NFTData';
import { SxProps } from '@mui/system';

interface NFTCardProps {
  data: NFTProps;
  sx?: SxProps;
}

const NFTCard = ({ data, sx }: NFTCardProps) => {
  const handleViewFile = () => {
    if (data.fileUrl) {
      window.open(data.fileUrl, '_blank');
    } else {
      alert('File URL not available');
    }
  };

  return (
    <Card
      sx={{
        p: 2,
        bgcolor: 'info.dark',
        userSelect: 'none',
        borderRadius: 2,
        maxWidth: 300,
        ...sx, // Spread custom sx prop
      }}
    >
      <Box position="relative">
        <CardMedia
          component="img"
          height="150"
          image={data.image}
          alt={data.title}
          sx={{
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="favorite"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            bgcolor: 'info.lighter',
            '&:hover': { bgcolor: 'info.light' },
          }}
        >
          <IconifyIcon icon="ic:sharp-favorite-border" sx={{ pointerEvents: 'none' }} />
        </IconButton>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ mt: 1 }}>
        <Stack spacing={1} alignItems="center" justifyContent="space-between">
          {/* NFT Title and Link */}
          <Typography
            component={Link}
            href={data.link}
            variant="h6"
            color="text.primary"
            display="block"
            sx={{ textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}
          >
            {data.title}
          </Typography>
        </Stack>

        {/* Price and Action Button */}
        <Stack mt={1} alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="body2" color="primary.main" fontWeight={700}>
            {data.price}
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="primary"
            fullWidth
            onClick={handleViewFile}
            sx={{ borderRadius: 2, textTransform: 'none' }}
          >
            View File
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default NFTCard;
