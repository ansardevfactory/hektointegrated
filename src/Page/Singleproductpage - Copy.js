import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import BrandList from "../Components/BrandList";
import Relatedproducts from "../Components/Relatedproducts";
import Productthumb from "../Components/Productthumb";
import ProductDescription from "../Components/ProductDescription";
import "./Singleproductpage.css";
export default function Singleproductpage(){
    return(
        <> 
           <Header/>
           {/* <Subbanner label="Product Details"/> */}
           <Productthumb/>
           <ProductDescription/>
           <Relatedproducts/>
           <BrandList/>           
           <Footer/>
        </>
    )
}