import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
    <div className="sidebarContainer" style={{
      width: props.width
  }}>
        <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
            <div className="cardHeader">
                <span>About Us</span>
            </div>
            <div className="profileImageContainer">
        <img src="https://3krwor3xbp5c45ck4n3d5u2x-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/flodscoprimg-3.jpg"alt=""/>
      </div>
      <div className="cardBody">
        <p className="personalBio">Індивідуальний комплект Deluxe (DIK) розроблений, щоб дозволити будь-якому цікавому досліднику здійснити експерименти з мікроскопією будь-де в будь-який час. Цей комплект включає один Foldscope (140x, мікроскоп з роздільною здатністю 2 дюйма) у портативному та міцному металевому корпусі, що включає безліч інструментів для збору зразків, обробки зразків, підготовки слайдів та безпосереднього збору даних на будь-який мобільний телефон - все це можливо під час роботи в польових налаштуваннях! Вміст індивідуального комплекту Deluxe: 1 розгорнутий диспетчер, 1 інструкційний лист 2 об'єктиви 140X (одна додаткова лінза) 4 магнітні муфти (для кріплення мобільного телефону та світлодіода / лупи до Foldscope) поле,</p>
      </div>
     </Card>

     <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
      <div className="cardHeader">
        <span>Social Network</span>
     </div>
     </Card>

     <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
     <div className="cardHeader">
        <span>Recent Post</span>
      </div> 

      <div className="recentPost">

        {
           posts.map(post => {
            return (
                <NavLink key={post.id} to={`/post/${post.slug}`}>
                    <div className="recentPost">
                        <h3>{post.blogTitle}</h3>
                        <span>{post.postedOn}</span>
                    </div>
                </NavLink>
              

              

            );
          })
        }
       </div>

     </Card>
   </div>
  
   )

 }

export default Sidebar