import React,{useEffect,useState} from 'react'

export default function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [error,setError]= useState(null)


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
        {
           data 
        }
  )
}
