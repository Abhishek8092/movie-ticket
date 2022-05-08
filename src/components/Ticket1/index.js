import React, { Component } from 'react'
import { EyeOutlined, BarcodeOutlined } from "@ant-design/icons";
import "../Ticket1/index.css"
 class index extends Component {
   
  render() {
    const s1=localStorage.getItem("seatStatus")
    const s2=localStorage.getItem("seatPrice")

    return (
        <div className="mainContainer">
        <div className="container" id="download">
          <div className="left">
            <div className="up">PVR Cinemas</div>
            <div className="down">
            
            </div>
          </div>
          <div className="right">
            <div className="up1">
              <EyeOutlined />
            </div>
            <div className="down1">
                <div>
               <h3>{s1.toString()}</h3> 
              <h1 >
                <BarcodeOutlined />
              </h1>
              <h4>RS:-{s2}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index;
  
