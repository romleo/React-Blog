import React, { useEffect, useState } from 'react';
import './style.css'; 
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  const [post,setPost]=useState({});

    useEffect(()=>{
     const postId = props.match.params.postId;
     const post = blogPost.data.find(post=>post.id==postId);
     setPost(post);

  },post);

  return(
    <div className="blogPostConteiner">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">posted on February 06.2020 by"some author" Blogging Tips</span>
       </div>
        <div className="postImageConteiner">
          <img src={require('../../blogPostImages/foldScopething.jpeg')} alt="Post Image"/>

          <div className="postContent">
            <h3>Post Title</h3>
            <p>lorem insum
              
            </p>

          </div>


        </div>


      </Card>
    </div>
   )

 }

export default BlogPost 