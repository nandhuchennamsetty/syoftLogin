import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "../App.css";

const LoginForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    useremail: "",
    password: "",
    firstName: "",
    createpassword: "",
    email: "",
    mobilenumber: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Clear messages when mode changes
    
    setSuccessMessage("");
    setErrorMessage("");
    
  }, [mode]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "login") {
      if (!formData.useremail || !formData.password) {
        setErrorMessage("All fields are required.");
        setSuccessMessage("");
        return;
      }

      const loginData = {
        user_email: formData.useremail,
        user_password: formData.password,
      };

      try {
        const response = await axios.post(
          "https://syoft.dev/Api/userlogin/api/userlogin",
          loginData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          // Check if the status is true
          console.log("Success:", response.data);
          setSuccessMessage("Login successful!");
          setErrorMessage("");
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/home");
        } else {
          setErrorMessage("Login failed. Please check your credentials.");
          setSuccessMessage("");
        }
      } catch (error) {
        setErrorMessage("Error: " + error.message);
        setSuccessMessage("");
      }
    } else {
      if (
        !formData.firstName ||
        !formData.createpassword ||
        !formData.email ||
        !formData.mobilenumber
      ) {
        setErrorMessage("All fields are required.");
        setSuccessMessage("");
        return;
      }

      const signupData = {
        user_firstname: formData.firstName,
        user_email: formData.email,
        user_phone: formData.mobilenumber,
        user_password: formData.createpassword,
        user_lastname: "ni",
        user_city: "Hyderabad",
        user_zipcode: "500072",
      };

      try {
        const response = await axios.post(
          "https://syoft.dev/Api/user_registeration/api/user_registeration",
          signupData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status) {
          // Check if the status is true
          console.log("Success:", response.data);
          setSuccessMessage("Sign up successfully!");
          setErrorMessage("");

          setFormData({
            firstName: "",
            createpassword: "",
            email: "",
            mobilenumber: "",
          });
        } else {
          setErrorMessage("Sign up failed. Please try again.");
          setSuccessMessage("");
        }
      } catch (error) {
        setErrorMessage("Error: " + error.message);
        setSuccessMessage("");
      }
    }

    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-block__input-wrapper">
        <div className="form-group form-group--login">
          <Input
            type="text"
            id="useremail"
            label="Email"
            disabled={mode === "signup"}
            onChange={handleChange}
            value={formData.useremail}
          />
          <Input
            type="password"
            id="password"
            label="password"
            disabled={mode === "signup"}
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="form-group form-group--signup">
          <Input
            type="text"
            id="firstName"
            label="full name"
            disabled={mode === "login"}
            onChange={handleChange}
            value={formData.firstName}
          />
          <Input
            type="email"
            id="email"
            label="email"
            disabled={mode === "login"}
            onChange={handleChange}
            value={formData.email}
          />
          <Input
            type="password"
            id="createpassword"
            label="password"
            disabled={mode === "login"}
            onChange={handleChange}
            value={formData.createpassword}
          />
          <Input
            type="number"
            id="mobilenumber"
            label="Mobile Number"
            disabled={mode === "login"}
            onChange={handleChange}
            value={formData.mobilenumber}
          />
          
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <button className="button button--primary full-width" type="submit">
        {mode === "login" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
};

const Input = ({ id, type, label, disabled, value, onChange }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
    value={value}
    onChange={onChange}
  />
);

export default LoginForm;
