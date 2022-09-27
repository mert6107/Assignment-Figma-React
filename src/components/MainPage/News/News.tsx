import React from 'react'
import '../../../styles/MainPage/News.css'
import leftArrow from '../../../assets/leftArrow.png'
import rightArrow from '../../../assets/rightArrow.png'
import image from '../../../assets/Image.png'


function News() {
  return (
    <div className='newWrapper'>
       <div className='title'>
           <p>Top News</p>
       </div>
       <div className='newSlider'>
          <div className='leftArrow'>
              <img src={leftArrow} alt='alt'/>
          </div>
          <div className='sliderContent'>
              <div className='sliderBox'>
                <img src={image} alt="alt" />
                <p className='sliderTitle'>A Plan to Rebuild the Bus Terminal<br />
                   Everyone Loves to Hate 
                </p>
                <p className='sliderSub'>1h ago · by Troy Corlson</p>
              </div>
              <div className='sliderBox'>
                <img src={image} alt="alt" />
                <p className='sliderTitle'>A Plan to Rebuild the Bus Terminal<br />
                   Everyone Loves to Hate 
                </p>
                <p className='sliderSub'>1h ago · by Troy Corlson</p>
              </div>
              <div className='sliderBox'>
                <img src={image} alt="alt" />
                <p className='sliderTitle'>A Plan to Rebuild the Bus Terminal<br />
                   Everyone Loves to Hate 
                </p>
                <p className='sliderSub'>1h ago · by Troy Corlson</p>
              </div>
          </div>
          <div className='rightArrow'>
              <img src={rightArrow} alt='alt'/>
          </div>
       </div>
    </div>
  )
}

export default News