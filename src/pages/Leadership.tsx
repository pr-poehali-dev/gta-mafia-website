import { useState } from 'react';
import Navigation from '@/components/Navigation';
import EditableText from '@/components/EditableText';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Leadership = () => {
  const [title, setTitle] = useState('Руководство мафии');
  const [leader1Name, setLeader1Name] = useState('Alexie Morozov');
  const [leader1Bio, setLeader1Bio] = useState(
    'Основатель и глава мафии SIZE. Alexie Morozov — харизматичный лидер с безупречной репутацией в криминальном мире Лос-Сантоса. За годы своего правления он превратил SIZE в одну из самых влиятельных и респектабельных организаций города. Известен своим стратегическим мышлением, жёсткостью в принятии решений и умением находить выгодные деловые альянсы. Под его руководством семья достигла небывалого процветания и авторитета.'
  );
  const [leader2Name, setLeader2Name] = useState('Maksim Hartford');
  const [leader2Bio, setLeader2Bio] = useState(
    'Правая рука Alexie Morozov и заместитель главы мафии SIZE. Maksim Hartford — талантливый организатор и переговорщик, который курирует ключевые направления деятельности семьи. Отвечает за координацию операций, поддержание дисциплины внутри организации и развитие новых бизнес-направлений. Благодаря его аналитическому уму и безупречной исполнительности SIZE функционирует как отлаженный механизм. Пользуется огромным уважением в семье за преданность и профессионализм.'
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="min-h-screen flex items-center relative bg-black pt-24 pb-16 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-scale-in">
            <EditableText
              text={title}
              onSave={setTitle}
              tag="h2"
              className="text-5xl font-bold mb-8 text-white text-center"
            />
            <div className="w-24 h-1 bg-red-600 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-red-950/30 to-black border-red-900/50 p-8 hover:border-red-600 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-600 to-red-900 mb-6 flex items-center justify-center overflow-hidden border-4 border-red-600">
                    <Icon name="User" size={80} className="text-white" />
                  </div>
                  <div className="bg-red-600 px-4 py-1 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">Лидер</span>
                  </div>
                  <EditableText
                    text={leader1Name}
                    onSave={setLeader1Name}
                    tag="h3"
                    className="text-3xl font-bold mb-3 text-white"
                  />
                  <EditableText
                    text={leader1Bio}
                    onSave={setLeader1Bio}
                    tag="p"
                    className="text-white/80 leading-relaxed mb-6"
                    multiline
                  />
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

              <Card className="bg-gradient-to-br from-red-950/30 to-black border-red-900/50 p-8 hover:border-red-600 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-700 to-red-900 mb-6 flex items-center justify-center overflow-hidden border-4 border-red-700">
                    <Icon name="User" size={80} className="text-white" />
                  </div>
                  <div className="bg-red-700 px-4 py-1 rounded-full mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">Заместитель</span>
                  </div>
                  <EditableText
                    text={leader2Name}
                    onSave={setLeader2Name}
                    tag="h3"
                    className="text-3xl font-bold mb-3 text-white"
                  />
                  <EditableText
                    text={leader2Bio}
                    onSave={setLeader2Bio}
                    tag="p"
                    className="text-white/80 leading-relaxed mb-6"
                    multiline
                  />
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

      <Footer />
    </div>
  );
};

export default Leadership;
