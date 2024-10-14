import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Props {
    children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
    const isAuth = useAuth()
    return <>{isAuth ? children : <div>Yuu dont enter</div>}</>
}

export default ProtectedRoute
