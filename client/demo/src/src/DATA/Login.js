import { useRef, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    const navigate = useNavigate("");

    const signIn = () => {
        debugger;
        console.log(values);
        axios.post('http://127.0.0.1:9999', values)
            .then(res => {
                if (res.data.Status == 'Success') {
                    console.log(res.data.Status);
                    console.log(res.data.Result.length);

                    if (res.data.Result.length > 0 && res.data.Result[0].first_name != "") {
                        navigate('/home');
                        sessionStorage.setItem("username", res.data.Result[0].first_name)
                        sessionStorage.setItem("userId", res.data.Result[0].user_id)

                        alert("Admin Login Sucessfully")

                    }
                    // else {
                    //     navigate('/user');
                    //     sessionStorage.setItem("role", res.data.Result[0].role_name)
                    //     sessionStorage.setItem("username", res.data.Result[0].first_name)

                    //     alert("User Login Sucessfully")

                    // }




                } else {
                    
                    setError(res.data.Error);
                    setValues({
                        email: "",
                        password: ""
                    });
                    setTimeout(() => {
                        setError("");
                    }, 5000);
                    

                    //console.log(res.data.Error);
                }
            })
            .catch(err => { console.log(err) })

    }
    const register = () => {

        navigate('/register');
    }
    return (<>
        <div >
            <div className='myLogin'>
                <div>
                    <h1>Login</h1>
                    <hr></hr>
                </div>
                <div class="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>Email:</td>
                                <td>

                                    <input type="text" name="email"
                                        id="email" className="form-control"
                                        value={values.email}
                                        onChange={e => { setValues({ ...values, email: e.target.value }) }}
                                        placeholder='Enter email' required="required" />

                                </td>
                            </tr>
                            <tr>
                                <td>Password :</td>
                                <td>


                                    <input type="password" name="password"
                                        id="inputPassword" className="form-control"
                                        value={values.password}
                                        onChange={e => { setValues({ ...values, password: e.target.value }) }}
                                        required="required" placeholder='Enter password' />


                                </td>
                            </tr>
                            <tr>

                                <td colSpan={2}>

                                    <center>
                                        <button type="button"
                                            onClick={() => { signIn() }}
                                            className="btn btn-success">Login</button>

                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


                                    </center>

                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    Don't have Account ?   &nbsp; &nbsp;
                                    <button type="button"
                                        className="btn btn-primary"
                                        onClick={() => { register() }}
                                    >Register</button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className='errorMsg'>{error}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </>);
}

export default Login;