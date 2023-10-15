import { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewQuote() {
    const [values, setValues] = useState({
        text: "",
        author: "",
        user_id:sessionStorage.getItem("userId")
    })
    const navigate=useNavigate();
   const  saveQuote=()=>{
    debugger;
    console.log(values);
    axios.post('http://127.0.0.1:9999/addquotes', values)
    .then(res => {
        if (res.data.Status == 'Success') {
            debugger;
            console.log(res.data.Status);
            console.log(res.data.Result.length);

            if (res.data.Result.affectedRows > 0) {
                alert("Quote Added")
                navigate('/my-quotes');




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
    return ( <>
    <Header></Header>
    <div className='myLogin'>
            <div>
                <h1>Add New Quote</h1>
                <hr></hr>
            </div>
            <div class="table-responsive">
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td>Quote Text:</td>
                            <td>

                                <input type="text" name="text_q"
                                    id="text_q" className="form-control"
                                    onChange={e => { setValues({ ...values, text: e.target.value }) }}
                                    placeholder='Enter Quote text' required="required" />

                            </td>
                        </tr>
                        <tr>
                            <td>Author :</td>
                            <td>


                                <input type="text" name="author"
                                    id="author" className="form-control"
                                    onChange={e => { setValues({ ...values, author: e.target.value }) }}
                                    required="required" placeholder='Enter author name' />


                            </td>
                        </tr>
                        <tr>

                            <td colSpan={2}>

                                <center>
                                    <button type="button"
                                        onClick={() => { saveQuote() }}
                                        className="btn btn-success">Save</button>

                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


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
    </> );
}

export default AddNewQuote;