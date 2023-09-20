import { NavLink } from "react-router-dom"
import './header.css'

function Header() {
    return (
        <nav>
            <ul className="flex gap-9 justify-center">
                <li> <NavLink className='p-5' to={'/home'}>Home</NavLink> </li>
                <li> <NavLink className='p-5' to={'/about'}>About</NavLink> </li>
                <li> <NavLink className='p-5' to={'/users'}> Users </NavLink> </li>
                <li> <NavLink className='p-5' to={'/contact'}>Contact</NavLink> </li>
            </ul>
        </nav>
    )
}

export default Header

