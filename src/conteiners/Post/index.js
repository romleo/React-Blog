import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import Sidebare from '../../components/Sidebar';

/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
    <section className="conteiner">
      <BlogPost/>
      <Sidebare/>
    </section>
   )

 }

export default Post