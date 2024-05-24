import { useEffect, useState } from "react";
import axios from 'axios';

const Task1=()=>{
    const [data,setData]=useState([])
    const [isWait,setIswait]=useState(false)
    useEffect(()=>{
   fetching()
    },[])

    const fetching= async()=>{
       try {
        setIswait(true)
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
       //  console.log(response.data);
      
       setTimeout(() => {
           setData(response.data)
           setIswait(false)
       }, 2000);
 
        
       } catch (error) {
        alert("Error occured during fetching")
        console.error(error);
       }
    }



    const refreshFunc=()=>{
        data.length=0
        fetching()
    }

    return(
    <>
    <button onClick={refreshFunc} style={{padding:'10px', margin:'20px'}}>Refresh</button>
      <div>
        <table >
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Description</td>
                </tr>
            </thead>
            {isWait &&  (<>Loading...</> )}
            <tbody>

           
             

             {data.map((data)=>(
             
                <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.title}</td>
                     <td>{data.body}</td>
                </tr>
              
               
             ))}
            </tbody>
        </table>
      </div>
    </>
    )
}

export default Task1;