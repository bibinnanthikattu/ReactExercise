import React, { useEffect, useState } from 'react'

export default function GithubUser({ username, password }) {
    const [data, setData] = useState(null)
    const [error,setError]= useState(null)
console.log(username);

    async function GithubUser(username) {
        try {
            
            let response = await fetch(`https://api.github.com/users/${username}`);
            let data = await response.json();
            // console.log(data);
            setData(data)
        } catch (error){
            setError(error);
            setData(null)
        }
    }
    useEffect(() => {
        GithubUser(username)
    },[username])
  return (
      <div>
          {data && <h1>The name is : {data.name}</h1>}
    </div>
  )
}
