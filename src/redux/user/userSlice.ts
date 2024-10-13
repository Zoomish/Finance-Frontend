import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IUser } from '../../types/User'

interface IUserState {
    user: IUser
}

const initialState: IUserState = {
    user: {} as IUser,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
    },
})

export const {} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
