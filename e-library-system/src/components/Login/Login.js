import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {emailValidation,passwordValidation}  from '../Validation';

function Login(){

  const navigate = useNavigate();

  const[getForm,setForm]=useState({
    username:'',
    password:''
  });

  const[getValidation,setValidation]=useState({
    username:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    setForm({
      ...getForm,[event.target.name]:event.target.value
    })
  }


  const onSubmitHandler=(event)=>{
    event.preventDefault(); 
    setValidation({
      ...getValidation,email:!emailValidation(getForm.username)?"please provide email":'',
      password:!passwordValidation(getForm.password)?"Please provide the password":''
    });
    if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
      alert("success");
      let email = sessionStorage.getItem('username');
      let password = sessionStorage.getItem('password');
      if(email === getForm.email && password === getForm.password){
        navigate('/dashboard');
      }
      else{
        setValidation({
          username:'no match found',
          password:'no match found'
        });
      }
  
    }
}

    return(
        <div class="classlogin">
        <div class="container">
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <form class="classform">     
                    <div class="head1"><h3>
                    Library Management System</h3></div>   
                    <div class="form-group">
                      <label>User name &nbsp;</label>
                      <i class="fa fa-user" aria-hidden="true"></i>
                      <input type="text" onChange={onChangeHandler} value={getForm.username} id="username"  className="form-control"  name="username" />
                      {getValidation.email && <div class="alert alert-danger" role="alert">
                      {getValidation.email}
                      </div>}

                    </div>
                    <div class="form-group">
                      <label>Password &nbsp;&nbsp;&nbsp;</label>
                      <i class="fa fa-key" aria-hidden="true"></i>
                      <input type="password"  onChange={onChangeHandler} value={getForm.password} name="password" className="form-control" id="password"/>
                      {getValidation.password && <div class="alert alert-danger" role="alert">
                      {getValidation.password}
                    </div>}

                    </div>
                
                    <button type="submit" class="btn btn-success">Login</button>
                </form>
            </div>
            </div>
            <div class="col-4"></div>
        </div>
        </div>
    )
}
export default Login