import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/MainPage/Search.css'
import searchIcon from '../../../assets/Vector.png'
import gpsIcon from '../../../assets/konum.png'
import {Data} from '../../DataList'

function Search() {
  const [query,setQuery] = useState<any>("")
  const [dataList,setData] = useState<any>()
  useEffect(()=>{
  setData(Data)
  },[])
  return (
    <div className='searchSection'>
        <div className='textArea'>
            <p className='findText'>Find in records</p>
        </div>
        <div className='searchArea'>
            <input  style={{ backgroundImage: `url(${searchIcon})`,backgroundPosition:15}} className='searchBox' type="text" onChange={e =>setQuery(e.target.value)}/>
            <button className='searchButton'><Link to={`/search/query=${query}`} state={query}>Search</Link></button>
        </div>
        {query !== "" ?
        <div className='searchResults'>
          <div className='resultWrapper'>

          { dataList  ? 
            dataList.filter((data:any)=>data[0].toLowerCase().includes(query)).slice(0,3).map((data:any,key:any)=>{
               return (
                <div style={{ backgroundImage: `url(${gpsIcon})`}} className='searchResult' key={key}>
                <div className='resultBar'>
                  <div className='resultWrap'> 
                    <span className='resultTitle'>{data[0]}</span>
                    <span className='resultSub'>{data[4]}</span>
                  </div>
                </div>
             </div>
               )
            })
          : 'Loading'}

         
           



          </div>
            
            <div className='showMore'>
              <Link className='showMoreButton' to={`/search/query=${query}`} state={query} >Show more...</Link>
            </div>  
        </div>
        : ""}
    </div>
  )
}

export default Search