import { useState } from 'react';
import NavBar from '../navbar/navbar'
import './home.css'
function Home() {
    let [username,setUsername] = useState("varun")
    console.log(username);
    
    setUsername("kumar")
    console.log(username);

  return (
    <>
    <div className="home">
        <NavBar link1={"cejbe"} link2="gallery"/>
        <NavBar link1="Register" link2="contact"/>
        <NavBar link1="Contact" link2="link"/>
        <NavBar/>
    </div>
    </>
  )
}

export default Home