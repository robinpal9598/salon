import React from 'react'
import { useState, useEffect } from 'react'
import BlogsSchema from './BlogsSchema';
function Offers() {
  const [blog, setBlog] = useState([]);
  const getBlogs = async () => {
    let result = await fetch('http://localhost:4000/fetchBlogs', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',

      }
    })
    result = await result.json();
    setBlog(result);
    console.log(result)
  }
  useEffect(() => {
    getBlogs();
  }, [])


  return (
    <div className='data-modal-target="modalId"'>
      <div className="top">
        <div className="heading text-2xl flex justify-center">Beauty Hacks</div>
        {
          blog.length > 0 ?
            blog.map((item) =>
              <>
                <BlogsSchema key={item._id} title={item.title} tag={item.tag} content={item.content} />
              </>
            ) :
            <>no blogs
            </>
        }
      </div>
      
    </div>
  )
}

export default Offers