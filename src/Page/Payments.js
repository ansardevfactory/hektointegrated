import Header from "../components/Header";
import Footer from "../components/Footer";
import Subbanner from "../components/Subbanner";
import Payment from "../components/Payment";
import "./Payments.css";

export default function Payments() {
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
