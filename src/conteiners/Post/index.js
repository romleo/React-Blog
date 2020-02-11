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
  console.log(props);
  return(
    <section className="conteiner">
      <BlogPost {...props}/>
      <Sidebare {...props}/>
    </section>
   )

 }

export default Post