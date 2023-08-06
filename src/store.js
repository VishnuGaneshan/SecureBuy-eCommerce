import { configureStore } from '@reduxjs/toolkit';
import alertReducers from './components/alertSlice';
import accountReducers from './pages/login/accountSilce';
 
export default configureStore({
  reducer: {
    alert: alertReducers,
    account: accountReducers
  }
})