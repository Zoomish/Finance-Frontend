import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { getTokenFromLocalStorage } from './helper/localStorage.helper'
import { useAppDispatch } from './redux/hooks'
import { login, logout } from './redux/user/userSlice'
import { router } from './router/router'
import { AuthService } from './services/auth.service'

function App() {
    const dispatch = useAppDispatch()
    const checkAuth = async () => {
        const token = getTokenFromLocalStorage()
        try {
            if (token) {
                const data = await AuthService.getMe()
                if (data) {
                    dispatch(login(data.user))
                } else {
                    dispatch(logout())
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        checkAuth()
    }, [])
    return <RouterProvider router={router} />
}

export default App
