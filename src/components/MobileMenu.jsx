import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"

import "../helper/MobileMenu.css"

function MobileMenu() {
  return (
    <Menu right>
            <Link to="/">Home</Link>
            {/* {user?.email && <Link to="/account">Account</Link>}
            {user?.email ? (<button onClick={signOut}>Log Out</button>
            ) : (
            <Link to="/signin">
                Sign In
            </Link>)} */}     
        
    </Menu>
  )
}

export default MobileMenu