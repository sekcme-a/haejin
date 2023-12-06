import { useEffect, useState } from "react"
import styles from "./Application.module.css"
import { storage } from "firebase/firebase"

const MultipleFilesSelect = ({list, setList, isSubmitting, setIsSubmitting, path}) => {

  const [prevFileList, setPrevFileList] = useState(list)
  const [fileList, setFileList] = useState([])

  useEffect(()=> {
    const handleSubmit = async () => {
      const uploadedFiles = await uploadFiles()
      setList([...uploadedFiles,...prevFileList])
      setIsSubmitting(false)
    }
    //isSubmitting 을 true로 바꾸면 업로드 시작.
    if(isSubmitting){
      if(fileList.length+prevFileList.length===0){
        alert("이력서 및 자기소개서를 제출해주세요.")
        setIsSubmitting(false)
      }
      else
        handleSubmit()
    }


  },[isSubmitting])


  const uploadFiles = async () => {
    let x;
    let filesURL="";
    return new Promise(async function (resolve, reject) {
      // fileList.forEach(async (file) => {
      //   if (file !== undefined) {
      //     x = await FileUpload("files", file.file, user.uid)
      //     filesURL = filesURL.concat( `${file.file.name}URLSTARTPOINT${x}URLENDPOINT`)
      //   }
      // })
      let files = []
      for (let i = 0; i < fileList.length; i++){
        if (fileList[i] !== undefined) {
          const fileRef = storage.ref().child(`${path}/${fileList[i].file.name}`)
          await fileRef.put(fileList[i].file)
          const url = await fileRef.getDownloadURL()
          files.push({url : url, name: fileList[i].file.name})
        }
      }
      resolve(files)
    })
  }


  const onFileChange = (e) => {
    if (e.target.files[0] !== undefined) {
      if (e) {
        setFileList([
          ...fileList,
          {
            file: e.target.files[0]
          }
        ])
      }
    }
  }

  const onFileListDeleteClick = (file) => {
    let FL = [...fileList]
    let i = 0;
    FL.forEach((item) => {
      if(item!==undefined)
        if (item.file.name === file)
          delete FL[i]
      i++
    })
    setFileList([...FL])
  }

  const onPrevFileDeleteClick = (index) => {
    const after = prevFileList.filter((_,i) => i!==index)
    setPrevFileList(after)
  }

  return(
    <div className={styles.file_container}>첨부파일 : <input type="file" name="selectedFile[]" onChange={onFileChange} />
      <div style={{marginTop:"10px"}} />
      {fileList && fileList.map((item, index) => {
        if (item !== undefined) {
          return (
            <><h4 key={index} className={styles.files}>{item.file.name}<h4 className={styles.fileDelete} onClick={() => { onFileListDeleteClick(item.file.name) }}>X</h4></h4><br/></>
          )
        }
      })}
      {prevFileList && prevFileList.map((item, index) => {
        return(
          <>
            <h4 key={index} className={styles.files}>{item.name}<h4 className={styles.fileDelete} onClick={() => { onPrevFileDeleteClick(index) }}>X</h4></h4><br/>
          </>
        )
      })}
    </div>

  )
}

export default MultipleFilesSelect