import React from 'react'
import tesoLogo from '../../assets/logo.png'
import returnArrow from '../../assets/returnArrow.png'
import '../../styles/AddLink/Header.css'


function Header() {
  return (
    <div className='bigWrapper'>
       <div className='linkLogo'>
            <img src={tesoLogo} alt="alt" />
       </div>
       <div className='returnList'>
           <button className='returnButton' style={{ backgroundImage: `url(${returnArrow})`}}><a href="/search">Return to List Page</a></button>
       </div>
    </div>
  )
}

export default Header