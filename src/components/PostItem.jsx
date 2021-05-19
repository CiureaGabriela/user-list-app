import React from 'react'


function PostItem(props) {
    const {title,body} = props;
    return (
        <div className= "container ml-0" >
            <p>{title}</p>
            <p >{body}</p>
            
        </div>
    )
}

export default PostItem;
