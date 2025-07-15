import './navbar.css'
import logo from '../../assets/images/logo.png'
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
                {

                    linkName.map((index,items)=>{
                        return(
                            <li key={index}><a href={`https://${url}.com`} className='nav-items'>{link1}</a></li>
                        )
                })
                }
            </ul>
        </nav>    
    </>
  )
}

export default NavBar