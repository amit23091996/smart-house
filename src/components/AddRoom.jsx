import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import "./style.css";

export default function AddRoom(props) {
  const nav = useNavigate();
const [roomName,setRoomName] = useState (""); //roomname= aaa
const [roomColor,setRoomColor] = useState (""); //roomcolor=red
const [roomType,setRoomType] = useState("");
const checkValid = ()=>{
  if (roomName.length < 1 || roomType=="" || roomName.length > 6) // אם הכוונה היא לא לתת למשתמש להקליד יותר מ6 אותיות, איך?
  {
  alert ("error");
  nav("/")
  }
  else
  {
    props.add(roomName,roomColor,roomType);
  nav("/");
  }
}
  return (
    <div>
      <div id='add'>
      <select className='add1' onChange={(e)=>{
        setRoomType(e.target.value)
      }}>
        <option>add new room</option>
        <option>bathroom</option>
        <option>bedroom</option>
        <option>kitchen</option>
      </select> <br/> <br/>
        <input className='add1' onChange={(e)=>{setRoomName(e.target.value)}} type="text" placeholder='write your room name'/> <br/> <br/>
        <input className='add1' onChange={(e)=>{setRoomColor(e.target.value)}} type="text" placeholder='write your room color'/> <br/> <br/>
        <button id='buttonPlus' onClick={()=>{checkValid()}}><img style={{height:"100px",width:"100px"}}
         src='https://thumbs.dreamstime.com/b/%E8%93%9D%E8%89%B2-d%E6%8C%89%E9%92%AE-%E5%8A%A0%E5%8F%B7-132219376.jpg'/></button>
        </div>
    </div>
  )
}
