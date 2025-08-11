import React, { Component } from 'react'
import "./Faq.css"

export class Faq extends Component {
    render () {
        return (
            <div className='Faqblock'>
                <div className='block_faq' >   
                    <div className='Faq_header'>

                        <div className='Faq_header_main'>{">Возможности"}</div>
                        <div className='Faq_header_text'>FAQ (ЧаВо)</div>

                    </div>
                    <div className='Faq_content'>
                        <div className='faq_nav'>
                            <div className='faq_text_nav'>Desktop</div>
                            <div className='button_nav'>
                                <img className = "vector" src="../images/Vector.svg" alt='buttonnav'></img>
                                <img className = "qube" src='../images/qube.svg' alt='buttonnav'></img>
                                <img className = "x" src='../images/x.svg' alt='buttonnav'></img>
                            </div>
                            <div className='faq_cont'>
                                
                            </div>
                        </div>


                    </div>
                </div>


            </div>



)


}




}