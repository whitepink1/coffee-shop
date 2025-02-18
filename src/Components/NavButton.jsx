import { NavLink } from "react-router";

function NavButton({children, dest}) {
    return (
    <NavLink to={dest} className={`text-md font-semibold text-coffee-800 mx-5 p-1`}>{children}</NavLink>)
}

export default NavButton;