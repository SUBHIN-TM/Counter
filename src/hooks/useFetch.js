import { useState,useEffect } from "react"
import axios from "axios"

const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [isWait,setIswait]=useState(false)
    const [error,setError]=useState(null)
    

    useEffect(()=>{
        fetching()
         },[])

         const refresh=()=>{
            fetching()
         }

         const fetching= async()=>{
            try {
             setIswait(true)
             const response=await axios.get(url)
            setTimeout(() => {
                setData(response.data)
                setIswait(false)
            }, 2000);
           
            } catch (error) {
             alert("Error occured during fetching")
             setError(error)
             console.error(error);
             setIswait(false)
            }
         }

         return{data,isWait,error,refresh}
}

export default useFetch;
