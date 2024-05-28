import useFetch from "../../hooks/useFetch";

const Task1=()=>{
    const {data,isWait,error,refresh}=useFetch('https://jsonplaceholder.typicode.com/posts')
   
    const refreshFunc=()=>{
        refresh()
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
            <tbody>
            {isWait ? (
                <tr>
                    <td>Loading......</td>
                </tr>
            ):(
                data.map((data)=>(        
                <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.title}</td>
                     <td>{data.body}</td>
                </tr>                            
             ))
            )}
               
            {error && (
                <tr>
                    <td><span>Error Occured During Fetching The Data</span></td>
                </tr>
            )}
            
            </tbody>
        </table>
      </div>
    </>
    )
}

export default Task1;