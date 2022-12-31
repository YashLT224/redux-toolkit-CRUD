import React from 'react'
import {useDeletePostMutation} from '../services/post'
 
const Delete = () => {
    const [deletepostfunc,deletepostresult]=useDeletePostMutation();
    return (
        <div>
              <h1>Redux toolkit - RTK query (delete post )</h1>
           <button onClick={()=>{deletepostfunc(2)}}>Delete Post</button>
           <hr/>
            
    
        </div>
    )
}

export default Delete
