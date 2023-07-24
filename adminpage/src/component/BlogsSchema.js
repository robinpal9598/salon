import React from 'react'
import {useState} from 'react'
function BlogsSchema(props) {
    const [del, setDel] = useState([]);
    const handleDelete = async(e) => {
       
        let result = await fetch(`http://localhost:4000/deleteNote/${props.id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                
            },
        });
        result = await result.json();
        setDel(result);
         props.setFlag(prop => !prop);
    }
    return (
        <div>
            <div className="card border-1 border-solid bg-pink-100 mx-2 my-2">
                <div className="card-body">
                    <h5 className="card-title text-2xl">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-xs text-muted">{props.tag}</h6>
                    <p className="card-text">{props.content}</p>
                </div>
                <button className='border-solid border-1 bg-pink-800 rounded-2xl w-32 hover:bg-pink-700' onClick={() => handleDelete((props.id))}>Delete Blog</button>

            </div>

        </div>
    )
}

export default BlogsSchema