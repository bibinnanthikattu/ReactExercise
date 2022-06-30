import React,{useEffect,useState} from 'react'
import useSWR from 'swr'


const fetcher = url => fetch(url).then(response => response.json())

export default function useGithubUser(username) {
    
    const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)
    
    const reFetchData = () => {
        mutate()
    }
    
    // const [data, setData] = useState(null)
    // const [error, setError] = useState(null)
    // const [loading,setLoading]=useState(false)
    // async function GithubUser(username) {

    //     setLoading(true)
    //     try {  
    //         let response = await fetch(`https://api.github.com/users/${username}`);
    //         let data = await response.json();
    //         // console.log(data);
    //         setData(data)
    //     } catch (error){
    //         setError(error);
    //         setData(null)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    // useEffect(() => {
    //     GithubUser(username)
    // },[username])
    return (
        {
            data,
            error: error,
            loading: !data && !error,
            reFetchData:reFetchData
           
        }
  )
}
