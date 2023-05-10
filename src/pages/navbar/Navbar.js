import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">SecureBuy eCommerce</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
                    Select Your Role
                    </a>
                    <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/company" >Company</Link>
                    <Link className="dropdown-item" to="/seller" >Seller</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/customer">Customer</Link>
                    </div>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search by product ID" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;