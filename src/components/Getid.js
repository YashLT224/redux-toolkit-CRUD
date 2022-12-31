import React from 'react'
import {useGetPostByIdQuery} from '../services/post'
const Getid = () => {
    const responseInfobyId=useGetPostByIdQuery(5)
    return (
        <div>
             <h1>Redux toolkit - RTK query (Get getPostById)</h1>
          <div>
           <h2>{responseInfobyId?.data?.id }. {responseInfobyId?.data?.title}</h2>
           <p>{responseInfobyId?.data?.body}</p>
           <hr/>
           </div>
  
        </div>
    )
}

export default Getid
