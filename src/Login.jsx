import React, { useState } from 'react'

export default function Login(props) {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember:false
  })
  
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;
      setData({ ...data,[name]: type === 'checkbox' ? checked : value })
    }


    return (
        <div>
            <input type="text" name='username' value={data.username} onChange={handleInput} />
            <input type="password" name='password' value={data.password} onChange={handleInput}/>
            <input type="checkbox" name='remember' checked={data.remember} onChange={handleInput}/>
            <button disabled={!data.username && !data.password  } onClick={() => props.func(data)}>Login</button>
      </div>
    )
  }

