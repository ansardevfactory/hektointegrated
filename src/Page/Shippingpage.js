import React from "react";
import "./Shippingpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Shippingaddress from "../Components/Shippingaddress";
import AddressList from "../Components/AddressList";

export default function Shippingpage() {
  return (
    <>
      <div>
        <Header />
        <Subbanner title={"Shipping Address"} />
        <AddressList />
        <Shippingaddress />
        <Footer />
      </div>
    </>
  );
}
