import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
