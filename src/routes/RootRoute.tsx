import { Outlet, createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </>
  ),
});
