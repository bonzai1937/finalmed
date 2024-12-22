import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../../main';

const LanguageSelect = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const icon = theme.palette.mode === 'dark' ? 'solar:sun-bold' : 'solar:moon-bold';

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      size="large"
      sx={{
        p: 1,
        '&:hover': {
          bgcolor: 'action.hover',
        },
      }}
    >
      <IconifyIcon
        icon={icon}
        fontSize="1.25rem"
        sx={{
          color: 'text.primary',
        }}
      />
    </IconButton>
  );
};

export default LanguageSelect;
