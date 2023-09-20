import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import SearchBar from './components/ui/SearchBar';

function App() {
  return (
    <>
    <Router>
    <Nav/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/:search'element={<Movies/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
