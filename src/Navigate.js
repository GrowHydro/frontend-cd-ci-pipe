import { Link, Outlet } from 'react-router-dom';
import './scss/greenroom.scss'
import './scss/navbar.scss'
import Weed from './pictures/Yellow-Leaf-Small.png'

const Navigate = () =>{

    return(<>
            <nav className='Nav justify-content-center align-text-bottom mx-auto p-4'> 
                <img className="compass align-top rounded-circle not-on-sm" src={Weed} alt="navigation" />
                <Link to="/">Home</Link>
                <Link to="/kits">Kits</Link>
                <Link to="/sci">Science</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/buy">Buy</Link>
            </nav>
            <Outlet />
           </>)
}

export default Navigate