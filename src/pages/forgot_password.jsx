import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../css/forgot-password.css";
const Forgot_password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="forgot-password-page">
      <h1>Forgot Password</h1>
      <form>
        <div>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={() => navigate("/login")}>
            Go Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forgot_password;
