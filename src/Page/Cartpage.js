import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Checkout from "../Components/Checkout";
import Subbanner from "../Components/Subbanner";
import "./Cartpage.css";
export default function Cartpage() {
    return (
        <>
            <div className="componentheader">
                <Header />
            </div>
            <div className="componentsubbanner">
                <Subbanner label="Shopping Cart" />
            </div>

            <div className="componentcheckout">
                <Checkout />
            </div>
            <Footer />
        </>
    )
}