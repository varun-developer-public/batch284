import './navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
let NavBar = ({link1="default",link2="default"})=> {

 let linkName = ["Home","Contact","Gallery","Login"]
 let url = link2;

 url = "hiiii"

  return (
    <>
        <nav className='navbar'>
           <div className="nav-logo">
            <img src={logo} alt="logo"/>
           </div>
            <ul className='navlist'>

                <Link to="/">Home</Link>
                <Link to="/forms">Form</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>    
    </>
  )
}

export default NavBar