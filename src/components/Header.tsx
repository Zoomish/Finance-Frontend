import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBtc } from 'react-icons/fa'
const Header: FC = () => {
    const isAuth = true
    return (
        <header className="flex items-center justify-between bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
            <Link to={'/'}>
                <FaBtc size={20} />
            </Link>
            {isAuth && (
                <nav>
                    <ul className="flex items-center gap-5 ml-auto mr-10">
                        <li>
                            <NavLink
                                to={'/'}
                                className={({ isActive }) =>
                                    isActive ? 'text-white p-2' : 'text-white/50 p-2'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/transactions'}
                                className={({ isActive }) =>
                                    isActive ? 'text-white p-2' : 'text-white/50 p-2'
                                }
                            >
                                Transactions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/categories'}
                                className={({ isActive }) =>
                                    isActive ? 'text-white p-2' : 'text-white/50 p-2'
                                }
                            >
                                Categories
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header
