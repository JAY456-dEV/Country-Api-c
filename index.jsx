import { createRoot } from 'react-dom/client'
import App from './App'
import Contact from './components/contact';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/contact',
                element: <Contact />,
            },

            {
                path: '/:country', 
                element: <CountryDetail />,
            },
        ]
    },

]);

const root = createRoot(document.querySelector('.root'))

root.render(
    <>
        <RouterProvider router={router} />
    </>
)