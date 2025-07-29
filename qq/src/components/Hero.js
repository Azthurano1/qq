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
              {/* <img className='imgsysback' src="../images/sysback.jpg" alt='imgsysback'></img> */}
            </div>
        </div>
    </div>
    )
    
  }
}

export default Hero




    
