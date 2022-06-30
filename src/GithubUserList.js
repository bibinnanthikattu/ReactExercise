import React, { useState } from 'react'
import GithubUser from './GithubUser';

export default function GithubUserList() {
    const [user, setUser] = useState();
    const [userList,setUserList]=useState([])

    const getUser = (e) => setUser(e.target.value)
    console.log(user);

    const addUser = () => {
        setUserList((state)=>[...state,user])
    }
    console.log(userList);
  return (
      <div>
          <input onChange={getUser} value={user} />
          <button onClick={addUser}>Add</button>
          {userList.map((user, index) => (<GithubUser key={index + user} username={user} password={1234} />))}
    </div>
  )
}
