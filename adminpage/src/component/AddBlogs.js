import React from 'react'
import { useState } from 'react'

function AddBlogs() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        const result =await fetch("http://localhost:4000/blog", {
                method: "post",
                body: JSON.stringify({ title,tag,content }),
                headers: {
                    'Content-Type': 'application/json',
                    
                },
            })
            const json = await result.json();
            console.log(json.errors);
       
    }

    return (
        <div>
            <form className='w-[90%] mx-auto' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='text-2xl'>Title</label>
                    <input type="text" className="form-control my-2" required onChange={(e) => setTitle(e.target.value)} value={title} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='text-2xl'>Content</label>
                    <textarea type="box" className="form-control my-2 h-32 overflow-auto" required onChange={(e) => setContent(e.target.value)} value={content} placeholder="Enter the main content"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='text-2xl'>Tag</label>
                    <input type="text" className="form-control my-2" required onChange={(e) => setTag(e.target.value)} value={tag} placeholder="Tag" />
                </div>
                <button type="submit"  className="bg-pink-900 border-1 border-solid rounded-xl px-2 text-white py-1 my-5 hover:bg-pink-400">Post Blog</button>
            </form>
        </div>
    )
}

export default AddBlogs