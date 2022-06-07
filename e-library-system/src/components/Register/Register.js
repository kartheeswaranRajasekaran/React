import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { emailValidation, passwordValidation } from '../Validation';
function Register() {
  const navigate = useNavigate();
  const [getForm, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [getValidation, setValidation] = useState({
    email: '',
    password: ''
  });
  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setValidation({
      ...getValidation, email: !emailValidation(getForm.email) ? "Please provide proper email ID" : "",
      password: !passwordValidation(getForm.password) ? "Invalid password" : ""
    });
    if (emailValidation(getForm.email) && passwordValidation(getForm.password)) {
      alert("Successfully registered");
      sessionStorage.setItem("email", getForm.email);
      sessionStorage.setItem("password", getForm.password);
      navigate('/login');
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand">
        <Link className="navbar-brand" to="#"><i className="fa fa-university" aria-hidden="true"></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">About Library</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Rules & Regulations</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Price Card</Link>
            </li>
          </ul>
          <button className="btn btn-warning">
              <Link to="/login">Login</Link>
              </button>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-4"><br />
            <div><h1 className="head">Sign Up</h1></div>
            <form>
              <div className="form-group">
                <label><h6>First Name</h6></label>
                <input type="text" onChange={onChangeHandler} value={getForm.firstName} className="form-control" id="firstName" name="firstName" placeholder="First name" />
              </div>
              <div className="form-group">
                <label><h6>Last Name</h6></label>
                <input type="text" onChange={onChangeHandler} value={getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Last name" />
              </div>

              <div className="form-group">
                <label><h6>Email address</h6></label>
                <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" placeholder="Enter email" />
                {getValidation.email && <div class="alert alert-danger" role="alert">
                  {getValidation.email}
                </div>}
              </div>
              <div className="form-group">
                <label><h6>Password</h6></label>
                <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Enter Password" />
                {getValidation.password && <div class="alert alert-danger" role="alert">
                  {getValidation.password}
                </div>}
              </div>
              <button type="submit" onClick={onSubmitHandler} className="btn btn-warning">Submit</button>
            </form>
          </div>
          <div className="col-4">
          </div>
        </div>
      </div></div>
  );
}
export default Register;