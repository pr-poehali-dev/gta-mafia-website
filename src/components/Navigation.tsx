import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О мафии' },
    { path: '/news', label: 'Новости' },
    { path: '/leadership', label: 'Руководство' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30 animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-red-600 tracking-wider hover:text-red-500 transition-colors">
          SIZE
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-red-600' : 'text-white hover:text-red-600'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300 ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
