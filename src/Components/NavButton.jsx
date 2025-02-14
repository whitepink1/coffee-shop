import { NavLink } from "react-router";

function NavButton({children, dest}) {
    return (
    <NavLink to={dest} className={`bg-coffee-50/50 mx-3 py-1 px-2 rounded-full shadow-md`}>{children}</NavLink>)
}

export default NavButton;