import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singlepage = () => {
    let {id}=useParams()
    // console.log(id);
    let[product,setproduct]=useState({})

    const getsingleproduct= async ()=>{
        let res=await axios.get(`https://fakestoreapi.com/products/${id}`)
        setproduct(res.data)
    }
    useEffect(()=>{
        getsingleproduct(id)
    },[])
  return (
    <div className='parent-box'>
    <div className="Box">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <h3>{product.price}</h3>
    </div>
    </div>
  )
}

export default Singlepage