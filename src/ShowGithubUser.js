import React from 'react'
import { useParams } from 'react-router-dom'
import GithubUser from './GithubUser'

export default function ShowGithubUser() {
  const { username } = useParams()
  console.log(username);
  return (
      <div>
          <GithubUser username={username} />
    </div>
  )
}
