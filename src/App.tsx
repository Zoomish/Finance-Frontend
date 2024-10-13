import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { useAppDispatch } from './redux/hooks'
import { getTokenFromLocalStorage } from './helper/localStorage.helper'

function App() {
    const dispatch = useAppDispatch()
    const checkAuth = async () => {
        const token = getTokenFromLocalStorage()
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
    return <RouterProvider router={router} />
}

export default App
