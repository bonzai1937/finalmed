import { MenuItem } from 'routes/sitemap';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';

const ListItem = ({ subheader, icon, path, active }: MenuItem) => {
  return (
    <Stack mb={1} component={Link} href={path} alignItems="center" justifyContent="space-between">
      <ListItemButton>
        <ListItemIcon>
          {icon && (
            <IconifyIcon
              icon={icon}
              fontSize="h4.fontSize"
              sx={{
                color: active ? 'primary.main' : null,
              }}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={subheader}
          sx={{
            '& .MuiListItemText-primary': {
              color: active ? 'primary.main' : null,
              fontWeight: active ? 600 : 500,
            },
          }}
        />
      </ListItemButton>
    </Stack>
  );
};

export default ListItem;
