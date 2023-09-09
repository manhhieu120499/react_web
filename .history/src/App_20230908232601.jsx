import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>404 not found</div>,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
