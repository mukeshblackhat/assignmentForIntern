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

      <div className='mainCard'>
       <table style={{margin:"auto", paddingTop:"30px" ,textAlign:"center"}}>
         
          <img src={data.avatar} style={{marginLeft:"70%"}} alt="sorry"/>
          

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
         {/* <div className="name"><b>Name :</b>{loading?<p>wait its loading...</p>:<p>{data.first_name}</p>}</div> */}
        
          
      </div>
    )
  
}

export default Card