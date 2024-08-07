import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    let[query,setquery]=useSearchParams()

  return (
    <div>
        <button onClick={()=>setquery({sort:"LTH"})}>LTH</button>
        <button onClick={()=>setquery({sort:"HTL"})}>HTL</button>
        <button onClick={()=>setquery({category:"electronics"})}>Electronics</button>
        <button onClick={()=>setquery({category:"jewelery"})}>Jwellery</button>
        <button onClick={()=>setquery('')}>All</button>
    </div>
  )
}

export default Filter