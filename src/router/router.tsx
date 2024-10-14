import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Auth from '../pages/Auth'
import Categories from '../pages/Categories'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Transactions from '../pages/Transactions'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'transactions',
                element: (
                    <ProtectedRoute>
                        <Transactions />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'categories',
                element: (
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                ),
            },
            { path: 'login', element: <Auth /> },
        ],
    },
])
