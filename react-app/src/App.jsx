import { useEffect, useState ,Suspense} from 'react'
import './App.css'
import 'antd/dist/antd.css' // UI 框架的样式
import Footer from './components/Footer'
import 'font-awesome/css/font-awesome.min.css'
import MyRoutes from './MyRoutes'
// const {TabPane} = Tabs
function App() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <MyRoutes/>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
