import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bee-black text-white selection:bg-bee-yellow selection:text-bee-black font-sans">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
