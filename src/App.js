import './App.css';
import Footer from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { NameWord } from './components/NameWord';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <>
    <Welcome />
    <LandingPage />
    <NameWord />
    <Footer />
    </>
  );
}

export default App;
