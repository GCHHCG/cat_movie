import React,{lazy} from 'react'
import { Route,Routes} from 'react-router'
const Cities = lazy(() => import('@/pages/Cities'))
const Events = lazy(() => import('@/pages/Events'))
const Movie = lazy(() => import('@/pages/Movie'))
const Yanchu = lazy(() => import('@/pages/Yanchu'))
const Mine = lazy(() => import('@/pages/Mine'))
// import Cities from '../pages/Cities'
// import Events from '../pages/Events'
// import Movie from '../pages/Movie'
// import Yanchu from '../pages/Yanchu'
// import Mine from '../pages/Mine'
import Home from '../pages/Home'
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Events/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/movie" element={<Movie/>}></Route>
      <Route path="/yanchu" element={<Yanchu/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/mine" element={<Mine/>}></Route>
      <Route path="/cities" element={<Cities/>}></Route>
     </Routes>
  )
}
