import React from 'react'
import {useGetPostByLimitQuery} from '../services/post'

const Limit = () => {
    const responseInfo=useGetPostByLimitQuery(4)
    if(responseInfo.isLoading){
        return <div>loading...</div>
      }
    
      if(responseInfo.isError){
        return <div>an error occured info- {responseInfo.error.error}</div>
      }
    return (
        <div>
             <h1>Redux toolkit - RTK query (Get Limit data)</h1>
     {
       responseInfo?.data?.map((post)=>{
        return  <div key={post.id}>
           <h2>{post.id }. {post.title}</h2>
           <p>{post.body}</p>
           <hr/>
           </div>
       })
     }
        </div>
    )
}

export default Limit
