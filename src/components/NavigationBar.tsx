import React from 'react';
import { Map, Compass, BookOpen, User } from 'lucide-react';

type View = 'timeline' | 'explore' | 'resources' | 'profile';

interface NavigationBarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'timeline' as const, icon: Map, label: 'Jornada', ariaLabel: 'Ir para linha do tempo da jornada' },
    { id: 'explore' as const, icon: Compass, label: 'Explorar', ariaLabel: 'Explorar áreas de TI' },
    { id: 'resources' as const, icon: BookOpen, label: 'Recursos', ariaLabel: 'Acessar recursos e materiais' },
    { id: 'profile' as const, icon: User, label: 'Perfil', ariaLabel: 'Ir para perfil e configurações' },
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-lg z-50"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="flex justify-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex-1 flex flex-col items-center py-2 px-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              aria-label={item.ariaLabel}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon 
                className={`h-6 w-6 mb-1 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}
                aria-hidden="true"
              />
              <span className={`text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};