import React, {useState, useEffect} from 'react'
import CitySelect from './CitySelect'
import { useSearchParams } from 'react-router-dom'
import {fetchTodos} from '@/utils/api'
import 'antd/dist/antd.css' // UI 框架的样式
import {Spin, Tabs} from 'antd'
import { Wrapper } from './style'
import TodoList from '@/components/Todos/TodoList'
import TodoInput from '@/components/Todos/TodoInput'
import No from '@/assets/images/no.png'
export default function Events() {
  const {TabPane} = Tabs
  const [todos,setTodos] = useState([])
  const [query, setQuery] = useState('')
  const [activeKey ,setActiveKey] = useState("全部")
  const [loading,setLoading] = useState(true)
  const [placeholder, setPlaceholder] = useState('');
  const [search] = useSearchParams()
  // console.log('我是search',search)
  let cityName = search.get('name')|| ''
  if(cityName=='城市') {
    cityName = ''
  }
  // console.log(cityName)
  const onSetQuery = (query) => {
    setQuery(query)
  }
  useEffect(() => {
    // 该做的onload 
    setLoading(true);
    setPlaceholder(`在${activeKey}内搜索`)
  },[activeKey])
  useEffect( () => {
    //useEffect 不只是做生命周期的onload
    // 做更新
    setLoading(true);
    setTodos([1])
    fetchTodos({query, tab: activeKey,cityName})
    .then(data => {
      setTodos([...data.result])
      setLoading(false)
    })
    // console.log('更新')

  },[activeKey, query,cityName])
  
    return (
      <Wrapper>
        <header>
          <img className = "title" src = "./src/assets/images/title.jpg"></img>
          <div className='title-photo'>
            <img src = "./src/assets/images/title1.jpg"></img>
            <img src = "./src/assets/images/title2.jpg"></img>
            <img src = "./src/assets/images/title3.jpg"></img>
          </div>
        </header>
        <h2 className='app-title'>热门赛事</h2>
        <div className='match'>
          <Tabs activeKey= {activeKey}  onChange = {setActiveKey}
            >
            <TabPane tab = "全部" key = "全部">
            </TabPane>
            <TabPane tab = "电竞赛事" key = "电竞赛事">
            </TabPane>
            <TabPane tab = "体育赛事" key = "体育赛事"/>
          </Tabs>
          <CitySelect cityName={cityName}/>
        </div>
        <div className='app-wrap'>
          <TodoInput placeholder={placeholder} onSetQuery = {onSetQuery}/>
        <Spin spinning = {loading} tip ="加载中~">
         { todos.length== 0 ?
         <div className='nodata'>
          <img src={No}></img>
          <p style={{fontSize:'15px'}}>暂无代办事项</p> 
         </div>:
         <TodoList todos = {todos}  />
         }
        </Spin>
        </div>
      </Wrapper>
    )
}
