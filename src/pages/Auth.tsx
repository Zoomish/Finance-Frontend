import { FC, useState } from 'react'

const Auth: FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    return (
        <div className="mt-40 flex flex-col justify-center items-center bg-slate-900 text-white">
            <h1 className="mb-10 text-center text-xl">
                {isLogin ? 'Login' : 'Registration'}
            </h1>
        </div>
    )
}

export default Auth
