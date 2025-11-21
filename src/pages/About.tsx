import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <ParallaxSection
        backgroundImage="https://cdn.poehali.dev/projects/7bd5cb33-ed31-44ac-8ed0-ff763052a33f/files/63f859c6-21d6-49c9-ad5c-b0e4a8c209d0.jpg"
        className="min-h-screen flex items-center pt-24 pb-16 animate-fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-scale-in">
            <h2 className="text-5xl font-bold mb-8 text-white">О мафии SIZE</h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <div className="grid gap-6">
              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <Icon name="Shield" className="text-red-600 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Элитный бизнес</h3>
                    <p className="text-white/80 leading-relaxed">
                      SIZE специализируется на высокодоходных операциях в сфере недвижимости, 
                      развлекательного бизнеса и элитных услуг по всему Лос-Сантосу. Мы контролируем 
                      премиальные заведения в центре города и эксклюзивную недвижимость на Vinewood Hills.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <Icon name="Users" className="text-red-600 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Влияние и власть</h3>
                    <p className="text-white/80 leading-relaxed">
                      Наша организация имеет широкую сеть связей в деловых и политических кругах города. 
                      SIZE известна своей способностью решать любые вопросы и обеспечивать защиту 
                      интересов наших партнёров на самом высоком уровне.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <Icon name="Crown" className="text-red-600 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Элитарность</h3>
                    <p className="text-white/80 leading-relaxed">
                      Членство в SIZE — это знак высокого статуса и признание в криминальном мире 
                      Лос-Сантоса. Мы принимаем только самых надёжных и проверенных людей, 
                      которые разделяют наши ценности и готовы работать на благо семьи.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <Footer />
    </div>
  );
};

export default About;
