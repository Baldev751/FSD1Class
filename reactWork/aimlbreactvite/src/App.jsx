import React from 'react'

function App() {

  let a=20;
  let mystyle={
    backgroundColor:'cyan',
    color:'red',
    border:'10px solid black',
    height :'100px'
    :'20px'
  }
  return (
    <div style={{color:'red'}}>
      <h2>App</h2>
      <div style={mystyle}>{a}</div>
      </div>
  )
}

export default App