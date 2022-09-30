import React from "react";
import "./Orderdetailpage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subbanner from "../components/Subbanner";
import Orderdetails from "../components/Orderdetails";
import Rating from "../components/Rating";

export default function Orderdetailpage() {
  return (
    <>
      <div className="orderdetailpage">
        <Header />
        <Subbanner />
        <div className="orderdetailpage_col">
          <div className="orderdetailpage_col_col1">
            <Orderdetails />
          </div>
          <div className="orderdetailpage_col_col2">
            <Rating />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
