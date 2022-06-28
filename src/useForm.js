import React, { useState } from 'react'

export default function useForm() {
    const [formData, setFormData] = useState({
        username: '',
        password:''
    })

    const handleInputChange = (e) => {
        e.preventDefault()
        const {name,value}=e.target
        setFormData((state)=>({...state,[name]:value}))
    } 
  return (
      {
          data:formData,
          updateInput:handleInputChange
    }
  )
}
