import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container my-2">
      <div className="row">   
        <div className="text-center">
          <h1>Electronic Products</h1>
        </div>
        {data.map((dummy) => {
          return (
            
              <div className="col-md-4 col-sm-6 col-12">
                <div className="card">
                  <img src={dummy.image} className="card-img-top" alt="..." height="250px" width="100px"/>
                  <div className="card-body">
                    <h5 className="card-title">{dummy.title}</h5>
                    <p className="card-text">
                      {dummy.description}
                    </p>
                    <div>
                      <button type="button" className="btn btn-success">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
