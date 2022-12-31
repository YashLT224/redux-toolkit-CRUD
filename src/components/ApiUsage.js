import React from 'react'
import Get from './Get'
import Getid from './Getid'
import Limit from './limit'
import Delete from './Delete'
import POST from './post'
import Update from './Update'
const ApiUsage = () => {
    return (
        <div>
            <Update/>
            <POST/>
            <Get/>
            <Getid/>
            <Limit/>
            <Delete/>
        </div>
    )
}

export default ApiUsage
