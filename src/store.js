import { configureStore } from '@reduxjs/toolkit';
import loginReducers from './pages/login/loginSlice';
import alertReducers from './components/alertSlice';
 
export default configureStore({
  reducer: {
    login: loginReducers,
    alert: alertReducers
  }
})