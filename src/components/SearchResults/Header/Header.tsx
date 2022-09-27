import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import '../../../styles/SearchResults/Header.css';

function Header() {
  const [query,setQuery] = useState<any>("")
  const location = useLocation()
  useEffect(()=>{
    setQuery(location.state)
    },[])

  return (
    <div>
      <div className='headerWrapper'>
        <div className='logoo'>
           <a href='/'><img src={logo} alt="alt" /></a> 
        </div>
        <div className='searchArea'>
            <input className='searchBoxx' placeholder={location.state} onChange={e =>setQuery(e.target.value)}/>
            <a href={`/search/query=${query}`} ><button className='scButton' type='button'>Search</button></a>
        </div>
        <div className='addButton'>
           <button className='recButton'><a href='/add' >Add new record</a></button>
        </div>
      </div>
    </div>
  )
}

export default Header