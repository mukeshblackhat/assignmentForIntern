import React  from 'react'

import './button.css'
import {Link} from 'react-router-dom'

const Button = ({userName,id,avatar})=> {
    

   console.log(userName , id)
    return (

        <div className="usersButtons">
            <ul style={{listStyle:"none",padding:"auto"}}>
                <li>

            <img src={avatar} style={{borderRadius:'50%', aspectRatio:"auto"}} alt='loading'/>
                </li>
                <li>

           <Link to={`/user/${id}`} style={{ textDecoration: 'none' ,color:'white'}} id={id}>{userName}</Link>
                </li>
            </ul>
        </div>
    
    )
  
}

export default Button