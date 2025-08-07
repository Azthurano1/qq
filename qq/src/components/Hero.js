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
                  <div className='img1_cont'>
                    <img className='img1_ct' src='../images/Content.jpg' alt='backgroundimg1'></img>
                  </div>
                </div>

                <div className='img2_content'>
                  <div className='nav_img2'>
                    <div className='img2_text'>https://img.png</div>
                    <div className='button_nav'>
                      <img className='vector' src='../images/Vector.svg' alt='buttonnav'></img>
                      <img className='qube' src='../images/qube.svg' alt='buttonnav'></img>
                      <img className='x' src='../images/x.svg' alt='buttonnav'></img>
                    </div>
                  </div>
                  <div className='img_count2'>
                    <img className='img2_ct' src='images/img2.png' alt='backgroundimg2'></img>
                  </div>

                </div>
                <div className='img3_content'>
                  <div className='nav_img3'>
                    <div className='img3_text'>https://img.png</div>
                    <div className='button_nav'>
                      <img className='vector' src='../images/Vector.svg' alt='buttonnav'></img>
                      <img className='qube' src='../images/qube.svg' alt='buttonnav'></img>
                      <img className='x' src='../images/x.svg' alt='buttonnav'></img>
                    </div>
                  </div>
                  <div className='img_count3'>
                    <img className='img3_ct' src='../images/img3.svg' alt='backgroundimg3'></img>
                  </div>
                </div>
                
                <div className='functions'>
                  <div className='nav_func'>
                    <div className='func_text'>https://functions.txt</div>
                    <div className='button_nav'>
                      <img className='vector' src='../images/Vector.svg' alt='buttonnav'></img>
                      <img className='qube' src='../images/qube.svg' alt='buttonnav'></img>
                      <img className='x' src='../images/x.svg' alt='buttonnav'></img>
                    </div>
                  </div>
                  <div className='func_count'>
                    <div className='content_func'>
                      <div className='content_block_func1'>
                        <div className='func1_1text'>База данных</div>
                        <div className='func1_2text'>Microsoft SQL Server</div>
                        <div className='plus'>
                          <img src='../images/Page-1.svg'  width={12.6} height={12} />
                        </div>
                      </div>
                    </div>
                    <div className='content_func'>
                      <div className='content_block_func2'>
                        <div className='func1_1text'>База данных</div>
                        <div className='func1_2text'>Microsoft SQL Server</div>
                        <div className='plus'></div>
                      </div>
                    </div>
                    <div className='content_func'>
                      <div className='content_block_func3'></div>
                    </div>
                    
                  </div>
                </div>

                <div className='descriptions'>
                  <div className='nav_desc'>
                    <div className='desc_text'>https://descriptions.txt</div>
                    <div className='button_nav'>
                      <img className='vector' src='../images/Vector.svg' alt='buttonnav'></img>
                      <img className='qube' src='../images/qube.svg' alt='buttonnav'></img>
                      <img className='x' src='../images/x.svg' alt='buttonnav'></img>
                    </div>
                  </div>
                  <div className='desc_content'>
                    <div className='desc_ct'>SunTimer — современная система управления студиями загара и салонами красоты, объединяющая управление оборудованием, автоматизацию продаж и учёт всех операций в едином решении.</div>
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




    
