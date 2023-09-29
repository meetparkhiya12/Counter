// import { useState } from "react"
import React, {useState} from 'react'


function Counter() {

	const [counter, setCounter] = useState(1)

  return (
    <div className='container'>
		<h4>Qty : {counter}</h4>
		<button className='btn-c btn btn-success me-3 mt-3' onClick={() => setCounter(counter + 1)} > + </button>
		<button className='btn-c btn btn-danger mt-3' onClick={() => counter > 1 ? setCounter(counter - 1) : ""} >- </button>

    </div>
  )
}

export default Counter