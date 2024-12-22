export const rootPaths = {
  root: '/',
  pagesRoot: 'pages',
  authRoot: 'authentication',
  report: 'Reports',
  profile: 'Profile',
  home: 'Home',
};

export default {
  home: `/${rootPaths.home}/home`,
  report: `/${rootPaths.report}/reports`,
  profile: `/${rootPaths.profile}/profile`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  signin: `/${rootPaths.authRoot}/sign-in`,
};
