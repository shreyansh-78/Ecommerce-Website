import React, { useState,useEffect } from 'react'
import axios from 'axios';
import bgImg from './img3.jpg';
import "./Add.css";
function Add() {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    axios.post("http://localhost:8000/add", {
      id: id,
      category: category,
      name: name,
      description: desc
    }).then((res) => console.log(res))

  }, [submit])
  return (
    <section className='form3'>
    <div className="add">
            <div className="col-1">
            <h2>Add Products</h2><br/>
                    <span>Only for admins!!</span><br/><br/>
            <form id='form' className='flex flex-col'>
              <p>Type ID:</p>
              <input type='text' onChange={(e) => setId(e.target.value)} placeholder='Type..' />
              <p>Type Category:</p>
              <input type='text' onChange={(e) => setCategory(e.target.value)} placeholder='Type..' />
              <p>Type Product Name:</p>
              <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Type..' />
              <p>Type Product Description:</p>
              <input type='text' onChange={(e) => setDesc(e.target.value)} placeholder='Type..' />
              <button type='submit' className='bn' onClick={() => setSubmit(!submit)}>Submit</button>
              </form>
            </div>
            <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
    </div>
    </section>
  )
}

export default Add
