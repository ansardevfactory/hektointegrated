import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OrderCompleted from "../Components/OrderCompleted";
import Subbanner from "../Components/Subbanner";
import "./Ordercompletedpage.css";
export default function Ordercompletedpage() {
    return (
        <>
            <Header />
            <Subbanner label="Order Completed" label1="Order Completed" />
            <OrderCompleted />
            <Footer />
        </>
    )
}