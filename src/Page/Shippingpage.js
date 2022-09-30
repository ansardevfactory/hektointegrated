import React from "react";
import "./Shippingpage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subbanner from "../components/Subbanner";
import Shippingaddress from "../components/Shippingaddress";
import AddressList from "../components/AddressList";

export default function Shippingpage() {
  return (
    <>
      <div className="shippingpage">
        <Header />
        <div className="subbanner">
          <Subbanner />
        </div>
        <AddressList/>
        <Shippingaddress/>
        <Footer />
      </div>
    </>
  );
}
