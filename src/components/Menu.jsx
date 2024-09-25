import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export default function Menu() {
  return (
    <div id='menuButtons'>
        <Link to={"/"}><button className="button type3">home page</button></Link>
        <Link to={"/addRoom"}><button className="button type3">add room</button></Link>
        <Link to={"/about"}><button className="button type3">about</button></Link>
        <Link to={"/contactUs"}><button className="button type3" >contact</button></Link>
    </div>
  )
}
