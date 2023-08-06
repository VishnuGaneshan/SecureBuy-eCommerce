import { useDispatch, useSelector } from "react-redux";
import { alertSetter } from './alertSlice';

const Alert = () => {
    const alert = useSelector(state => state.alert);
    
    return (
        <div className="sticky-top">
        {alert.type === 'danger' && <div className="alert alert-danger" role="alert">
        {alert.message}
        </div>}
        {alert.type === 'success' && <div className="alert alert-success" role="alert">
        {alert.message}
        </div>}
        </div>
    )
}

export const useSetAlert = ({type, message}) => {
    const dispatch = useDispatch();
    console.log(type, message);
    dispatch(alertSetter({type: type, message: message}));
}

export default Alert;