import './App.css'
import Home from './Views/Home/Home'
import Detail from './Views/Detail/Detail'
import Create from './Views/Create/Create'
import About from './Views/About/About';
import {Route, Routes} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <div className='App'>
      <div className='wrap'>
      <NavBar/>
      <h1 className='h1'>Food Single Page Aplication</h1>
      <div className='subtitles'>
        <h2 className='h2'>Created by <a href="https://www.linkedin.com/in/leslie-quetglas/" target="_blank" rel="noreferrer" className='link' > Leslie Quetglas</a> </h2>
        <h3 className='h3'>A project brought to you by Soy Henry</h3>
      </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe/:ID" element= {<Detail/>}/>
          <Route path="/recipe/create" element= {<Create/>}/>
          <Route path= "/about" element= {<About/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
