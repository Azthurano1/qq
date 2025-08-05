import React, { Component } from 'react'
import "./Hero.css"
export class Hero extends Component {
  render() {
    return (
    <div className='sys'>   
        <div className='headerblock'>
        <div className='header'> {">О системе"}</div>
        <div className='header_text'>Система управления</div>
        </div>
        <div className="sysblock">
            <div className='sys_nav'>
                <div className='text_nav'>C:\Users\SunTimer\Desktop</div>
                <div className='button_nav'>
                    <img className = "vector" src="../images/Vector.svg" alt='buttonnav'></img>
                    <img className = "qube" src='../images/qube.svg' alt='buttonnav'></img>
                    <img className = "x" src='../images/x.svg' alt='buttonnav'></img>
                </div>
            </div>
            <div className='sysback'>
              {/* <img className='imgsysback' src="../sysback.svg" alt='imgsysback'></img> */}
              <div className='blockcont'>
                <div className='promo'>
                  <div className='promo_search'>
                    <div className='promo_text'>https://promo.png</div>
                    <div className='button_nav'>
                      <img className = "vector" src="../images/Vector.svg" alt='buttonnav'></img>
                      <img className = "qube" src='../images/qube.svg' alt='buttonnav'></img>
                      <img className = "x" src='../images/x.svg' alt='buttonnav'></img>
                    </div>
                  </div>
                  <div className='content_promo'>
                      <div className='content_bc'>
                      <div className='content_block_promo1'>
                        <div className='content_text1'>
                          <div className='H1content_promo1'>Lite</div>
                          <div className='p1content_promo1'>Базовый минимум</div>
                          <div className='strelka1'>{'>'}</div>
                        </div>
                      </div>
                      <div className='content_block_promo1'>
                        <div className='content_text1'>
                          <div className='H1content_promo1'>4.0</div>
                          <div className='p1content_promo1'>Базовый минимум</div>
                          <div className='strelka1'>{'>'}</div>
                        </div>
                      </div>
                      <div className='content_block_promo1'>
                        <div className='content_text1'>
                          <div className='H1content_promo1'>5.0</div>
                          <div className='p1content_promo1'>Роскошный минимум</div>
                          <div className='strelka1'>{'>'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='img1_content'>
                  <div className='nav_img1'>
                    <div className='img1_text'>https://img.png</div>
                      <div className='button_nav'>
                        <img className = "vector" src="../images/Vector.svg" alt='buttonnav'></img>
                        <img className = "qube" src='../images/qube.svg' alt='buttonnav'></img>
                        <img className = "x" src='../images/x.svg' alt='buttonnav'></img>
                    </div>
                  </div>
                </div>
                <div classname='promo2'>
                  <div classname ='promo_search2'>
                    <div className='promo_text2'>https://promo.png</div>
                      <div className='button_nav'>
                        <img className='vector' src="../images/Vector.svg" alt='buttonnav'></img>
                        <img className='qube' src="../images/qube.svg" alt='buttonnav'></img>
                        <img className='x'src="../images/x.svg" alt='buttonnav'></img>
                      </div>
                  </div>
                </div>
            </div>
            </div>
            
        </div>
    </div>
    )
    
  }
}

export default Hero




    
