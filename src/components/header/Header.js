
import React from 'react'
import Logo from '../../Assets/logo.png';
import logout from '../../Assets/logout.png';
import "./header.css";


function header  ({auth,user})  {
  return (
    <div className='header'>
    
        <img src={Logo} alt=""className='logo'/>
       { user&& <img src={logout} alt=""className='logout'onClick={()=>auth.signOut()}/> }
    
    
    </div>
  )
}

export default header;