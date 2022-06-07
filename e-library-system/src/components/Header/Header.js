import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <div>
          <nav className="navbar navbar-expand">
            <a className="navbar-brand" href="#"><i className="fa fa-university" aria-hidden="true"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About Library</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Rules">Rules & Regulations</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Price">Price Card</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Search">Search</Link>
                  </li>
              </ul>
            </div>
            <button className="btn btn-warning">
              <Link to="/login">Logout</Link>
              </button>
        </nav>
        </div>
    );
}
export default Header;