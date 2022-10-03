import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Subbanner from "../Components/Subbanner";
import Filterhorizontal from "../Components/Filterhorizontal";
import Gridview from "../Components/Gridview";
import BrandList from "../Components/BrandList";
import Footer from "../Components/Footer";
import "./Shoppage.css";

export default function Shoppage_gridpage() {
  const navigate=useNavigate();
  const handleCartClick=()=>{
    navigate('/CartPage')
  }
  const handleLoginClick=()=>{
    navigate('/Loginpage')
  }
  const handleHomeClick=()=>{
    navigate('/')
  }
  const handleShopClick=()=>{
    navigate('/Shoppage')
  }
  const handleSignupClick=()=>{
    navigate('/Loginpage')
  }
  const handleProfilePageClick=()=>{
    navigate('/Profilepage')
  }
  const handleOrderListClick=()=>{
    navigate('/Orderlistpage')
  }
  const handleOrderDetailPageClick=()=>{
  navigate('/Orderdetailpage')
}
  return (
    <>
      <div className="shoppage_gridpage">
        <Header 
        handleCartClick={handleCartClick}
        handleLoginClick={handleLoginClick}
        handleHomeClick={handleHomeClick}
        handleShopClick={handleShopClick}
        />
        <Subbanner title={"Shopping"}/>
        <Filterhorizontal />
        <div className="shoppage_gridpage_gridview">
          <Gridview />
        </div>
        <BrandList />
        <Footer 
        handleSignupClick={handleSignupClick}
        handleProfilePageClick={handleProfilePageClick}
        handleOrderListClick={handleOrderListClick}
        handleOrderDetailPageClick={handleOrderDetailPageClick}/>
      </div>
    </>
  );
}
