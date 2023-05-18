import './App.css';
import Home from './Views/Home/Home'
import Detail from './Views/Detail/Detail';
import Create from './Views/Create/Create';
// import About from './Views/About/About';
import {Route, Routes, Link, useLocation} from "react-router-dom"

function App() {
   const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname === "/" && <Link to="/home">
        <button>Ir a las recetas</button>
      </Link>}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/recipe/:ID" element= {<Detail/>}/>
        <Route path="/recipe/create" element= {<Create/>}/>
        {/* <Route path= "/about" element= {<About/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
