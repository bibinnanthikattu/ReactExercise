import React, { useEffect, useState } from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({ username, password }) {

    const { data,error,loading } = useGithubUser(username);
    console.log(data);
    // useEffect(() => {
    //     getUser(username)
    // },[username,getUser])
  return (
      <div>
          {data && <h1>The name is : {data.name}</h1>}
    </div>
  )
}
