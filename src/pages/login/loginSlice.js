import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: false
  },
  reducers: {
    login: state => {
      return {...state, value: true};
    },
    logout: state => {
      return {...state, value: false};
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer