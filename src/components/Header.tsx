import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBtc } from 'react-icons/fa'
const Header: FC = () => {
    const isAuth = true
    return (
        <header className="flex items-center justify-between bg-slate-800 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Link to={'/'}>
                <FaBtc size={20} />
            </Link>
            {isAuth && (
                <nav>
                    <ul className="flex items-center">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/transactions'}>Transactions</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/categories'}>Categories</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header
