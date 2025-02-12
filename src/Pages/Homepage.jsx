import { Outlet } from "react-router";
import Header from './Header';

function Homepage() {
    return (<>
        <Header />
        <Outlet />
    </>)
}

export default Homepage;