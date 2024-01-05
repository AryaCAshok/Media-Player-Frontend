import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import WatchhistoryNew from './Pages/WatchhistoryNew';
import Landing from './Pages/Landing';
import Header from './Components/Header';
import Footer from './Components/Footer'
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div >
     <Header/>

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch'element={<WatchhistoryNew/>}/>
    </Routes>
      

      <Footer/>
    </div>
  );
}

export default App;
