import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";

const Layout = () => {
    return <>main pages</>;
};

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <div>404 not found</div>,
            children: [
                {
                    path: "contact",
                    element: <ContactPage />,
                },
            ],
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
