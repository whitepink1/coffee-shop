import { Outlet } from "react-router";
import Header from './Header';
import Footer from "../Components/Footer";

function Homepage() {
    return (<div className="relative">
        <Header />
        <Outlet />
        <Footer />
    </div>)
}

export default Homepage;