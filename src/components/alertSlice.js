import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    type: '',
    message: ''
  },
  reducers: {
    setAlert: (state, action)=> {
      return {...state, type: action.payload.type, message: action.payload.message};
    },
    resetAlert: state => {
      return {...state, type: '', message: ''}
    }
  }
})

// Action creators are generated for each case reducer function
const { setAlert, resetAlert } = alertSlice.actions

let currentMessage = ''; // to Handle multiple alerts problem 
export const alertSetter = ({type, message}) => dispatch => {
    if(type && message) {
        currentMessage = message;
        dispatch(setAlert({type, message}));
        setTimeout(() => {
            if(currentMessage === message) dispatch(resetAlert());
        }, 8000);
    }
    console.log(`${type} alert: ${message}`);
  }

export default alertSlice.reducer