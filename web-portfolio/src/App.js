import './App.scss';
// import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Aos from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react"; 
import Home from './components/Home';


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
    <div>
    {/* <Routes>
      <Route path="/" element={<Layout />}/>
    </Routes> */}
    <div data-aos="fade-right"
         data-aos-easing="ease-in-out"
         data-aos_duration="10000">
      <Layout/>
    </div>
      <Home/>
    </div>

  );
}

export default App;
