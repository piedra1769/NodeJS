import './NavBar'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='menu'>
            <h1>Turismo Coogranada</h1>
            <div className='barra'>
                <button>Nacionales</button>
                <button>Internacionales</button>
                <button>Cruceros</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 