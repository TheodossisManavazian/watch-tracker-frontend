import Watches from "./pages/Watches";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Brands from "./pages/Brands";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex-grow">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    {/* <Route path='/brands' element={<Brands/>}/> */}
                    <Route path='/watches' element={<Watches/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    {/* <Route path='/signup' element={<SignUp/>}/> */}
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;