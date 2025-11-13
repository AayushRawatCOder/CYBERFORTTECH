import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/footer';
import Servicespage from './(routes)/services/Servicespage';
import ServicesDetail from './(routes)/services/[slug]/page';
import PartenerPage from './(routes)/Partner/PartenerPage';
import HomePage from './(routes)/Home/HomePage';
import Aboutus from './(routes)/About/Aboutus';
// import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Servicespage/>} />
            <Route path="/services/:slug" element={<ServicesDetail/>} />
            <Route path="/partners" element={<PartenerPage/>} />
            <Route path="/about" element={<Aboutus/>} />
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
