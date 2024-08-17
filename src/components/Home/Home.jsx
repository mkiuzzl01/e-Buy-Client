import { Link } from "react-router-dom";
import RecentProductsBanner from "../Share/RecentProductsBanner";
import TrendingProducts from "../Share/TrendingProducts";
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <div className="my-10">
            <Helmet>
                <title>e-Buy | Home </title>
            </Helmet>
           <RecentProductsBanner></RecentProductsBanner>
           <TrendingProducts></TrendingProducts>
           <div className="flex justify-center my-4">
            <Link to='/Shop'>
            <button className="btn text-white rounded-none bg-[#8E8FFA]">See More</button>
            </Link>
           </div>
        </div>
    );
};

export default Home;