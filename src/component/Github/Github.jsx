import React, { useEffect, useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/manassingh30')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-gray-500 p-3 text-3xl text-white">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
        
    )
}

export default Github 

export const githubInfoloader =async () => {
    const response = await fetch('https://api.github.com/users/manassingh30')
    return response.json()
}