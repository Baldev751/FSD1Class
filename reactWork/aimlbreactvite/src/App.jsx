import React from 'react'
import Student from './Student'
import image from './assets/Thalapathy-Vijay.jpg'
import Image_manipulation from './image_manipulation'
import UseEffect from './useEffect'

function App() {
  const studentdata={
    college:"ABES Engineering College",
    pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
    name:"Baldev",
    roll:"27223",
    branch:"CSE AIML",
    section:"B"
  }

  // let a=20;
  // let mystyle={
  //   backgroundColor:'cyan',
  //   color:'red',
  //   border:'10px solid black',
  //   height :'100px',
    
  // }
  return (
    <>
    <div style={{marginLeft:"300px"}} >
      <Student data={studentdata} />
      {/* <Student
       pic = {<img src = {image} height = {100} width = { 100}/>}
       college="ABES Engineering College" name = "Baldev" branch = " CSE AIML" section="B" roll="58" />

       <Student
       pic = {<img src = {image} height = {100} width = { 100}/>}
        name = "Bhagat" branch = " CSE AIML" section="B" roll="8228" />
        <Student
       pic = {<img src = {image} height = {100} width = { 100}/>}
       college="ABES Engineering College" name = "Bhardwaj" branch = " CSE AIML" section="B" roll="89324" /> */}
    </div>
    <Image_manipulation />
    <UseEffect/>
    </>
  )
}

export default App