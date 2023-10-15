import { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";

function Home() {
    const [data, setData] = useState([]);
    const [favdata, setfavData] = useState([]);
    const [likeData,setLikeData]=useState({user_id:"",quote_id:""});


    useEffect(() => {

       // debugger;

        axios.get('http://127.0.0.1:9999/allquotes')
            .then(res => {
                if (res.data.Status == 'Success') {
                    console.log(res.data.Status);
                    console.log(res.data.Result.length);

                    if (res.data.Result.length > 0) {
                        console.log(res.data.Result);
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
    },[]);
    const allQuotes = () => {
        debugger;
        axios.get('http://127.0.0.1:9999/allquotes')
            .then(res => {
                if (res.data.Status == 'Success') {
                    console.log(res.data.Status);
                    console.log(res.data.Result.length);

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
       

    };
    const favQuotes = () => {
        debugger;
        setData([]);
        axios.post('http://127.0.0.1:9999/favquotes',{user_id:sessionStorage.getItem("userId")})
        .then(res => {
            debugger;
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


    };
   const  likedQuote=(id)=>{
    debugger;
    let a=sessionStorage.getItem("userId");
    // setLikeData({user_id:a,quote_id:id});
    
    console.log(sessionStorage.getItem("userId"));
   
    console.log(id);
  
    // console.log(likeData);
    axios.post('http://127.0.0.1:9999/likeunlikequote',{user_id:a,quote_id:id})
    .then(res => {
        debugger;
        if (res.data.Status == 'Success') {
            debugger;
            console.log(res.data.Status);
            console.log(res.data.Result.length);
            console.log(res.data.Result);

            if (res.data.Result.affectedRows> 0) {
                alert("Liked")
                
            
             
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
            

            console.log(res.data.Error);
            if(res.data.Error.errno==1062){
                alert("Already Liked");
            }
        }
    })
    .catch(err => { console.log(err.Error)
       
    })

   };
   const  unlikeQuote=(id)=>{
    debugger;
    let a=sessionStorage.getItem("userId");
    // setLikeData({user_id:a,quote_id:id});
    
    console.log(sessionStorage.getItem("userId"));
   
    console.log(id);
  
    // console.log(likeData);
    axios.post('http://127.0.0.1:9999/removefavquotes',{user_id:a,quote_id:id})
    .then(res => {
        debugger;
        if (res.data.Status == 'Success') {
            debugger;
            console.log(res.data.Status);
            console.log(res.data.Result.length);
            console.log(res.data.Result);

            if (res.data.Result.affectedRows> 0) {
                alert("unliked")
                
            
             
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
            

            // console.log(res.data.Error);
            // if(res.data.Error.errno==1062){
            //     alert("Already Liked");
            // }
        }
    })
    .catch(err => { console.log(err.Error)
       
    })

   };



    return (<>
<Header></Header>
        <div className="container">
           
            <div>
                <br></br>
                <br></br>

                <center>
                    <h6>Quotes Around the World</h6>
                </center>

            </div>
            <div>
                <br></br>
                <button type="button" class="btn btn-primary"
                    onClick={() => { allQuotes(); }}
                >All</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-primary"
                    onClick={() => { favQuotes(); }}>Favorites</button>

            </div>

            <div class="table-responsive">
                <table class="table table-hover">
                    <tbody>
                        {
                            data.map(q => {
                                    if(sessionStorage.getItem("userId")==q.user_id)
                                    {
                                        return (
                                            <tr>
                                                <td>{q.text} &nbsp;  &nbsp;  &nbsp;  {"@"}{q.author}</td>
                                                <td>
                                                <button type="button" class="btn btn-success" disabled="disabled"
                                                onClick={()=>{likedQuote(q.quote_id)}}
                                                >Like</button>
                                                </td>
                                            </tr>
                                        )

                                    }
                               else{
                                return (
                                    <tr>
                                        <td>{q.text} &nbsp;  &nbsp;  &nbsp;  {"@"}{q.author}</td>
                                        <td>
                                        <button type="button" class="btn btn-success"
                                        onClick={()=>{likedQuote(q.quote_id)}}
                                        >Like</button>
                                        
                                        <button type="button" class="btn btn-warning"
                                        onClick={()=>{unlikeQuote(q.quote_id)}}
                                        >Unlike</button>
                                        
                                        </td>
                                    </tr>
                                )
                               }
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div class="table-responsive">
                <table class="table table-hover">
                    <tbody>
                       {
                          favdata.map(q => {
                            return (
                                // <tr>
                                //     <td>{q.text} &nbsp;  &nbsp;  &nbsp;  {"@"}{q.author}</td>
                                //     <td>
                                //     <button type="button" class="btn btn-success" 
                                //     onClick={()=>{unlikeQuote(q.quote_id)}}>unlike</button>
                                    
                                //     </td>
                                // </tr>
                                 <tr>
                                    <td>{q.text} &nbsp;  &nbsp;  &nbsp;  {"@"}{q.author}</td>
                                    <td>
                                        
                                        <button type="button" class="btn btn-warning">button</button>
                                        
                                    </td>
                                    {/* <td>
                                    <button type="button" class="btn btn-success" 
                                    onClick={()=>{unlikeQuote(q.quote_id)}}>unlike</button>
                                    
                                    </td> */}
                                </tr>
                            )
                        })
                       }
                    </tbody>
                </table>
            </div>


        </div>
    </>);
}

export default Home;
