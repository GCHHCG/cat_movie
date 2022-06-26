import React from 'react'
import { Wrapper } from './style'


export default function CardC() {
  return (
    <Wrapper>
        <div className="card">
          <div className='card-title'>
            <img src="./src/assets/images/icon.jpg" alt="123"/>
            <p>电影/影院</p>
          </div>
          <div  className='card-title'>
            <img src="./src/assets/images/icon1.jpg" alt="12"/>
            <p>演出/玩乐</p>
          </div>
          <div  className='card-title'>
            <img src="./src/assets/images/icon2.jpg" alt="1"/>
            <p>放映厅</p>
          </div>
          <div  className='card-title'>
            <img src="./src/assets/images/icon3.jpg" alt="2"/>
            <p>赛事</p>
          </div>
          <div className='card-content'>
          <img src="./src/assets/images/c1.jpg" alt="" />
          <img src="./src/assets/images/c2.jpg" alt="" />
          <img src="./src/assets/images/c3.jpg" alt="" />
          <img src="./src/assets/images/c4.jpg" alt="" />
          </div>
        </div>
    </Wrapper>
  )
}
