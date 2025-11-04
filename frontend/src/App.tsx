import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import ClientSection from './components/home/ClientSection/ClientSection';
import HomeGallery from './components/Galary/HomeGalary/HomeGalary';
import SuccessStories from './components/Home/Testimonial/SuccessStories';
import FAQ from './components/common/FAQ/FAQ';
import ContactForm from './components/common/ContactForm/ContactForm';
import FeaturesSection from './components/home/FeatureSection/FeatureSection';
import HeroSection from './components/home/HeroSection/HeroSection';
import ImpactStats from './components/home/ImpactStats/ImpactStats';
import SecuritySolutions from './components/home/SecuritySolutions/SecuritySolution';
import Footer from './components/common/Footer/footer';
import Servicespage from './(routes)/services/Servicespage';

function HomePage() {
  return (
    <>
      <HeroSection/>
      <ClientSection/>
      <FeaturesSection/>
      <ImpactStats/>
      <SecuritySolutions/>
      <HomeGallery/>
      <SuccessStories/>
      <FAQ/>
      <ContactForm/>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Servicespage/>} />
          </Routes>
          <Footer/>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Boundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: 20 }}>
          Something went wrong: {String(this.state.hasError)}
        </div>
      );
    }
    return this.props.children;
  }
}

export default App;
