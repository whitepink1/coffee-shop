import { NavLink } from "react-router";

function NavButton({children, dest}) {
    return (
    <NavLink to={dest} className={`bg-slate-300 mx-3`}>{children}</NavLink>)
}

export default NavButton;