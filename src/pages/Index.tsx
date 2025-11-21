import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <ParallaxSection
        backgroundImage="https://cdn.poehali.dev/projects/7bd5cb33-ed31-44ac-8ed0-ff763052a33f/files/4b907d46-78ee-4413-8e32-6d80add8bab7.jpg"
        className="min-h-screen flex items-center justify-center animate-fade-in"
      >
        <div className="text-center px-4 animate-scale-in">
          <h1 className="text-7xl font-bold mb-6 tracking-wider text-white">SIZE</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 animate-fade-in"></div>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Элитная организация Лос-Сантоса
          </p>
          <Link to="/about">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
            >
              Узнать больше
            </Button>
          </Link>
        </div>
      </ParallaxSection>

      <Footer />
    </div>
  );
};

export default Index;
