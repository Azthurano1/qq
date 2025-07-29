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
                    <img src="/src/images/Vector.svg" alt='button_nav'></img>
                    <img src='./images/qube.svg' alt='button_nav'></img>
                    <img src='./images/x.svg' alt='button_nav'></img>
                </div>
            </div>
        </div>
    </div>
    )
    
  }
}

export default Hero




    
