import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import Title from './components/Title';
import Room1 from './components/Room1';
import Menu from './components/Menu';
import About from './components/About';
import RoomButton from "./components/RoomButton"
import { Link } from 'react-router-dom';
import ContactUs from './components/ContactUs';

function App() {
  const [currentRoom,setCurrentRoom] = useState(0);
  const changeIndexRoom = (index)=>{
    setCurrentRoom(index);
  }
  const ShowRooms = ()=>{
    console.log(roomsArr);
   return roomsArr.map((val,index)=>{
      return <Link to={"/room1"}><button onClick={()=>{changeIndexRoom(index)}} className='roomButtons' style={{backgroundColor:val.roomColor, border:"0px"}}>{val.roomName}</button></Link>
    })
  }
  const [devicesArr,setDevicesArr] = useState([]);
  const addNewDevice = (type,current)=>{
    let device = new Device (type);
    setDevicesArr([...devicesArr,device]);
    current.roomDevices.push(device);
  }
const [roomsArr,setRoomsArr] = useState([]);
const addNewRoom = (roomName,roomColor,roomType)=>{
  let room = new Room(roomName,roomColor,roomType);
  setRoomsArr([...roomsArr,room]);
}
const change = (device)=>{
  device.changeButton();
}
  return (
    <div id='main' className="App">
      <Title/>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<HomePage roomsArr={roomsArr} show={ShowRooms}/>}/>
        <Route path='/addRoom' element={<AddRoom add={addNewRoom} roomsArr={roomsArr} />}/>
        <Route path='/Room1'element={<Room1 current={roomsArr[currentRoom]} arr={devicesArr} add={addNewDevice} change={change}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
class Room {
  roomDevices=[];
constructor (roomName,roomColor,roomType) {
  this.roomName = roomName;
  this.roomColor = roomColor;
  this.roomType = roomType;
}
}
class Device {
  on = false;
  color="red";
constructor (type) {
  this.type=type;
}
changeButton(){
  if (this.on == false)
    {
      this.on = true;
      this.color = "green";
    }
    else 
    {
      this.on = false;
      this.color = "red";
    }

  }
}
export default App;
