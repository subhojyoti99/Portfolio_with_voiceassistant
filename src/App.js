import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { LandingPage } from './components/LandingPage';
import MyWork from './components/myWork';
import { NameWord } from './components/NameWord';
import { SpecialSection } from './components/SpecialSection';
import { Welcome } from './components/Welcome';
import GenAIDashboard from './components/projects/genAI/GenAIDashboard';
import { QuotesPage } from './components/quote/QuotesPage';
import ScrollToTop from './components/ScrollToTop';
import AIAnalytics from './components/projects/AI/AIAnalytics';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="Portfolio_with_voiceassistant/"
          element={
            <>
              <Welcome />
              <LandingPage />
              <NameWord />
              <SpecialSection />
              <MyWork />
            </>
          }
        />
        {/* <Route path="/gen-ai-dashboard" element={<GenAIDashboard />} /> */}
        <Route path="/ai" element={<AIAnalytics />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
          <Footer />
    </Router>
  );
}

export default App;
