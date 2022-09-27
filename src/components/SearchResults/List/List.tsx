import React, { useEffect, useState } from 'react'
import gpsIcon from '../../../assets/konum.png'
import Pagination from './Pagination'
import '../../../styles/SearchResults/List.css'
import { useLocation } from 'react-router-dom'
import order from '../../../assets/order.png'
import {Data} from '../../DataList'
   

function List() {
  const [query,setQuery] = useState<any>(null)
  const [dataList,setData] = useState<any>(Data)
  const [currentData,setCurrentData] = useState<any>(Data)
  const location = useLocation()

  const [openSort,setSort] = useState<any>(false)
  const [currentPage,setCurrentPage] = useState<any>(1)
  const [sort,setCurrentSort] = useState<any>(0)
  const [isASC,setASC] = useState<any>(true)
  

  useEffect(()=>{
    if(location.state === null){
      const test = location["pathname"].substring(14)
      setQuery(test)
    }
    if(location["pathname"].substring(14) === "null"){
      setQuery(null)
    }
    if(location.state !== null){
      setQuery(location.state)
    }
  },[location])

  useEffect(()=>{
    console.log(isASC,sort)
    if(query !== null){
      const smallData = dataList.filter((data:any)=>data[0].toLowerCase().includes(query))
      setCurrentData(smallData)
    }
    else{
      const bigData = dataList.filter((data:any)=>data[0].toLowerCase())
      setCurrentData(bigData)
    }
  },[currentData])

 
  const indexOfLastPost = currentPage * 6
  const indexOfFirstPost = indexOfLastPost - 6
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber)


  return (
    <div className='listWrapper'>
        <div className='leftList'>
         <div className='resultWrapper'>
         { dataList ?
            currentData.sort(isASC === true ? (a:any, b:any):any => a[sort] > b[sort] ? 1 : -1 : (a:any, b:any):any => a[sort] > b[sort] ? -1 : 1).slice(indexOfFirstPost,indexOfLastPost).map((data:any,key:any)=>{
               return (
                 <>
                <div style={{ backgroundImage: `url(${gpsIcon})`}} className='searchResult' key={key}>
                <div className='resultBar'>
                  <div className='resultWrapp'> 
                   <div className='cityInfo'>
                    <span className='resultTitlee'>{data[5]}</span>
                    <span className='resultSubb'>{data[4]}</span>
                   </div>
                   <div className='personalInfo'>
                     <span className='name'>{data[0]}</span>
                     <span className='date'>{data[3]}</span>
                   </div>
                  </div>
                </div>
             </div>
             <hr className='hrList'/>
             </>
               )
            })
          : 'loading' }
         
            
         

          </div>



          <div className='pagWrapper'>
            <Pagination paginate={paginate} totalSearch={currentData.length} currentPage={currentPage}/>
          </div>
        </div>
        <div className='rightList'>
        <div>
           <button onClick={()=>setSort(true)} className='orderButton' style={{ backgroundImage: `url(${order})`}}>Order By</button>
           {openSort === true ? 
           
           <div>
             <div className='sortArea'>
               <button className='sortButton' type='button' onClick={()=>{setCurrentSort(0);setASC(true)}}>Name ascending</button>
               <button className='sortButton' type='button' onClick={()=>{setCurrentSort(0);setASC(false)}}>Name descending</button>
               <button className='sortButton' type='button' onClick={()=>{setCurrentSort(3);setASC(true)}}>Year ascending</button>
               <button className='sortButton' type='button' onClick={()=>{setCurrentSort(3);setASC(false)}}>Year descending</button>

             </div>
             
       
           </div>
          
          : ''}
         </div> 
        </div>
    </div>
  )
}

export default List