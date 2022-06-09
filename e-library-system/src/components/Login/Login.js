import './Login.css';
import Libraryimg from '../../images/LibraryImage2.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { emailValidation, passwordValidation } from '../Validation';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [getForm, setForm] = useState({
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
      ...getValidation, email: !emailValidation(getForm.email) ? "Invalid email" : "",
      password: !passwordValidation(getForm.password) ? "Invalid password" : ""
    });
    if (emailValidation(getForm.email) && passwordValidation(getForm.password)) {

      let email = sessionStorage.getItem('email')
      let password =sessionStorage.getItem('password')
      if (email === getForm.email && password === getForm.password) {
        axios.get("http://localhost:3000/profile").then((response) => {
          
        alert("Logged Successfully");
          navigate('/adminSearch');
        
      })
      .catch((error) => {
        console.log(error);
      });

       
      }
      else {
        if (email !== getForm.email && password === getForm.password) {
          setValidation({
            email: "Invalid email",
            password: ""
          });
        }
        else if (email === getForm.email && password !== getForm.password) {
          setValidation({
            email: "",
            password: "Invalid password"
          });
        }
        else if (email !== getForm.email && password !== getForm.password) {
          setValidation({
            email: "Invalid email",
            password: "Invalid password"
          });
        }
      }
    }
  }
  return (
    <div className="classlogin">
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form className="classform">
              <div className="head1">
                <table><thead>
                  <tr>
                  <td><img src={Libraryimg} className="image"></img></td>
                    <td className="tab"><h3>Library Management System</h3></td></tr>
                </thead>
                </table>
                </div>
                <br />
              <div className="form-group">
                <label>User name &nbsp;<i className="fa fa-user" aria-hidden="true"></i><input type="text" id="username" onChange={onChangeHandler} value={getForm.email} name="email" /></label>
                {getValidation.email && <div className="alert alert-danger" role="alert">
                  {getValidation.email}
                </div>}
              </div>
              <div className="form-group">
                <label>Password &nbsp;&nbsp;&nbsp;<i className="fa fa-key" aria-hidden="true"></i><input type="password" id="password" onChange={onChangeHandler} value={getForm.password} name="password" /></label>
                {getValidation.password && <div className="alert alert-danger" role="alert">
                  {getValidation.password}
                </div>}
              </div>
              <button type="submit" onClick={onSubmitHandler} className="btn btn-warning">Login</button>
              &nbsp;&nbsp;&nbsp;
              <button className="btn btn-warning">
              <Link to="/">Signup</Link>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button className="btn btn-warning">
              <Link to="/adminHome">Admin</Link>
              </button>
            </form>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
export default Login;