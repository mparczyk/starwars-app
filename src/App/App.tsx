import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../i18n/i18n';

import { routes } from './routes';

const browserRouter = createBrowserRouter(routes);

export const App = () => <RouterProvider router={browserRouter} />;
