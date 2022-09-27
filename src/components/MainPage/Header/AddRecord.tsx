import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/MainPage/Header.css'

function AddRecord() {
  return (
    <div>
        <Link className='recordLink' to={"/add"}>Add new record</Link>
    </div>
  )
}

export default AddRecord