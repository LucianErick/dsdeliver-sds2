import './styles.css'
import {MdMotorcycle} from 'react-icons/md'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="main-navbar">
            <Link to="/">
                <MdMotorcycle id="logo" />
                DS Delivery
            </Link>
        </nav>
    )
}

export default Navbar