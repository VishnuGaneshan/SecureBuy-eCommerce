import { createSlice,  } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    value: ''
  },
  reducers: {
    setAccount: (state, action)=> {
      return {...state, value: action.payload.value};
    },
    resetAccount: state => {
      return {...state, value: ''}
    }
  }
})

// Action creators are generated for each case reducer function
const { setAccount, resetAccount } = accountSlice.actions

let currentAccount = ''; // to Handle multiple alerts problem 
export const setCurrentAccount = ( value ) => dispatch => {
    if(value !== currentAccount) {
      currentAccount = value;
      dispatch(setAccount({value: value}));
    }
    console.log(`connected to: ${value}`);
  }

export default accountSlice.reducer;