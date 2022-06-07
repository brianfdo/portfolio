import './App.scss';
// import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Aos from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react"; 
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import StickyBox from 'react-sticky-box'

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      // useClassNames: true,
      // initClassName: false,
      animatedClassName: 'animated',
    });
  });
  return (
    <div className='row'>
    {/* <Routes>
      <Route path="/" element={<Layout />}/>
    </Routes> */}
    <StickyBox offsetTop={0} offsetBottom={0}>
      <div data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos_duration="10000">
        <Layout/>
      </div>
    </StickyBox>
    
      <Home/>
    </div>

  );
}

export default App;
