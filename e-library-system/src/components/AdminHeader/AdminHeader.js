import './AdminHeader.css';
import { Link } from 'react-router-dom';
function AdminHeader(){
    return(<div>
        <nav className="navbar navbar-expand">
            <Link className="navbar-brand" to="#"><i className="fa fa-university" aria-hidden="true"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Library</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/rules">Rules & Regulations</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/price">Price Card</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/adminSearch">Search</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addBook">Add Book</Link>
              </li>
              </ul>
            </div>
        </nav>
    </div>);
}
export default AdminHeader;