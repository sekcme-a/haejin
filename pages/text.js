import useData from "context/data"
import useUserData from "context/userData"
import { useEffect } from "react"

import { useAnimation } from "framer-motion"

const Test = () => {
  const {user } = useUserData()
  const {data, fetch_data} = useData()
  useEffect(()=>{
    if(!data.housing.fetched) fetch_data("housing")
  },[])
  
  useEffect(() => {
    if(data?.housing?.fetched){
      console.log({...data.housing
      })
    }
  },[data?.housing])
  


  return(
    <>
    
    
    </>
  )
}

export default Test