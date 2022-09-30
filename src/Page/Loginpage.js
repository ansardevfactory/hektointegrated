import React from "react";
import "./Loginpage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subbanner from "../components/Subbanner";
import Login from "../components/Login";
import Signup from "../components/Signup";

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
