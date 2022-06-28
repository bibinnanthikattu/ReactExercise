import React from 'react'
import useForm from './useForm'

export default function HookForm() {
  const { data, updateInput } = useForm()
  console.log(data);
  return (
      <form >
          <input name='username' value={data.username} onChange={updateInput} />
          <input type='password' name='password' value={data.password} onChange={updateInput} />
      <button>Submit</button>
    </form>
  )
}
