import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import MainRouter from './pages/MainRouter';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainRouter/>
     <Footer/>
    </div>
  );
}

export default App;
