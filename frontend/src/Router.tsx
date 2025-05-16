import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // 공통 레이아웃
        children: [
            {
                index: true, // == path: ''
                element: <Home />,
            },
            //   {
            //     path: 'about',
            //     element: <About />
            //   }
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
