import { api } from '../api/axios.api'
import { IAuthResponse, IUserData } from '../types/Auth'

export const AuthService = {
    async registration(
        userData: IUserData
    ): Promise<IAuthResponse | undefined> {
        const { data } = await api.post<IAuthResponse>('user', userData)

        return data
    },
    async login(userData: IUserData): Promise<IAuthResponse | undefined> {
        const { data } = await api.post<IAuthResponse>('auth/login', userData)

        return data
    },
    async getMe(): Promise<IAuthResponse | undefined> {
        const { data } = await api.get<IAuthResponse>('auth/profile')

        return data
    },
}
