import React,{Component} from "react";
import '../assets/css/Login.css'
class Login extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <form onsubmit="event.preventDefault()" className="box">
                                <h1 className="text-center">Login</h1>
                                <p className="text-muted text-center">Please enter your login and password!</p>

                                <input type="text" name="username" placeholder="Username" className="form-control my-2" />
                                <input type="password" name="password" placeholder="Password" className="form-control my-2" />

                                <a className="forgot text-muted d-block text-end mb-3" href="#">Forgot password?</a>

                                <input type="submit" value="Login" className="btn btn-primary w-100" />

                                <div className="col-md-12 mt-4 text-center">
                                    <ul className="social-network social-circle list-inline">
                                        <li className="list-inline-item">
                                            <a href="#" className="icoFacebook" title="Facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="icoTwitter" title="Twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="icoGoogle" title="Google +">
                                                <i className="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

export default Login