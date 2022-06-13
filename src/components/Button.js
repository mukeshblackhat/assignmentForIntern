import React  from 'react'
import './button.css'
import {Link} from 'react-router-dom'

const Button = ({userName,id,avatar})=> {
    
    return (
       <div className="mainButton">
           <div className="avatar">
            <img src={avatar}  alt='loading'/>
           </div>
           <div className="names">
           <Link to={`/user/${id}`} style={{ textDecoration: 'none' ,color:'white'}} id={id}>{userName}</Link>
           </div>
       
        </div>
    )
  
}

export default Button