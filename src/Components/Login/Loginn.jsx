import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export default function Loginn() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const userNameRef = useRef("");
    const passwrodRef = useRef("");

    useEffect(() => {
        userNameRef.current.focus();
    }, []);

    const onInputChange = (e, type) => {
        if (e.type === "change" && type === "un") {
            if (e.target.value !== "") {
                setIsError(false);
                setErrorMessage("");
            }
            if (e.target.value.length < 8) {
                setIsError(true);
                setErrorMessage("Enter Proper Username");
                
            }
            setUserName(e.target.value);
        } else if (e.type === "change" && type === "pwd") {
            const PasswordFormat = new RegExp(
                /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
            );
            if (e.target.value !== "") {
                setIsError(false);
                setErrorMessage("");
            }
            if (!PasswordFormat.test(e.target.value)) {
                setIsError(true);
                setErrorMessage(
                    "Please neter password with Alhabet, Number, and minimum of 8 characters"
                );
            }
            setPwd(e.target.value);
        }
    };

    const ValidateForm = (value, type) => {
        let inputValid = false;
        const regExp =
            type === "un"
                ? new RegExp(/^[a-zA-Z]+[a-zA-Z0-9-_ ]*[a-zA-Z0-9]$/)
                : new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/);
        inputValid = regExp.test(value);
        return inputValid;
    };

    const onInputBlur = (e, type) => {
        if (e.type === "blur") {
            if (type === "un") {
                if (userName === "") {
                    setIsError(true);
                    setErrorMessage("User Name is Req");

                }
            }
            if (type === "pwd") {
                if (pwd === "") {
                    setIsError(true);
                    setErrorMessage("Password is Required");

                }
            }
        }
    }


    const onSubmitForm = (e) => {
        if (e.type === "click") {
            const enteredUserName = userNameRef.current.value;
            const enterPassword = passwrodRef.current.value;
            // 1. user name is empty or not
            // 2. password empty or not
            // 3. username with specific min length
            // 4. password with proper format
            if (userName === "") {
                setIsError(true);
                setErrorMessage(...errorMessage + "User Name is Required");
                return;
            }
            if (enterPassword === "") {
                setIsError(true);
                setErrorMessage(...errorMessage + "Password is Required");
                return;
            }
            if (enteredUserName.length < 8) {
                setIsError(true);
                setErrorMessage("Enter Proper Username");
                return;
            }
            const PasswordFormat = new RegExp(
                /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
            );
            if (!PasswordFormat.test(enterPassword)) {
                setIsError(true);
                setErrorMessage(
                    "Please neter password with Alhabet, Number, and minimum of 8 characters"
                );
                return;
            }
            if (enteredUserName === "senthils" && enterPassword === "A@bced1234") {
                sessionStorage.setItem("isLogin",'true')
                navigate("/home");
            } else {
                setIsError(true);
                setErrorMessage("User name or password incorrect. Please retry");
                return;
            }
        }
    };
    return (
        <div className="loginPageContainer">
            <h2>Welcome, Please login to continue</h2>
            <div
                className="loginContainer"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <div>
                    <TextField
                        type="text"
                        value={userName}
                        ref={userNameRef}
                        onBlur={(e) => {
                            onInputBlur(e, "un");
                        }}
                        placeholder="User Name"
                        onChange={(e) => {
                            onInputChange(e, "un");
                        }}
                        error={false}
                        helperText="User Name"
                    />
                </div>
                <div>
                    <TextField
                        onBlur={(e) => {
                            onInputBlur(e, "pwd");
                        }}
                        type="password"
                        value={pwd}
                        placeholder="Password"
                        ref={passwrodRef}
                        onChange={(e) => {
                            onInputChange(e, "pwd");
                        }}
                        helperText="Password"
                    />
                </div>
                {isError && (
                    <div className="error-container">
                        <p style={{ fontSize: "16px", color: "red" }}>{errorMessage}</p>
                    </div>
                )}

                <div>
                    <button
                        title="Login"
                        onClick={(e) => {
                            onSubmitForm(e);
                        }}
                        style={{
                            cursor: "pointer",
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}