import React, {useState, useEffect} from 'react'
import { Wrapper } from './style'
import './style.css'
import Banners from './Banners'
import CardC from './CardC'
import { Tabs, Card} from 'antd-mobile'
import {RightOutline } from 'antd-mobile-icons'
// import {} from './style'

export default function Home() {
    return (
        <Wrapper>
            <header>
                <span>
                    <img src='./src/assets/images/logo.jpg'/>
                </span>
                <span className='title-h'>南昌</span>
                <span> <i className="fa fa-sort-desc"></i> </span>
                <input className="search" type="search" maxLength="32" 
                 placeholder="找影视剧、影人、影院" autoComplete="off"></input>
            </header>
                <Tabs className='tabar'
                activeLineMode='fixed'
                style={{
                  '--fixed-active-line-width': '20px',
                  '--active-line-color':'#fff',
                  '--active-title-color':'#fff'
                }}>
                <Tabs.Tab title='推荐' key='m1'>
                   
                </Tabs.Tab>
                <Tabs.Tab title='人生大事' key='m2'>
                     
                </Tabs.Tab>
                <Tabs.Tab title='预告片' key='m3'>
                    
                </Tabs.Tab>
                <Tabs.Tab title='热片解读' key='m4'>
                    
                </Tabs.Tab>
                </Tabs>
                <Banners/>
                <CardC/>
                <Card 
                    className='card-body'
                    title={
                    <div>
                        <span className='title'>
                        正在热映
                        </span>
                        <span className='desc'>全部53部</span>
                    </div>
                    }
                
                    extra={<RightOutline />}
                    style={{ borderRadius: '16px' }}
                >
                    <div className='content'>卡片内容</div>
                    <div>
                    </div>
        </Card>
        </Wrapper>
    )
}