import { CircularProgress } from "@mui/material"
import useData from "context/data"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import PageBanner from "src/public/PageBanner"
import PostCompo from "components/post/Post"

const Post = () => {
  const router = useRouter()
  const {id, type} = router.query
  const {postsList, fetch_post} = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [hasData, setHasData] = useState(false)

  const [typeText, setTypeText] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if(postsList[id]){
        console.log(postsList[id])
        setIsLoading(false)
        setHasData(true)
      } else {
        const result = await fetch_post(id)
        setHasData(result)
        setIsLoading(false)
      }
    }

    if(type==="announcement") setTypeText("공지사항")
    if(type, id)
      fetchData()
  },[type,id])


  return(
    <>
      <PageBanner title="공지사항" subtitle={type?.charAt(0).toUpperCase() + type?.slice(1)} homeText="공지사항" homeUrl="/article/announcement" />

      {isLoading ? 
        <div style={{width:"100vw", marginTop:"100px", marginBottom:"100px", display: "flex", justifyContent:"center"}}>
          <CircularProgress /> 
        </div>
        :
        <PostCompo data={postsList[id]} type={type} id={id}/>
      }
    </>
  )
}

export default Post