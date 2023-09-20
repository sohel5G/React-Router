import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Oval } from "react-loader-spinner";


const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div className="py-44">
            <div>
                <Header />
            </div>
            <div>
                {
                    navigation.state === 'loading' ? 
                    (
                        <div className="flex justify-center items-center mt-40">
                            <Oval
                                height={80}
                                width={80}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>
                    ) : 
                    (
                        <Outlet />
                    )
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;

