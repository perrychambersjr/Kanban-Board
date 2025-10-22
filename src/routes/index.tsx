import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import BoardPage from "../pages/BoardPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <BoardPage />
            },
            {
                path: '/board/:boardId',
                element: <BoardPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])