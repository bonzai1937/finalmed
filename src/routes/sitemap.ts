import paths, { rootPaths } from './paths';

export interface SubMenuItem {
  subheader: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: number | string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 4,
    subheader: 'Home',
    path: paths.home, // Should resolve to /Home/home
    icon: 'ic:round-dashboard',
    active: true,
  },
  {
    id: 1,
    subheader: 'Dashboard',
    path: rootPaths.root, // Should resolve to /
    icon: 'ic:round-home',
    active: true,
  },
  {
    id: 3,
    subheader: 'Reports',
    path: paths.report, // Should resolve to /reports/reports
    icon: 'ic:round-bar-chart',
    active: true,
  },
  {
    id: 5,
    subheader: 'Profile',
    path: paths.profile, // Should resolve to /Profile/profile
    icon: 'ic:baseline-person',
    active: true,
  },
  {
    id: 6,
    subheader: 'Sign In',
    path: paths.signin, // Should resolve to /authentication/sign-in
    icon: 'ic:round-lock',
    active: true,
  },
  {
    id: 7,
    subheader: 'Sign Up',
    path: paths.signup, // Should resolve to /authentication/sign-up
    icon: 'ic:baseline-person-add-alt-1',
    active: true,
  },
];

export default sitemap;
