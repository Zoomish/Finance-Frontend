import { api } from '../api/axios.api'
import { IAuthResponse, IToken, IUserData } from '../types/Auth'

export const AuthService = {
    async registration(
        userData: IUserData
    ): Promise<IAuthResponse | undefined> {
        const { data } = await api.post<IAuthResponse>('user', userData)

        return data
    },
    async login(userData: IUserData): Promise<IToken | undefined> {
        const { data } = await api.post<IToken>('auth/login', userData)

        return data
    },
    async getMe() {},
}
