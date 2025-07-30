import React from 'react';
import { Monitor, Users } from 'lucide-react';

interface HeaderProps {
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header 
      className="bg-white shadow-sm border-b border-gray-200 px-4 py-4"
      role="banner"
    >
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Monitor className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              DTI
            </h1>
            <p className="text-sm text-gray-600">
              {userName ? `Olá, ${userName}!` : 'Bem-vindo(a)! Sua jornada tech está começando'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full">
          <Users className="h-4 w-4 text-green-600" aria-hidden="true" />
          <span className="text-sm text-green-700 font-medium">PCD</span>
        </div>
      </div>
    </header>
  );
};