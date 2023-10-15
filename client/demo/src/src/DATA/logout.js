import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate('');
    const logmeout=()=>{
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("role");
        setTimeout(() => { navigate('/') }, 3000)
    }
    return (<>
        <div className="logoutDiv">
            <h5>Hello {sessionStorage.getItem("username")}</h5>
            <h5> You have logged out</h5>
            <h5> You will be auto taken to login page shortly</h5>
            {logmeout()}
        </div>
    </>);
}

export default Logout;