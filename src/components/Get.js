import React from 'react'
import {useGetAllPostQuery} from '../services/post'

const Get = () => {
    const responseInfo=useGetAllPostQuery()
    if(responseInfo.isLoading){
        return <div>loading...</div>
      }
    
      if(responseInfo.isError){
        return <div>an error occured info- {responseInfo.error.error}</div>
      }
    return (
        <div>
             <h1>Redux toolkit - RTK query (Get All data)</h1>
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

export default Get
