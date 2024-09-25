import React from 'react'
import { Link } from 'react-router-dom'
import RoomButton from './RoomButton'
import "./style.css";

export default function HomePage(props) {
  
  return (
    <div id='melel'>
      <div id="buttonDiv">{props.show()}</div>
      <p>hello ! and welcome to our smart home app!</p>
      <p>to add rooms click on the + button here </p> <br/>
        <Link to={"/addRoom"}><img style={{height:"100px",width:"100px"}}src="https://thumbs.dreamstime.com/b/%E8%93%9D%E8%89%B2-d%E6%8C%89%E9%92%AE-%E5%8A%A0%E5%8F%B7-132219376.jpg"/></Link>
    </div>
  )
}
