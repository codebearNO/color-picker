import React from 'react'
import { useState } from 'react'

const ColorPicker = () => {

  const [color, setColor] = useState("#FFFFFF")

  const handleColorChange = (e) =>{
    setColor(e.target.value)
  }



  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
        <p>Selected color: {color}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" value={color} onChange={handleColorChange}/>
      <button onClick={() => document.body.style.backgroundColor = color}>Set background color</button>
    </div>
  )
}

export default ColorPicker