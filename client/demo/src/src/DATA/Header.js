import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";

function Header() {
    const navigate=useNavigate()
    const logoutMe=()=>{
        navigate('/logout');
        
    }
    const goHome=()=>{
        
        debugger;
        navigate('/home');
    }
    const goMyquotes=()=>{
        debugger;
        navigate('/my-quotes')
    }
    const goProfile=()=>{
        navigate('/profile')
    }
    return (<>
        <div className="container">
            <nav class="navbar navbar-light bg-light">
                <div>
                    <div><h6>Hello {sessionStorage.getItem("username")}</h6>
                    </div>
                    <center>
                        <div>
                            {/* <h3>Home
                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                                My Quotes
                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                Profile
                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            </h3>
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; */}
                            
                            <button type="button" class="btn btn-sm btn-success"
                            onClick={()=>{goHome()}}
                            >Home</button>
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <button type="button" class="btn btn-sm btn-success"
                            onClick={()=>{goMyquotes()}}
                            >My Quotes</button>
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                            <button type="button" class="btn btn-sm btn-success"
                            onClick={()=>{goProfile()}}
                            >Profile</button>

                            
                            
                            
                           
                            &nbsp;
                             {/* <NavLink to="/home">Home</NavLink>  */}
                            {/* <a href="/home">Home </a>  */}
                            {/* <Link to="/home">Home</Link>  */}
                             
                            {/* <Link to="/my-quotes"><h3>My Quotes</h3></Link> */}
                        
                            {/* <Link to="/profile">"<h3>Profile</h3></Link>
                            &nbsp;
                            <hr></hr>
                               {/* <Link to="/home">Home</Link>
                            
                                <Routes>
                                   
                                    <Route path="/home" Component={Home} />
                                </Routes> */}
                           


                        </div>
                    </center>
                </div>
                <div>  
                <button type="button" class="btn btn-warning"
                onClick={()=>{logoutMe()}}>Logout</button>
                </div>
            </nav>
        </div>
    </>);
}

export default Header;