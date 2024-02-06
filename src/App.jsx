
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import Details from './Pages/Details';
import Login from './Pages/Login';
import Article from './Pages/Article';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/login' element={<Login />} />
        <Route path='/article' element={<Article />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App;
