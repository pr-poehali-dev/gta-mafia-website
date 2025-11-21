import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import EditableText from '@/components/EditableText';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const About = () => {
  const [title, setTitle] = useState('О мафии SIZE');
  const [business1Title, setBusiness1Title] = useState('Элитный бизнес');
  const [business1Text, setBusiness1Text] = useState(
    'SIZE специализируется на высокодоходных операциях в сфере недвижимости, развлекательного бизнеса и элитных услуг по всему Лос-Сантосу. Мы контролируем премиальные заведения в центре города и эксклюзивную недвижимость на Vinewood Hills.'
  );
  const [business2Title, setBusiness2Title] = useState('Влияние и власть');
  const [business2Text, setBusiness2Text] = useState(
    'Наша организация имеет широкую сеть связей в деловых и политических кругах города. SIZE известна своей способностью решать любые вопросы и обеспечивать защиту интересов наших партнёров на самом высоком уровне.'
  );
  const [business3Title, setBusiness3Title] = useState('Элитарность');
  const [business3Text, setBusiness3Text] = useState(
    'Членство в SIZE — это знак высокого статуса и признание в криминальном мире Лос-Сантоса. Мы принимаем только самых надёжных и проверенных людей, которые разделяют наши ценности и готовы работать на благо семьи.'
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <ParallaxSection
        backgroundImage="https://cdn.poehali.dev/projects/7bd5cb33-ed31-44ac-8ed0-ff763052a33f/files/63f859c6-21d6-49c9-ad5c-b0e4a8c209d0.jpg"
        className="min-h-screen flex items-center pt-24 pb-16 animate-fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-scale-in">
            <EditableText
              text={title}
              onSave={setTitle}
              tag="h2"
              className="text-5xl font-bold mb-8 text-white"
            />
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <div className="grid gap-6">
              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <Icon name="Shield" className="text-red-600 flex-shrink-0" size={32} />
                  <div>
                    <EditableText
                      text={business1Title}
                      onSave={setBusiness1Title}
                      tag="h3"
                      className="text-2xl font-bold mb-3 text-white"
                    />
                    <EditableText
                      text={business1Text}
                      onSave={setBusiness1Text}
                      tag="p"
                      className="text-white/80 leading-relaxed"
                      multiline
                    />
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <Icon name="Users" className="text-red-600 flex-shrink-0" size={32} />
                  <div>
                    <EditableText
                      text={business2Title}
                      onSave={setBusiness2Title}
                      tag="h3"
                      className="text-2xl font-bold mb-3 text-white"
                    />
                    <EditableText
                      text={business2Text}
                      onSave={setBusiness2Text}
                      tag="p"
                      className="text-white/80 leading-relaxed"
                      multiline
                    />
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <Icon name="Crown" className="text-red-600 flex-shrink-0" size={32} />
                  <div>
                    <EditableText
                      text={business3Title}
                      onSave={setBusiness3Title}
                      tag="h3"
                      className="text-2xl font-bold mb-3 text-white"
                    />
                    <EditableText
                      text={business3Text}
                      onSave={setBusiness3Text}
                      tag="p"
                      className="text-white/80 leading-relaxed"
                      multiline
                    />
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
