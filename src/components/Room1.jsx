import React, { useState } from 'react'

export default function Room1(props) {
  const [bgColor,setBgColor] = useState("");
  const [deviceType,setDeviceType] = useState ("");
  const checkValid = ()=>
  {
    let flagD=true;
    if (props.current.roomDevices.length > 4 || 
       ((deviceType == "boiler") && (props.current.roomType !="bathroom"))) 
    {
    alert("error");
    flagD = false;
    changeFlag();
    }
    else if (deviceType == "stereo system") 
    {
    props.current.roomDevices.forEach((val)=>{
      if (val.type == "stereo system")
      {
        alert("error,there is already one stereo system!");
        flagD = false;
        changeFlag();
      }
         })
    }
    if (flag == true)
    {
      {props.add(deviceType,props.current)}
      changeFlag();
    }
  }
  const [flag,setFlag] = useState (false);
  const changeFlag = ()=>{
    if (flag == true)
    setFlag(false);
    else
    setFlag(true);
  }
  const ChooseProduct = ()=>{
    if (flag==true)
    {
      return <div>
        <select onChange={(e)=>{setDeviceType(e.target.value)}}>
          <option>choose product</option>
          <option>air conditioner</option>
          <option>boiler</option>
          <option>stereo system</option>
          <option>lamp</option>
        </select>
        <button onClick={()=>{checkValid()}}>add</button>
      </div>
    }
  }
  const changeState = (val)=>{
    props.change(val);
    setBgColor(!bgColor);  // ------ מה שאוהד שינה
     setTimeout(()=>{setBgColor(val.color)},2000);
  }
  // const ChangeState = (val)=>{
  //   props.change(val);
  //   useEffect(()=>{
  //     setBgColor(val);
  //   },[bgColor])
  // }
  const showDevices = ()=>{
    return  props.current.roomDevices.map((val)=>{
      return <button className='buttonsDevices' onClick={()=>{changeState(val)}} style={{backgroundColor:val.color}}>{val.type}</button>
    })
  } 
 
  return (
    <div>
      <div id='divInputs'>
        <p>room's name: {props.current.roomName}</p>
        <p>room's type: {props.current.roomType}</p> 
        </div>
        {showDevices()} <br/> <br/> 
        <button onClick={()=>{changeFlag()}}>add product</button>
        {ChooseProduct()}
    </div>
  )
}
