import React, { useEffect } from "react";
import {useParams} from "react-router-dom";

export default function Post () {
    let { post_uid } = useParams();
    
    useEffect(() => {
        // here we are going to fetch the post data
        
    }, []);

    return (
        <>
            <h1>
                Here we are going to show Post with uid - {post_uid}
            </h1>
        </>
    )
}