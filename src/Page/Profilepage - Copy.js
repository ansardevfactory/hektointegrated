import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Profileedit from "../Components/Profileedit";
export default function Profilepage() {
    return (
        <>
            <Header />
            <Subbanner />
            <div className="componentprofileedit">
                <Profileedit />
            </div>
            <Footer />
        </>
    )
}