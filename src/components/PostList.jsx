import React from 'react'
import PostItem from './PostItem';


function PostList(props) {
    const {posts}=props;
    return (
        <div className="mx-5" >
            <h2 className="  d-flex justify-content-center mb-5" >Posts list</h2>
            { posts.map((post, index) => {
                return <PostItem
                    id={ post.id }
                    title ={post.title}
                    body={post.body}
                    key ={post.id}
                    
                />
            })}
        </div>
    )
}

export default PostList
