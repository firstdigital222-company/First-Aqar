import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home      from '../pages/Home';
import Services  from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import About     from '../pages/About';
import FAQ       from '../pages/FAQ';
import Contact   from '../pages/Contact';
import NotFound  from '../pages/NotFound';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Layout><Home /></Layout>} />
        <Route path="/services"  element={<Layout><Services /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/about"     element={<Layout><About /></Layout>} />
        <Route path="/faq"       element={<Layout><FAQ /></Layout>} />
        <Route path="/contact"   element={<Layout><Contact /></Layout>} />
        <Route path="*"          element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
