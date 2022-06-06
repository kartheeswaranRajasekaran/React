function Register(){
    return(
        <div class="container">
        <div class="row">
          <div class="col-4">
          </div>
          <div class="col-4"><br/>
            <div><h1 class="head">Sign Up</h1></div>
            <form>
                <div class="form-group">
                    <label><h6>First Name</h6></label>
                    <input type="text" class="form-control" id="firstName"  placeholder="First name"/>
                  </div>
                  <div class="form-group">
                    <label><h6>Last Name</h6></label>
                    <input type="text" class="form-control" id="lastName"  placeholder="Last name"/>
                  </div>
                  
                <div class="form-group">
                  <label><h6>Email address</h6></label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email"/>                  
                </div>
                <div class="form-group">
                  <label><h6>Password</h6></label>
                  <input type="password" class="form-control" id="password" placeholder="Enter Password"/>
                </div>              
                <button type="submit" class="btn btn-success">Submit</button>
              </form>
        </div>
          <div class="col-4">
          </div>
        </div>
    </div>
    )
}
export default Register;