import React, { useEffect, useState } from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({ username, password }) {

    const { data,error,loading,reFetchData } = useGithubUser(username);
    console.log(data);
    // useEffect(() => {
    //     getUser(username)
    // },[username,getUser])
  
  const handleBtnClick = () => {
    reFetchData()
  }
  return (
    <div>
      <button onClick={handleBtnClick}>Get User</button>
          {data ? <h1>The name is : {data.name}</h1>:<h1>Add user</h1>}
    </div>
  )
}
