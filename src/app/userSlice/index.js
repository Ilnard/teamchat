import {createSlice} from '@reduxjs/toolkit'

const initialState = {
        name: '',
        surname: '',
        login: '',
        avatarUrl: ''
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.login = action.payload.login
            state.avatarUrl = action.payload.avatarUrl
        }
    }
})

export const {setCurrentUser} = currentUserSlice.actions
export default currentUserSlice.reducer