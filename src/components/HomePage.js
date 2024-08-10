import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
  const storedData = localStorage.getItem("user");
  const parsedData = JSON.parse(storedData);
  const navigate = useNavigate();

  // Extract user data...
  
  const user = parsedData.user_data[0];

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="nav-container">
          <div className="logo">
            <h1 className="company-heading">Syoft</h1>
          </div>
          <div className="group-container">
            <div>
              <button className="btn-container">About</button>
            </div>
            <div>
              <button className="btn-container">Contact</button>
            </div>
            <div>
              <button className="btn-container" onClick={()=>{navigate("/")}}>Logout</button>
              
            </div>
          </div>
        </div>
        <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col-lg-6 mb-4">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="/avatarimg.jpg"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{
                        width: "80px",
                        backgroundColor: "transparent",
                        height: "100px",
                        border: "2px solid green",
                        borderRadius: "16px",
                      }}
                    />
                    <h5>
                      {user.user_firstname} {user.user_lastname}
                    </h5>
                    <p>Web Designer</p>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{user.user_email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{user.user_phone}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Pincode</h6>
                          <p className="text-muted">{user.user_zipcode}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
