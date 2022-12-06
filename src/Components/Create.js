import React from 'react'
import { useState } from 'react'

const Create = (props) => {
    // const {gallery,setgallery,title, setTitle, author, setAuthor, url, seturl} = props
    const {gallery, setgallery} = props;

    let [title, setTitle] = useState("")
    let [author, setAuthor] = useState("")
    let [url, seturl] = useState("")

    const Submithandler = ((e)=>{
        e.preventDefault()
        if(!title.trim() || !author.trim() || !url.trim()){
          alert("Please Submit All Fields")
          return
        }
        
        const newData = {title, author, url}
        setgallery([...gallery, newData])
        setTitle("")
        setAuthor("")
        seturl("")
      })
  return (
    <div>
      <form onSubmit={Submithandler} className="container text-center mt-5 w-50" >
      <h2 className="mb-3">Add gallery</h2>
      <input  className="form-control mb-3"  type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)} value={title} />
      <input className="form-control mb-3"  type="text" placeholder="Author" onChange={(e)=> setAuthor(e.target.value)} value={author} />
      <input className="form-control mb-3" type="text" placeholder="Image Url" onChange={(e)=> seturl(e.target.value)} value={url} />
      <button className="fs-6 btn btn-success w-25">Add</button>
    </form>
    </div>
  )
}

export default Create
