import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const [confirm_password, setConfirm_password] = useState({ Cpassword: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const register = () => {
        debugger;
        console.log(values)
        if (values.password == confirm_password.Cpassword) {
            axios.post('http://127.0.0.1:9999/register', values)
                .then(res => {
                    if (res.data.Status == 'Success') {
                        debugger;
                        console.log(res.data.Status);
                        console.log(res.data.Result.length);

                        if (res.data.Result.affectedRows > 0) {
                            navigate('/');



                        }
                        // else {
                        //     navigate('/user');
                        //     sessionStorage.setItem("role", res.data.Result[0].role_name)
                        //     sessionStorage.setItem("username", res.data.Result[0].first_name)

                        //     alert("User Login Sucessfully")

                        // }




                    } else {

                        setError(res.data.Error);

                        setTimeout(() => {
                            setError("");
                        }, 5000);


                        //console.log(res.data.Error);
                    }
                })
                .catch(err => { console.log(err) })
           
        }
        else {
            

                setError("Mismatch Between Password");
                setTimeout(() => {
                    setError("");
                }, 5000);

        }
    };

    const signIn = () => {
        navigate('/');

    }
    return (<>
        <div className="RegisterTbl">
            <h3>Register Here:</h3>
            <hr></hr>
            <div class="table-responsive">
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>

                                <input type="text" name="first_name:"
                                    id="first_name" className="form-control"
                                    onChange={e => { setValues({ ...values, first_name: e.target.value }) }}
                                    placeholder='Enter first name' required="required" />

                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>


                                <input type="text" name="last_name:"
                                    id="last_name" className="form-control"
                                    onChange={e => { setValues({ ...values, last_name: e.target.value }) }}
                                    required="required" placeholder='Enter last name' />


                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>

                                <input type="text" name="email"
                                    id="email" className="form-control"
                                    onChange={e => { setValues({ ...values, email: e.target.value }) }}
                                    placeholder='Enter email' required="required" />

                            </td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td>

                                <input type="text" name="mobile:"
                                    id="mobile" className="form-control"
                                    onChange={e => { setValues({ ...values, mobile: e.target.value }) }}
                                    placeholder='Enter Mobile No.' required="required" />

                            </td>
                        </tr>
                        <tr>
                            <td>Password :</td>
                            <td>


                                <input type="password" name="password"
                                    id="inputPassword" className="form-control"
                                    onChange={e => { setValues({ ...values, password: e.target.value }) }}
                                    required="required" placeholder='Enter password' />


                            </td>
                        </tr>
                        <tr>
                            <td> Confirm Password :</td>
                            <td>


                                <input type="password" name="password"
                                    id="inputPassword" className="form-control"
                                    onChange={e => {
                                        setConfirm_password({ ...confirm_password, Cpassword: e.target.value });

                                    }}
                                    required="required" placeholder='Confirm password' />


                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <button type="button"
                                        className="btn btn-primary"
                                        onClick={() => { register() }}
                                    >Register</button>
                                </center>
                            </td>
                        </tr>
                        <tr>

                            <td colSpan={2}>

                                <center>
                                    Already Registered ?  &nbsp; &nbsp;
                                    <button type="button"
                                        onClick={() => { signIn() }}
                                        className="btn btn-success">Login</button>

                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


                                </center>

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
    </>);
}

export default Register;