import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function roommButton(props) {
  return (
    <div>
      <Link to={"/room1"}><button onClick={()=>{props.change(props.index)}} className='roomButtons' style={{backgroundColor:props.color, border:"0px"}}>{props.name}</button></Link>
    </div>
  )
}
