 import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';

const Home = props =>{

    const gallaryHeight = 450;
    const gallaryStyle = {
      height :gallaryHeight +'px',
      overflow:'hiden'
    }

    return(
    <div>
      <Card>
        <div className="gallaryPost" style={gallaryStyle}>
        <section style={{width:'70%'}}>
          <div>
            <img scr={"https://images.squarespace-cdn.com/content/v1/57bccd1f3e00bea28d5766aa/1508967280636-MG4U0E41Q77RHSCB74NJ/ke17ZwdGBToddI8pDm48kO7Rg1Gpu728H4UqxUIfecJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICj5SdZHY9KUswDgTH3eH8sP5PrkY15Dr7CE2CPSRiTEKMshLAGzx4R3EDFOm1kBS/IMG_0556+2.jpg"}alt=""/>
          </div>
        </section>
        <section style={{width:'70%'}}>
          less popupar Post
        </section>
        </div>

      </Card>
    </div>

          
    );
}
export default Home;