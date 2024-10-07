import { IAuthResponse, IUserData } from '../types/Auth'

export const AuthService = {
    async registration(
        userData: IUserData
    ): Promise<IAuthResponse | undefined> {},
    async login() {},
    async getMe() {},
}
