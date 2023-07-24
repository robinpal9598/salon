import React from 'react'

function BlogsSchema(props) {
    return (
        <div>
            <div className="card border-1 border-solid bg-pink-100 mx-2 my-2">
                <div className="card-body">
                    <h5 className="card-title text-2xl">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-xs text-muted">{props.tag}</h6>
                    <p className="card-text">{props.content}</p>
                </div>
               
            </div>
            
        </div>
    )
}

export default BlogsSchema