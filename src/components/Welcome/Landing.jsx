import React, { useState, useEffect } from "react";
import { MdOutlineCancel, MdCheckCircleOutline } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import validator from "validator";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Styles.module.css";

const Welcome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    if (
      validator.isStrongPassword(details.password, {
        pointsPerUnique: 0,
        pointsPerRepeat: 0,
      }) &&
      details.password === details.confirm_password &&
      details.password.length > 0 &&
      details.first_name &&
      details.last_name &&
      details.email
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [details]);

  const formSubmitHandle = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (formIsValid) {
      await axios
        .post("http://localhost:4000/api/v1/user", {
          ...details,
        })
        .then((response) => {
          toast("Successfully created account");
          window.localStorage.setItem("token", response.data.token);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          console.log(error.response.data);
          toast.error(error.response.data.message);
        });
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <div className={classes.body}>
        <div className={classes.container}>
          <h1>Welcome to TRAKK</h1>
          <p>Create an account to track your expenses</p>
          <div className={classes.sign_up}>
            <Form onSubmit={formSubmitHandle}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                required={true}
                style={{ marginBottom: "1rem" }}
                value={details.first_name}
                onChange={(e) =>
                  setDetails((prev) => {
                    return { ...prev, first_name: e.target.value };
                  })
                }
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                required={true}
                value={details.last_name}
                style={{ marginBottom: "1rem" }}
                onChange={(e) =>
                  setDetails((prev) => {
                    return { ...prev, last_name: e.target.value };
                  })
                }
              />
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="johndoe@host.com"
                required={true}
                style={{ marginBottom: "0.5rem" }}
                value={details.email}
                onChange={(e) =>
                  setDetails((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
              <Form.Label>Passsword</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                required={true}
                style={{ marginBottom: "1rem" }}
                value={details.password}
                onChange={(e) =>
                  setDetails((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
              <label
                htmlFor="password"
                style={{
                  margin: "0 0 1rem 0",
                  display: "block",
                  width: "100%",
                  fontSize: "0.6rem",
                }}
              >
                Your password must contain: <br />
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    a least 8 characters.
                    {details.password.length >= 8 ? (
                      <MdCheckCircleOutline className="text-success ms-2" />
                    ) : (
                      <MdOutlineCancel className="text-danger ms-2" />
                    )}
                  </li>
                  <li>
                    a minimum of 1 lower case letter.
                    {/[a-z]/.test(details.password) ? (
                      <MdCheckCircleOutline className="text-success ms-2" />
                    ) : (
                      <MdOutlineCancel className="text-danger ms-2" />
                    )}
                  </li>
                  <li>
                    a minimum of 1 upper case letter.
                    {/[A-Z]/.test(details.password) ? (
                      <MdCheckCircleOutline className="text-success ms-2" />
                    ) : (
                      <MdOutlineCancel className="text-danger ms-2" />
                    )}
                  </li>
                  <li>
                    a minimum of 1 numeric character.
                    {/[0-9]/.test(details.password) ? (
                      <MdCheckCircleOutline className="text-success ms-2" />
                    ) : (
                      <MdOutlineCancel className="text-danger ms-2" />
                    )}
                  </li>
                  <li>
                    {"a minimum of 1 special character."}
                    {/[^A-Za-z0-9]/.test(details.password) ? (
                      <MdCheckCircleOutline className="text-success ms-2" />
                    ) : (
                      <MdOutlineCancel className="text-danger" />
                    )}
                  </li>
                </ul>
              </label>
              <Form.Label>ConfirmPasssword</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                required={true}
                value={details.confirm_password}
                onChange={(e) =>
                  setDetails((prev) => {
                    return { ...prev, confirm_password: e.target.value };
                  })
                }
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  alignSelf: "start",
                  marginTop: "0.5rem",
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
                disabled={!formIsValid}
              >
                {loading ? (
                  <ImSpinner2 className="loading-spinner" />
                ) : (
                  "Create account"
                )}
              </Button>
              <Form.Text style={{ fontSize: "0.76rem", marginTop: "1rem" }}>
                Already have an account?{" "}
                <Link style={{ color: "inherit" }} to="/login">
                  Sign in.
                </Link>
              </Form.Text>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
