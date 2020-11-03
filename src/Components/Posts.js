import React from "react";
import './Posts.css'
import img1 from '../images/Event1.JPG';
const Posts = ( {posts, loading} ) => {

    if(loading){
        return <h2>Loading...</h2>;
    }
    
    return (
        <div className="postContainer">
            {posts.map(post => (
                <div className={post.id} key={post.id}>
                    <p>{post.title}</p>
                </div>
            ))}
        </div>
    );
  };

 
export default Posts;
{/* <ul className="list-group mg-4 mb-3">
            {posts.map(post => (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            ))}
        </ul> */}