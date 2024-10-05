import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    const isAuth = true
    return (
        <header className="flex items-center justify-between bg-slate-800 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Link to={'/'} />
        </header>
    )
}

export default Header
