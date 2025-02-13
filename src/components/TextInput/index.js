import React from 'react'
import './index.css'

function TextInput({onTextInput}) {
  const handleChange = e => {
    onTextInput(e.target.value)
  }

  return (
    <div>
      <label htmlFor="text-input">Enter Text for Speech</label>
      <br />
      <br />
      <textarea
        id="text-input"
        rows="4"
        placeholder="Type here..."
        onChange={handleChange}
      ></textarea>
      <br />
    </div>
  )
}

export default TextInput
