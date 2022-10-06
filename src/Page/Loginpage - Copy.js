import React from "react";
import "./Loginpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

export default function Loginpage() {
  return (
    <>
      <div className="loginpage">
        <Header />
        <Subbanner title={"My Account"}/>
        <div className="loginpage_logsign">
          <div className="loginpage_logsign_login">
            <Login />
          </div>
          <div className="loginpage_logsign_signup">
            <Signup />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
