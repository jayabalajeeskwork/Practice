import React, { useState } from 'react'
import { Link } from 'react-router';
import "./Navbar3.css"
function Navbar3() {

    const [show, setShow] = useState(false);
    const menu =
    [
        {name:"Home", path:"/home"},
        {name:"Contact", path:"/contact"},
        {name:"About", path:"/about"},
        {name:"Services", path:"/services"},

    ]
  return (
    <>
    <nav className='navbar'>
        <Link to="/" className='nav-link'>
        <h2 className='logo'>Jaya</h2>
        </Link>

        <button type='button' className="menu-btn" onClick={() => setShow(!show)}>
            {show?<i class="bi bi-x-lg"></i>:<i className="bi bi-list"></i>}
        </button>
        <ul className={show?"nav-links active":"nav-links"}>
            {menu.map((item,index)=>(
                <li key={index}>
                    <Link to={item.path} onClick={() => setShow(false)}>
                    {item.name}
                    </Link>
                </li>
            ))}
        </ul>

    </nav>
    </>
  )
}

export default Navbar3
