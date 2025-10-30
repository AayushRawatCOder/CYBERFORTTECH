import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import HeroSection from './components/Home/HeroSection/HeroSection';
import ClientSection from './components/home/ClientSection/ClientSection';
import HomeGallery from './components/Galary/HomeGalary/HomeGalary';
import SuccessStories from './components/Home/Testimonial/SuccessStories';
import FAQ from './components/Home/FAQ/FAQ';
import ContactForm from './components/common/ContactForm/ContactForm';


function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Navbar />
          <HeroSection/>
          <ClientSection/>
          <HomeGallery/>
          <SuccessStories/>
          <FAQ/>
          <ContactForm/>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

function ErrorBoundary({ children }) {
  try {
    return children;
  } catch (err) {
    console.error('Navbar Error:', err);
    return <div style={{ color: 'red' }}>Navbar crashed: {String(err)}</div>;
  }
}
 export default App;