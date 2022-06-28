import React, { useEffect, useState } from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({ username, password }) {

    const { data } = useGithubUser(username);
    console.log(data);
  return (
      <div>
          {data && <h1>The name is : {data.name}</h1>}
    </div>
  )
}
