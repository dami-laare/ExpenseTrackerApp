import React from "react";
import { Form, Button } from "react-bootstrap";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import classes from "./Styles.module.css";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post("https://trakk-backend.herokuapp.com/api/v1/user/login", {
        email,
        password,
      })
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);

        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className={classes.body} style={{ height: "100vh" }}>
      <div className={classes.container}>
        <h1 style={{ marginBottom: "3rem" }}>Login</h1>
        <div className={classes.sign_up}>
          <Form onSubmit={handleLogin}>
            <Form.Label style={{ alignSelf: "left" }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe@host.com"
              required={true}
              style={{ marginBottom: "1rem" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label style={{ alignSelf: "left" }}>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              required={true}
              style={{}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={{
                fontSize: "0.8rem",
                alignSelf: "start",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <input
                type="checkbox"
                onChange={() => setShowPassword((prev) => !prev)}
                style={{ marginRight: "0.4rem" }}
              />
              Show Password
            </span>
            <Button
              style={{
                minWidth: "10rem",
                width: "10rem",
              }}
              variant="dark"
              type="submit"
            >
              {loading ? <ImSpinner2 className="loading-spinner" /> : "Login"}
            </Button>
            <Form.Text style={{ fontSize: "0.76rem", marginTop: "1rem" }}>
              Don't have an account?{" "}
              <Link style={{ color: "inherit" }} to="/">
                Sign up.
              </Link>
            </Form.Text>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
