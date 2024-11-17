import './App.css';
import Footer from './components/Footer';
import { LandingPage } from './components/LandingPage';
import MyWork from './components/myWork';
import { NameWord } from './components/NameWord';
import { SpecialSection } from './components/SpecialSection';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <>
    <Welcome />
    <LandingPage />
    <NameWord />
    <SpecialSection />
    <MyWork />
    <Footer />
    </>
  );
}

export default App;
