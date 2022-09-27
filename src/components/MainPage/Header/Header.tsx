import React from 'react'
import AddRecord from './AddRecord'
import logo from '../../../assets/logo.png'
import '../../../styles/MainPage/Header.css'


function Header() {
  return (
    <div className='bigContainer'>
        <div className='recordButton'>
          <AddRecord />
        </div>
        <div className='logo'>
          <img src={logo} alt=""/>
        </div>
        <span className='spanSearch'>Search app</span>
    </div>
  )
}

export default Header