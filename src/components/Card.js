import React ,{useEffect , useState} from 'react'
import axios from 'axios'
import './card.css'
import {useParams} from "react-router-dom";

const Card =()=> {
   const [data,setData]=useState([]);
   const [loading , setLoading]=useState(false);

  const {id}=useParams();

  const fetchMyAPI= async() =>{
    setLoading(true);
    const response = await axios.get(`https://reqres.in/api/users/${id}`)
    setData(response.data.data)
    setLoading(false);
  console.log(response.data.data)
  }
    
  
  useEffect(()=>{
    fetchMyAPI();
    // eslint-disable-next-line
    },[])
  
    return (
      <div className="mainContainer">
      <div className='mainCard'>
        <div  className="avatar"><img src={data.avatar}  alt="sorry"/></div>
        <div className="userInfo">
        <table >
       <tr>
           <td>
             <b>Name : </b>
           </td>
           <th>
              {data.first_name} {data.last_name}
           </th>
         </tr>
         <tr>
           <td>
             <b>Email :  </b>
           </td>
           <th>
               {data.email}
           </th>
         </tr>
       </table>
        </div>
       
         {/* <div className="name"><b>Name :</b>{loading?<p>wait its loading...</p>:<p>{data.first_name}</p>}</div> */}
        
          
      </div>
      </div>
    )
  
}

export default Card