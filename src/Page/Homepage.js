import Header from "../Components/Header";
import Mainbanner from "../Components/Mainbanner";
import Featuredlist from "../Components/Featuredlist";
import LatestProducts from "../Components/LatestProducts";
import Offerlist from "../Components/Offerlist";
import InBetweenBanner1 from "../Components/InBetweenBanner1";
import TrendingProducts from "../Components/TrendingProducts";
import Discountitem from "../Components/Discountitem";
import Topcategories from "../Components/Topcategories";
import InBetweenBanner2 from "../Components/InBetweenBanner2";
import Latestblog from "../Components/Latestblog";
import Footer from "../Components/Footer";
import "./style.css";
import BrandList from "../Components/BrandList";
export default function Homepage() {
  return (
    <>
      <Header />
      <Mainbanner />
      <div className="componentfeaturedlist">
        <Featuredlist />
      </div>
      <div className="componentlatestproducts">
        <LatestProducts />
      </div>
      <div className="componentofferlist">
        <Offerlist />
      </div>
      <div className="componentinbetweenbanner1">
        <InBetweenBanner1 />
      </div>
      <div className="componenttrendingproducts">
        <TrendingProducts />
        <Discountitem />
        <Topcategories />
      </div>
      <div className="componentinbetweenbanner2">
        <InBetweenBanner2 />
      </div>
      <BrandList/>
      <Latestblog />
      <Footer />
    </>
  )
}