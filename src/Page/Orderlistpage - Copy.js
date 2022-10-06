import Header from "../Components/Header";
import Subbanner from "../Components/Subbanner";
import Orderlist from "../Components/Orderlist";
import Footer from "../Components/Footer";
import "./Orderlistpage.css";
export default function Orderlistpage() {
    return (
        <>
            <Header />
            <Subbanner label="Order List" label1="Order List" />
            <div className="componentorderlist">
                <Orderlist />
            </div>
            <Footer />
        </>
    )
}