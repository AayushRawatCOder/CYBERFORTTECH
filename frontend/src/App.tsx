import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import ClientSection from './components/home/ClientSection/ClientSection';
import FeaturesSection from './components/home/FeatureSection/FeatureSection';
import HeroSection from './components/home/HeroSection/HeroSection';


function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Navbar />
          <HeroSection/>
          <ClientSection/>
          <FeaturesSection/>
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