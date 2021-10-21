import { createSlice } from '@reduxjs/toolkit'

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        users: [],
        usernameInp: '',
        passwordInp: '',
        isUserAuthorized: false,
        isUserAdmin: false,
        signInError: false,
        signUPError: false,
    },
    reducers:{
        setUsers:(state)=>{
            state.users = JSON.parse(localStorage.users)
        },
        authorization: (state,action) => {
            state.users = JSON.parse(localStorage.users)
            state.signInError = false;
            let { usernameInput, passwordInput } = action.payload;
            let user = state.users.find(item => item.username === usernameInput)
            
            if (user && (user.password === passwordInput)) {
                user.isAdmin ? state.isUserAdmin = true : state.isUserAdmin = false; 
                state.isUserAuthorized = true;
            } else { 
                state.signInError = true;
            }
        },
        singOut:(state) => {
            state.usernameInp = '';
            state.passwordInp = '';
            state.isUserAuthorized = false;
            state.isUserAdmin = false;
            state.signInError = false;
        },
        registration: (state,action) => {
            state.users = JSON.parse(localStorage.users)
            let { passwordInput, emailInput } = action.payload;
            let newUsers = JSON.parse(localStorage.users)
            let user = state.users.find(item => item.username === emailInput)
            if (!user) {
                state.signUPError = false;
                newUsers.push({
                    username: emailInput,
                    password: passwordInput,
                    isAdmin: false,
            })
            } else {
                state.signUPError = true;
            }
            localStorage.users = JSON.stringify(newUsers)
        },
        handleChangeUsername: (state, action) => {state.usernameInp = action.payload}
    }
})

export const { authorization, singOut, registration, handleChangeUsername, setUsers } = authorizationSlice.actions

export default authorizationSlice.reducer;