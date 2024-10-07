import { api } from '../api/axios.api'
import { IAuthResponse, IUserData } from '../types/Auth'

export const AuthService = {
    async registration(
        userData: IUserData
    ): Promise<IAuthResponse | undefined> {
        const { data } = await api.post<IAuthResponse>('user', userData)

        return data
    },
    async login() {},
    async getMe() {},
}
