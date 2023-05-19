import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Images/viewmore.jpg";

const ViewMore = () => {
    const navigate = useNavigate();
   
    const backHandler = () => {
        navigate("/");
    };

    return(
        <div className="container-fluid my-4">
            <div className="row">
            <div className="col-md-4 col-sm-4 my-4">
                <h3>Choose Your Favourite Electronic Products and Clothes.</h3>
               <h6>A fresh approach to shopping, A great place to be, Discover something new.</h6>  
               <p>Shopping WEB is a Online Shopping site for Electronic Products and Men's Fashion. As online shopping is easy, comfortable and available 24 hours.</p>
               <button className="btn btn-success" onClick={backHandler}>Go Back</button>
            </div>
            <div className="col-md-8 mb-3 col-sm-8 mt-3">
            <img src={image} alt="#" width="100%"/>
            </div>
            </div>
        </div>        
    );
};
export default ViewMore;