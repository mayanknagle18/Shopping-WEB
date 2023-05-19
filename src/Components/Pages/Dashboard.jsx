import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const Dashboard = () => {
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate();
    console.log(user);

    const logoutHandler = async () => {
        try{
            await logOut();
            navigate("/");
        }
        catch(err){
            console.log(err.message);
        }
    };
    return(
        <div>
            <div className="container my-5 border border-secondary">
                <div className="row">
                    <div className="col">
                    <div className="text-center my-5">
                       <h1 className="p-2">Hello Welcome</h1>
                       <br />
                       {user && user.email}
                    </div>
                    <div className="text-center my-5">
                        <button type="submit" className="btn btn-danger rounded p-2 w-25" onClick={logoutHandler}>Logout</button>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};
export default Dashboard;