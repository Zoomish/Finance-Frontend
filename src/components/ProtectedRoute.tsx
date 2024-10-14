import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Props {
    children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
    const isAuth = useAuth()
    return (
        <>
            {isAuth ? (
                children
            ) : (
                <div className="mt-20 flex flex-col items-center justify-center gap-10">
                    <img src="" alt="You are not logged in" />
                    <h1 className="text-2xl">You are not logged in</h1>
                    <button
                        onClick={() => (window.location.href = '/login')}
                        className="btn btn-green"
                    >
                        Log in
                    </button>
                </div>
            )}
        </>
    )
}

export default ProtectedRoute
