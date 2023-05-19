import React from "react";
import { useNavigate } from "react-router-dom";
import home1 from "../../Images/background.jpg";

const Home = () => {
  const navigate = useNavigate();
  
  const contactHandler = () => {
    navigate("/contact");
  };

  const learnMoreHandler = () => {
    navigate("/viewmore");
  };

  return (
    <div>
    
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-4">
            <h3>Online Shopping Website</h3>
            <h1>Shopping WEB</h1>
            <p>The latest trend is here in this Shopping WEB.</p>
            <div >
                <button className="btn btn-success m-2" onClick={learnMoreHandler}>View More</button>
                <button className="btn btn-success m-2" onClick={contactHandler}>Contact Us</button>
            </div>
          </div>

          <div className="col-md-8 mb-3">
                <img src={home1} alt="" className="w-100"/>
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default Home;