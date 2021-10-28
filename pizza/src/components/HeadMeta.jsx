import React from 'react'
import {Helmet} from "react-helmet"
function HeadMeta({title,description=''}) {
    return (
        <>
            <Helmet>
                <title>Pizza Hut | {title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}

export default HeadMeta
