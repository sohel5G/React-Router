import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className="py-44">

            <div>
                <Header />
            </div>

            <div>
                <Outlet/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;