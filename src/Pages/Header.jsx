import NavButton from "../Components/NavButton"

function Header() {
    return (<header className="flex justify-between px-10 bg-coffee-100 py-5">
        <div>Logo</div>
        <div className="flex justify-between">
            <NavButton dest={'/'}>Homepage</NavButton>
            <NavButton dest={'/menu'}>Menu</NavButton>
            <NavButton dest={'/about'}>About</NavButton>
            <NavButton dest={'/reservation'}>Reservation</NavButton>
        </div>
    </header>)
        
}

export default Header;