import React, { useState } from 'react';
import { Monitor, X } from 'lucide-react';

interface WelcomeModalProps {
  onComplete: (name: string) => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onComplete }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onComplete(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all">
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <Monitor className="h-10 w-10 text-white" aria-hidden="true" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Bem-vindo ao DTI! 🚀
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Sua jornada na tecnologia está prestes a começar. 
            Vamos personalizar sua experiência!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="userName" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Como você gostaria de ser chamado(a)?
            </label>
            <input
              type="text"
              id="userName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              required
              autoFocus
              style={{ color: '#1f2937', backgroundColor: '#ffffff' }}
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Começar Minha Jornada
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Suas informações são salvas localmente no seu dispositivo
          </p>
        </div>
      </div>
    </div>
  );
};