import { Link } from "react-router";
import NavButton from "../Components/NavButton";
import logo from '../Images/logo.png';

function Header() {
    return (<header className="fixed z-20 block">
        <div className="flex px-[12vw] items-center justify-between w-[100vw] bg-coffee-100/95 bg-gradient-to-t from-coffee-50/75">
        <Link to='/'><img className="h-12 drop-shadow-2xl" src={logo} alt='Logo'/></Link>
        <div className="flex justify-between my-3">
            <NavButton dest={'/'}>Homepage</NavButton>
            <NavButton dest={'/menu'}>Menu</NavButton>
            <NavButton dest={'/reservation'}>Reservation</NavButton>
        </div>
        </div>
    </header>)
        
}

export default Header;