import './Register.css';
import {Link,useNavigate} from 'react-router-dom';
import {Component, useState} from 'react';
import {FirstnameValidation,LastnameValidation,emailValidation,passwordValidation}  from '../Validation';

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      getForm:{
        firstname:'',
        lastname:'',
        email:'',
        password:''
      },
    getValidation:{
      firstname:'',
      lastname:'',
      email:'',
      password:''
    }
    }
  }

    onChangeHandler=(event)=>{
    this.setState({
     getForm:{
       ...this.state.getForm,
      [event.target.name]:event.target.value
     }
    })
  }

    onSubmitHandler=(event)=>{
    event.preventDefault(); 
    this.setState({
      getValidation:{
        firstname : !FirstnameValidation(this.state.getForm.firstname)?"Please use alphabet":"",
        lastname : !LastnameValidation(this.state.getForm.lastname)?"Please use alphabet with min 1 char":"",
        email:!emailValidation(this.state.getForm.email)?"please provide email":'',
        password:passwordValidation(this.state.getForm.password)?"Please provide the password":''
      }
    });

    if(emailValidation(this.state.getForm.email) && passwordValidation(this.state.getForm.password)){
      alert("Submitted Successfully");
      
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if(email === this.state.getForm.email && password === this.state.getForm.password){
        document.location.href="/adminSearch";
      }
      else{
        this.setState({
          getValidation:{
            email:'no match found',
            password:'no match found'
          }
        });
      }
  
    }
}



  render(){
    return(
      <div>
          <div className="container">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                  <form>
                      <div className="form-group">
                          <label>First Name</label>
                          <input type="text"  onChange={this.onChangeHandler} value={this.state.getForm.firstName} className="form-control" id="firstName" name="firstName"  placeholder="Enter first name"/>
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" onChange={this.onChangeHandler} value={this.state.getForm.lastName} className="form-control" id="lastName" name="lastName" placeholder="Enter last name"/>
                        </div>
                        
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email"  onChange={this.onChangeHandler} value={this.state.getForm.email} className="form-control" id="email" name="email" placeholder="Enter email"/>
                        {this.state.getValidation.email && <div class="alert alert-danger" role="alert">
                        {this.state.getValidation.email}
</div> }
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.onChangeHandler} value={this.state.getForm.password} className="form-control" id="password" name="password" placeholder="Password"/>
                       
                        {this.state.getValidation.password && <div class="alert alert-danger" role="alert">
                        {this.state.getValidation.password}
</div>}
                      </div>
                  
                      <button onClick={this.onSubmitHandler} type="submit" className="btn btn-success">Submit</button>
                    </form>
              </div>
                <div className="col-4">
                    
              </div>
              </div>
     
          </div>
    </div>

    )
  }
}




export default Register;