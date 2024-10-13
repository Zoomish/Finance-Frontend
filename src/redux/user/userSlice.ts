import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IUser } from '../../types/User'

interface UserState {
    user: IUser | null
    isAuth: boolean
}

const initialState: UserState = {
    user: null,
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
        },
    },
})

export const { setUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
