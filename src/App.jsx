import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Products from './components/sections/Products';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Quality from './components/sections/Quality';
import CtaBanner from './components/sections/CtaBanner';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Products />
        <WhyChooseUs />
        <Quality />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
