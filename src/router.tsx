import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Empresa } from "./pages/Empresa";
import { Portfolio } from "./pages/Portfolio";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Empresa />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            }
        ]
    }
])