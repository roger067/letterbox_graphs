import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './RootRoute';
import { Login } from '../pages';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Login />,
});
