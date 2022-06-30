import React, { useState } from 'react'
import GithubUser from './GithubUser';
import { Link,Outlet
} from 'react-router-dom';
 

export default function GithubUserList() {
    const [user, setUser] = useState();
    const [userList,setUserList]=useState([])

    const getUser = (e) => setUser(e.target.value)
    // console.log(user);

    const addUser = () => {
        setUserList((state)=>[...state,user])
    }
    // console.log(userList);
  return (
      <div>
          <input onChange={getUser} value={user} />
          <button onClick={addUser}>Add</button>
          {userList.map((user, index) => (<Link  to={user}> {user}</Link>))}
            <Outlet/>
    </div>
  )
}
