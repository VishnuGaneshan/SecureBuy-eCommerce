import { connectWallet } from './web3-config';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './loginSlice';
import { alertSetter } from '../../components/alertSlice';

const Login = () => {
    const islogged = useSelector(state => state.login.value);
    const dispatch = useDispatch();

    const setToLogin = async () => {
        await connectWallet();
        dispatch(login());
        dispatch(alertSetter({type: 'success', message: 'You successfully logedIn'}))
    }
    
    const setToLogout = async () => {
        dispatch(logout());
        dispatch(alertSetter({type: 'danger', message: 'Your wallet disconnected'}))
    }


    return (
        <div className='container text-center'>
        <h3>Login Page</h3>
        {!islogged ? <button onClick={setToLogin}>Connect Wallet</button>
        : <button onClick={setToLogout}>Disconnect Wallet</button>}
        </div>
    )
}

export default Login;