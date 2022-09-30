import React from "react";
import "./Orderdetailpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Orderdetails from "../Components/Orderdetails";
import Rating from "../Components/Rating";

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
