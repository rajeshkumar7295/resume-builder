import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import DataFilling from './pages/DataFilling'
import Preview from './pages/Preview';
import About from './pages/About';
function App() {
  return (
    <div className="App ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path='/data-filling/:templateId' element={<DataFilling/>}>
       
        </Route>
        <Route path='/preview-page/:templateId' element={<Preview/>} />
        <Route path='/about-us' element={<About/>} />
      </Routes> 
    </div>
  );
}

export default App;
