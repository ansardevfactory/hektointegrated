import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Payment from "../Components/Payment";
import "./Paymentpage.css";

export default function Paymentpage() {
  return (
    <>
      <div className="Payments">
        <Header />
        <Subbanner />
        <div className="payments_component">
          <Payment />
        </div>
        <Footer />
      </div>
    </>
  );
}
