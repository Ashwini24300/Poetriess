import { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";

function Profile() {
    const [valuesN, setValuesN] = useState({
        first_name:"",
        last_name:"",
        email: "",
        password: "",
        mobile:"",
        address:""
    })
    const [values, setValues] = useState([])
    useEffect(()=>{
        debugger;
        axios.post('http://127.0.0.1:9999/profile', {user_id:sessionStorage.getItem("userId")})
        .then(res => {
            debugger;
            if (res.data.Status == 'Success') {
                console.log(res.data.Status);
                console.log(res.data.Result);

                if (res.data.Result.length > 0) {
                   // navigate('/home');
                   // sessionStorage.setItem("username", res.data.Result[0].first_name)
                   // sessionStorage.setItem("userId", res.data.Result[0].user_id)

                   // alert("Admin Login Sucessfully")
                   setValues(res.data.Result[0]);

                }
                // else {
                //     navigate('/user');
                //     sessionStorage.setItem("role", res.data.Result[0].role_name)
                //     sessionStorage.setItem("username", res.data.Result[0].first_name)

                //     alert("User Login Sucessfully")

                // }




            } else {
                
                // setError(res.data.Error);
                // setValues({
                //     email: "",
                //     password: ""
                // });
                // setTimeout(() => {
                //     setError("");
                // }, 5000);
                

                //console.log(res.data.Error);
            }
        })
        .catch(err => { console.log(err) })
    },[])
    
    const save=()=>{
        debugger;
        console.log(values);
        axios.post('http://127.0.0.1:9999/editprofile', values)
        .then(res => {
            if (res.data.Status == 'Success') {
                debugger;
                console.log(res.data.Status);
                console.log(res.data.Result.length);

                if (res.data.Result.affectedRows > 0) {
                    alert("Profile Updated Sucessfully")
                    // navigate('/');



                }
                // else {
                //     navigate('/user');
                //     sessionStorage.setItem("role", res.data.Result[0].role_name)
                //     sessionStorage.setItem("username", res.data.Result[0].first_name)

                //     alert("User Login Sucessfully")

                // }




            } else {

                // setError(res.data.Error);

                // setTimeout(() => {
                //     setError("");
                // }, 5000);


                //console.log(res.data.Error);
            }
        })
        .catch(err => { console.log(err) })
    };
    return (<>
    <Header></Header>
        <div className="RegisterTbl">
            <div class="table-responsive">
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>

                                <input type="text" name="first_name:"
                                    id="first_name" className="form-control"
                                    value={values.first_name}
                                    onChange={e => { setValues({ ...values, first_name: e.target.value }) }}
                                   
                                    placeholder='Enter first name' required="required" />

                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>


                                <input type="text" name="last_name:"
                                    id="last_name" className="form-control"
                                    value={values.last_name}
                                    onChange={e => { setValues({ ...values, last_name: e.target.value }) }}
                                    required="required" placeholder='Enter last name' />


                            </td>
                        </tr>
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
                            <td>Mobile:</td>
                            <td>

                                <input type="text" name="mobile:"
                                    id="mobile" className="form-control"
                                    value={values.mobile}
                                    onChange={e => { setValues({ ...values, mobile: e.target.value }) }}
                                    placeholder='Enter Mobile No.' required="required" />

                            </td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>


                                <input type="text" name="address:"
                                    id="address" className="form-control"
                                    value={values.address}
                                    onChange={e => { setValues({ ...values, address: e.target.value }) }}
                                    required="required" placeholder='Enter address ' />


                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <center>
                                    <button type="button"
                                        className="btn btn-primary"
                                        onClick={() => { save() }}
                                    >Save</button>
                                </center>
                            </td>
                        </tr>
                        {/* <tr>
                            <td colSpan={2}>
                                <div className='errorMsg'>{error}
                                </div>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default Profile;