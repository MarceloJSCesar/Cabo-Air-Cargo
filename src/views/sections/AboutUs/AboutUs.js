import React from 'react'
import './styles.css'

export default function AboutUs() {

    
  
    return (
    <div className="AboutUs-section" id="about-us">

                <div className="AboutUs-main">
                    <h1 className="AboutUs-title" aria-label="About Us">ABOUT US</h1>
                    {/* <h2 className="AboutUs-subtitle" aria-label="Our vision, values and Goals">
                        Our <span className="AboutUs-span1">vision</span>, <span className="AboutUs-span2">values</span> and <span className="AboutUs-span1">Goals</span></h2> */}
                    <p>Cape Verde Businesses will now be able to keep high quality products in inventory by utilizing our super fast air cargo services.</p>
                </div>

            <div className="AboutUs-main-desktop">
                <h1 className="AboutUs-title">
                    ABOUT US
                </h1>
                <div className="AboutUs-content">
                    <div>

                        <p>
                            Additionally, our ultra competitive pricing will give every Cape Verdean access to e-Commerce products from United States, Europe, Africa, and South America and receive in Cape Verde in just 10 days or less. 
                        </p>

                    </div>
                    
                    <div>
                        {/* <h2 className="AboutUs-subtitle" aria-label="Our vision, values and Goals">
                        Our <span className="AboutUs-span1">vision</span>, <span className="AboutUs-span2">values</span> and <span className="AboutUs-span1">Goals</span>
                        </h2>    */}
                        
                        <p>
                            Cape Verde Businesses will now be able to keep high quality products in inventory by utilizing our super fast air cargo services.
                        </p>

                    </div>


                </div>








            </div>
        
       
    </div>
  )
}
