import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const NormLayout = lazy(() => import('layouts/normal-layout'));
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const Home = lazy(() => import('pages/Home/home')); // Adjusted to pages/Home/home
const Profile = lazy(() => import('pages/Profile/profile')); // Adjusted to pages/Profile/profile
const Reports = lazy(() => import('pages/Reports/reports'));
const SignIn = lazy(() => import('pages/authentication/SignIn'));
const SignUp = lazy(() => import('pages/authentication/SignUp'));
const Page404 = lazy(() => import('pages/errors/Page404'));

import PageLoader from 'components/loading/PageLoader';
import Progress from 'components/loading/Progress';

export const routes = [
  {
    element: (
      <Suspense fallback={<Progress />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: rootPaths.root, // Root path (Dashboard)
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true, // Dashboard will be shown on the root path "/"
            element: <Dashboard />,
          },
        ],
      },
      {
        path: rootPaths.home,
        element: <NormLayout />,
        children: [
          {
            path: paths.home,
            element: <Home />,
          },
        ],
      },
      {
        path: rootPaths.report,
        element: <NormLayout />,
        children: [
          {
            path: paths.report,
            element: <Reports />,
          },
        ],
      },
      {
        path: rootPaths.profile,
        element: <NormLayout />,
        children: [
          {
            path: paths.profile,
            element: <Profile />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: <NormLayout />,
        children: [
          {
            path: paths.signin,
            element: <SignIn />,
          },
          {
            path: paths.signup,
            element: <SignUp />,
          },
        ],
      },
      {
        path: '*', // Catch-all for 404 errors
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/horizon' });

export default router;
