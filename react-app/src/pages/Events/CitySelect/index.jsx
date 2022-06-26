import React from 'react'
import {Wrapper} from './style'
import {Link} from 'react-router-dom'

export default function CitySelect({cityName=''}) {
  return (
    <Wrapper>
      <Link
        className="citygps"
        to="/cities"
      >          
        <span>{cityName?cityName:'城市'}
        <i className="iconfont icon-xiangxia1"></i> 
        </span>
                 
      </Link>
    </Wrapper>
  )
}
