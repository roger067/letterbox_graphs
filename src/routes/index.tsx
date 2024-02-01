import { createRouter, RouterProvider } from '@tanstack/react-router';
import { rootRoute } from './RootRoute';
import { indexRoute } from './IndexRoute';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
