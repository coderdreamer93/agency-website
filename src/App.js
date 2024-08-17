
import './App.css';
import ContactForm from './components/Ui/ContactForm';

// import {BrowserRouter,Router,Routes,Route} from 'react-router-dom'
import HeroSection from './components/Ui/HeroSection';
import ServiceSection from './components/Ui/ServiceSection';
import AboutUs from './components/Ui/AboutUs';
import Footer from './components/Ui/Footer';
import Blog from './components/Ui/Blogs';

function App() {
  return <>
{/* <BrowserRouter>
<Router>
      <Routes>
      <Route index element={<HeroSection/>} />
        <Route path="/service/:id" element={<ServiceSection />} />
      </Routes>
    </Router>
    </BrowserRouter>  */}

  <HeroSection  />
  <ServiceSection/> 
  <AboutUs/>
  <Blog/>
  <ContactForm/>
  <Footer/>


  </>

  
}




export default App;
