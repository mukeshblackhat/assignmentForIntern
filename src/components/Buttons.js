import React from 'react'
import Button from './Button'

// import './buttons.css'

const Buttons=({data})=> {
  console.log("you are in buttons ")
  console.log(data)
 
  return (
    <div  style={userStyle}>
      {data.map(user=><Button  key={user.id}  id={user.id} userName={user.first_name} avatar={user.avatar}/>)}
    </div>
  )
}
const userStyle={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
}
export default Buttons