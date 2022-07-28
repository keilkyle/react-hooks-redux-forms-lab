import {React, useState} from "react";

function BandInput({onBandSubmit}) {
  
  const [name, setName] = useState("")

  function submitHandler(e){
    e.preventDefault()
    onBandSubmit(name)
  }

  function handleChange(e){
    setName(e.target.value)
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name your band:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChange}/>
      <button type="submit">add band</button>
    </form>
    </div>


  )
}

export default BandInput;
