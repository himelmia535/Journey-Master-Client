import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Root = () => {
    return (
        <>
            <div className="h-20">
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;