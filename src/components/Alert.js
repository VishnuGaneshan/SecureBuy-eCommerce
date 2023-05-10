import { useSelector } from "react-redux";

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

export default Alert;