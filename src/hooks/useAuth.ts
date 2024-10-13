import { useAppSelector } from '../redux/hooks'

export const useAuth = (): boolean => {
    return useAppSelector((state) => state.user.isAuth)
}
