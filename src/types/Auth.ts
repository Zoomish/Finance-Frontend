export interface IUserData {
    email: string
    password: string
}

export interface IAuthResponse {
    email: string | undefined
    password: string | undefined
    createdAt: string | undefined
    updatedAt: string | undefined
    _id?: string | undefined
    __v?: number | undefined
    message: string | undefined
}
