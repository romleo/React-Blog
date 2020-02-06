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
          <span className="postedBy">posted onFebruary 06.2020 by"some author" Blogging Tips</span>
       </div>
      </Card>
    </div>
   )

 }

export default BlogPost 