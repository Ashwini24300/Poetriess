import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";


function MyQuotes() {
    const [data, setData] = useState([]);
    const navigate =useNavigate();
    const [editData,setEditData]=useState({text:"",author:"",quote_id:""})
   useEffect(()=>{
    debugger;
    axios.post('http://127.0.0.1:9999/myquotes',{user_id:sessionStorage.getItem("userId")})
    .then(res => {
        if (res.data.Status == 'Success') {
            console.log(res.data.Status);
            console.log(res.data.Result.length);
            console.log(res.data.Result);

            if (res.data.Result.length > 0) {
                
              setData(res.data.Result);
              

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
   
   },[])

    const addQuote=()=>{
        navigate('/addNewQuote');
   
    };
    const edit=(id)=>{
        debugger;
        console.log(data[0].text);
        console.log(data[0].author);
        setEditData({text:data[0].text,author:data[0].author,quote_id:data[0].quote_id});
        console.log(editData);

    };
    const updateContents=()=>{
        debugger;
        axios.put('http://127.0.0.1:9999/editquote', editData)
        .then(res => {
            if (res.data.Status == 'Success') {
                debugger;
                console.log(res.data.Status);
                console.log(res.data.Result.length);

                if (res.data.Result.affectedRows > 0) {
                   alert("Quote Updated Sucessfully")



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
    const remove=(id)=>{
        debugger;
        axios.post('http://127.0.0.1:9999/delquotes', {quote_id:id})
        .then(res => {
            debugger;
            if (res.data.Status == 'Success') {
                // console.log(res.data.Status);

                alert("Quote deleted Sucessfully");

               // setContents({ tutId: 0, contents: "" });

                //navigate('/');

            } else {
                // setError(res.data.Error);
                // setTimeout(() => {
                //     setError("");
                // }, 5000);

                console.log(res.data.Error);

            }
        })
        .catch(err => {
            console.log(err)
        });
       
       
    };


    return ( <>
    <Header></Header>
     <div className="container">
           
            <div>
                <br></br>
                <br></br>

                <center>
                    <h6>My Quotes</h6>
                </center>

            </div>
            <div>
                
                <button type="button" class="btn btn-primary"
                onClick={()=>{addQuote()}}
                >Add Quote</button>
                
            </div>
            

            <div class="table-responsive">
                <table class="table table-hover">
                    <tbody>
                        {
                            data.map(q => {
                                return (
                                    <tr>
                                        <td>{q.text}  &nbsp;  &nbsp; &nbsp;  &nbsp; {"@"}{q.author}</td>
                                        <td>
                                        {/* <button type="button" class="btn btn-success"
                                        // onClick={()=>{likedQuote()}}
                                        >Like</button> */}
                                        </td>
                                        <td>
                                            
                                            <button type="button" class="btn btn-info"
                                            onClick={()=>{edit(q.quote_id)}}>Edit</button>
                                            
                                        </td>
                                        <td>
                                            
                                            <button type="button" class="btn btn-warning"
                                            onClick={()=>{remove(q.quote_id)}}
                                            >Remove</button>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                
            </div>
            <div className="smallDiv">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label >Quote Text</label>
                        <input type="text" class="form-control" value={editData.text}
                            name="contents" 
                            onChange={e => setEditData({ ...editData, text: e.target.value })}
                             placeholder="text" />
                    </div>

                </div>
                <div class="form-group">
                    <br></br>
                </div>
                <button type="submit"
                    class="btn btn-primary"
                    onClick={() => { updateContents() }}
                    >Update </button>
                &nbsp; &nbsp; &nbsp;

                {/* <div className="errorMsg">{error}</div> */}

            </div>
            


        </div>
    </>);

}

export default MyQuotes;