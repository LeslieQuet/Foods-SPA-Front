import './App.css'
import Home from './Views/Home/Home'
import Detail from './Views/Detail/Detail'
import Create from './Views/Create/Create'
// import About from './Views/About/About';
import {Route, Routes, Link, useLocation} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar'

function App() {
   const { pathname } = useLocation();

  return (
    <div className='App'>
      {pathname !== "/" && <NavBar/>}
      <h1 className='h1'>Food Single Page Aplication</h1>
      <div className='subtitles'>
        <h2 className='h2'>Created by Leslie Quetglas</h2>
        <h3 className='h3'>A project brought to you by Soy Henry</h3>
      </div>
      {pathname === "/" && <Link to="/home">
        <button className='button'>Lets see some recipes</button>
      </Link>}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/recipe/:ID" element= {<Detail/>}/>
        <Route path="/recipe/create" element= {<Create/>}/>
        {/* <Route path= "/about" element= {<About/>}/> */}
      </Routes>
    </div>
  )
}

export default App;
