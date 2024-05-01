import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import People from './components/People';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/people' element={<People />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
