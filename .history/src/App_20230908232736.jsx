import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";

const Layout = () => {
    return <></>;
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
