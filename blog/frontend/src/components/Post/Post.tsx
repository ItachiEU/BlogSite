import React from "react";
import {useParams} from "react-router-dom";

export default function Post () {
    let {post_uid} = useParams();

    return (
        <>
            <h1>
                Here we are going to show Post with uid - {post_uid}
            </h1>
        </>
    )
}