import { FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'

const Auth: FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const regidtrstionHsndler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = await AuthService.registration({
                email,
                password,
            })
            if (data) {
                toast.success('Account created successfully')
                setIsLogin(!isLogin)
            }
        } catch (error) {
            toast.success('Something went wrong')
        }
    }

    return (
        <div className="mt-40 flex flex-col justify-center items-center bg-slate-900 text-white">
            <h1 className="mb-10 text-center text-xl">
                {isLogin ? 'Login' : 'Registration'}
            </h1>

            <form className="flex w-1/3 flex-col mx-auto gap-5">
                <input
                    type="text"
                    className="input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-green mx-auto">
                    Submit
                </button>
            </form>
            <div className="flex justify-center mt-5">
                {isLogin ? (
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-slate-300 hover:text-white"
                    >
                        You don't have an account?
                    </button>
                ) : (
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-slate-300 hover:text-white"
                    >
                        You already have an account?
                    </button>
                )}
            </div>
        </div>
    )
}

export default Auth
