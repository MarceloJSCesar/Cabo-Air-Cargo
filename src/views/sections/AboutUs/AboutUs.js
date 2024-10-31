import React from 'react'
import './styles.css'

export default function AboutUs() {

    
  
    return (
    <div className="AboutUs-section">

                <div className="AboutUs-main">
                    <h1 className="AboutUs-title" aria-label="About Us">ABOUT US</h1>
                    <h2 className="AboutUs-subtitle" aria-label="Our vision, values and Goals">
                        Our <span className="AboutUs-span1">vision</span>, <span className="AboutUs-span2">values</span> and <span className="AboutUs-span1">Goals</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Eros et aliquam amet aliquet vivamus convallis elit pellentesque aliquet. Gravid.</p>
                </div>

            <div className="AboutUs-main-desktop">
                <h1 className="AboutUs-title">
                    ABOUT US
                </h1>
                <div className="AboutUs-content">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Eros et ali.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur. Eros et aliquam amet aliquet vivamus convallis elit pellentesque aliquet. Gravida egestas porttitor sem tincidunt venenatis. Congue eget vulputate.
                        </p>

                    </div>
                    
                    <div>
                        <h2 className="AboutUs-subtitle" aria-label="Our vision, values and Goals">
                        Our <span className="AboutUs-span1">vision</span>, <span className="AboutUs-span2">values</span> and <span className="AboutUs-span1">Goals</span>
                        </h2>   
                        <p>Lorem ipsum dolor sit amet consectetur. Eros et aliquam amet aliquet vivamus convallis elit pellentesque aliquet. Gravida egestas porttitor sem tincidunt venenatis. Congue eget vulputate.</p>


                    </div>


                </div>








            </div>
        
       
    </div>
  )
}
