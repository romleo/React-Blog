import React from 'react';
import './style.css'; 
import Card from '../UI/Card';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    <div className="blogPostConteiner">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Post about FoldScope here</h1>
          <span className="postedBy">posted on February 06.2020 by"some author" Blogging Tips</span>
       </div>
        <div className="postImageConteiner">
          <img src={require('../../blogPostImages/foldScopething.jpeg')} alt="Post Image"/>

          <div className="postContent">
            <h3>Post Title</h3>
            <p>lorem ins</p>

          </div>


        </div>


      </Card>
    </div>
   )

 }

export default BlogPost 