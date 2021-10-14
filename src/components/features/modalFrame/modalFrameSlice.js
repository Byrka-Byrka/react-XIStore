import { createSlice } from '@reduxjs/toolkit'

export const modalFrameSlice = createSlice({
    name: 'modalFrame',
    initialState: {
        singInIsActive: false,
        singUpIsActive: false,
    },
    reducers:{
        singUpActivate: state => {state.singUpIsActive = true},
        singUpDeactivate: state => {state.singUpIsActive = false},
        singInActivate: state => {state.singInIsActive = true},
        singInDeactivate: state => {state.singInIsActive = false},
        singToggle: state => {
            state.singInIsActive = !state.singInIsActive
            state.singUpIsActive = !state.singUpIsActive
        }
        
    }
})

export const { singUpActivate, singUpDeactivate, singInActivate, singInDeactivate, singToggle } = modalFrameSlice.actions

export default modalFrameSlice.reducer;