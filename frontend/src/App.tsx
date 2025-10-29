import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import HeroSection from './components/Home/HeroSection/HeroSection';


function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Navbar />
          <HeroSection/>
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