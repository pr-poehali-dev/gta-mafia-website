import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-red-600 tracking-wider">SIZE</h1>
          <div className="flex gap-8">
            {['home', 'about', 'news', 'leadership'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider transition-colors hover:text-red-600 ${
                  activeSection === section ? 'text-red-600' : 'text-white'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О мафии'}
                {section === 'news' && 'Новости'}
                {section === 'leadership' && 'Руководство'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/7bd5cb33-ed31-44ac-8ed0-ff763052a33f/files/4b907d46-78ee-4413-8e32-6d80add8bab7.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-7xl font-bold mb-6 tracking-wider text-white">SIZE</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Элитная организация Лос-Сантоса
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            onClick={() => scrollToSection('about')}
          >
            Узнать больше
          </Button>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/7bd5cb33-ed31-44ac-8ed0-ff763052a33f/files/63f859c6-21d6-49c9-ad5c-b0e4a8c209d0.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-white">О мафии SIZE</h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <div className="grid gap-6">
              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8">
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
              
              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8">
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

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8">
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
      </section>

      <section
        id="news"
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/7bd5cb33-ed31-44ac-8ed0-ff763052a33f/files/a8bebcbf-af53-40b4-9a02-f98a1bdf3bd4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-white">Новости</h2>
            <div className="w-24 h-1 bg-red-600 mb-12"></div>
            
            <div className="grid gap-6">
              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all">
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
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      Читать далее
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all">
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
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      Читать далее
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all">
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
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      Читать далее
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className="min-h-screen flex items-center relative bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-white text-center">Руководство мафии</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-16"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-red-950/30 to-black border-red-900/50 p-8 hover:border-red-600 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-600 to-red-900 mb-6 flex items-center justify-center overflow-hidden border-4 border-red-600">
                    <Icon name="User" size={80} className="text-white" />
                  </div>
                  <div className="bg-red-600 px-4 py-1 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">Лидер</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-white">Alexie Morozov</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Основатель и глава мафии SIZE. Alexie Morozov — харизматичный лидер с безупречной 
                    репутацией в криминальном мире Лос-Сантоса. За годы своего правления он превратил 
                    SIZE в одну из самых влиятельных и респектабельных организаций города. 
                    Известен своим стратегическим мышлением, жёсткостью в принятии решений и 
                    умением находить выгодные деловые альянсы. Под его руководством семья достигла 
                    небывалого процветания и авторитета.
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-black/50 px-4 py-2 rounded">
                      <Icon name="Award" size={20} className="inline text-red-600 mr-2" />
                      <span className="text-sm">Основатель</span>
                    </div>
                    <div className="bg-black/50 px-4 py-2 rounded">
                      <Icon name="Star" size={20} className="inline text-red-600 mr-2" />
                      <span className="text-sm">Босс</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-red-950/30 to-black border-red-900/50 p-8 hover:border-red-600 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-700 to-red-900 mb-6 flex items-center justify-center overflow-hidden border-4 border-red-700">
                    <Icon name="User" size={80} className="text-white" />
                  </div>
                  <div className="bg-red-700 px-4 py-1 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">Заместитель</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-white">Maksim Hartford</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Правая рука Alexie Morozov и заместитель главы мафии SIZE. Maksim Hartford — 
                    талантливый организатор и переговорщик, который курирует ключевые направления 
                    деятельности семьи. Отвечает за координацию операций, поддержание дисциплины 
                    внутри организации и развитие новых бизнес-направлений. Благодаря его 
                    аналитическому уму и безупречной исполнительности SIZE функционирует как 
                    отлаженный механизм. Пользуется огромным уважением в семье за преданность и 
                    профессионализм.
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-black/50 px-4 py-2 rounded">
                      <Icon name="Shield" size={20} className="inline text-red-600 mr-2" />
                      <span className="text-sm">Советник</span>
                    </div>
                    <div className="bg-black/50 px-4 py-2 rounded">
                      <Icon name="Briefcase" size={20} className="inline text-red-600 mr-2" />
                      <span className="text-sm">Управляющий</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-red-900/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-red-600 mb-4">SIZE</h3>
          <p className="text-white/60 mb-4">Элитная мафия Лос-Сантоса</p>
          <div className="flex justify-center gap-6 mb-4">
            <Icon name="Mail" className="text-white/60 hover:text-red-600 cursor-pointer transition-colors" />
            <Icon name="Phone" className="text-white/60 hover:text-red-600 cursor-pointer transition-colors" />
            <Icon name="MapPin" className="text-white/60 hover:text-red-600 cursor-pointer transition-colors" />
          </div>
          <p className="text-white/40 text-sm">© 2024 SIZE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
