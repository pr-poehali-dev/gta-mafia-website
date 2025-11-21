import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const News = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <ParallaxSection
        backgroundImage="https://cdn.poehali.dev/projects/7bd5cb33-ed31-44ac-8ed0-ff763052a33f/files/a8bebcbf-af53-40b4-9a02-f98a1bdf3bd4.jpg"
        className="min-h-screen flex items-center pt-24 pb-16 animate-fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto animate-scale-in">
            <h2 className="text-5xl font-bold mb-8 text-white">Новости</h2>
            <div className="w-24 h-1 bg-red-600 mb-12"></div>

            <div className="grid gap-6">
              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-lg p-4 flex flex-col items-center justify-center min-w-[80px]">
                    <span className="text-3xl font-bold">15</span>
                    <span className="text-sm uppercase">Ноя</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Открытие нового казино</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      SIZE расширяет своё влияние в развлекательной индустрии. Открыто новое элитное 
                      казино в центре Лос-Сантоса с эксклюзивным доступом только для VIP-клиентов.
                    </p>
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                      Читать далее
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-lg p-4 flex flex-col items-center justify-center min-w-[80px]">
                    <span className="text-3xl font-bold">08</span>
                    <span className="text-sm uppercase">Ноя</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Новые партнёрские соглашения</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Заключены стратегические альянсы с ведущими деловыми структурами города. 
                      Это укрепит позиции SIZE и откроет новые возможности для развития бизнеса.
                    </p>
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                      Читать далее
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-lg p-4 flex flex-col items-center justify-center min-w-[80px]">
                    <span className="text-3xl font-bold">01</span>
                    <span className="text-sm uppercase">Ноя</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Расширение территории влияния</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      SIZE успешно установила контроль над новыми районами на западном побережье. 
                      Операция прошла без эксцессов, все бизнес-процессы работают в штатном режиме.
                    </p>
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                      Читать далее
                    </Button>
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

export default News;
