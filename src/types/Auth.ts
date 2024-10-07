export interface IUserData {
    email: string
    password: string
}

export interface IAuthResponse {
    token: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
    _id?: string
    __v?: number
    message: string
}
