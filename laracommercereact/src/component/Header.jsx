import React from 'react'
import {useSelector} from 'react-redux'
function Header() {
    const auth=useSelector(state => state.auth)
    console.log(auth)
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

export default React.memo(Header)
