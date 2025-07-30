import React from 'react';
import { Type, Eye, EyeOff } from 'lucide-react';

interface AccessibilityBarProps {
  fontSize: 'normal' | 'large' | 'extra-large';
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
}

export const AccessibilityBar: React.FC<AccessibilityBarProps> = ({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
}) => {
  const handleFontSizeChange = () => {
    const sizes: Array<'normal' | 'large' | 'extra-large'> = ['normal', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    const newSize = sizes[nextIndex];
    
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
  };

  const handleContrastToggle = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    localStorage.setItem('highContrast', newContrast.toString());
  };

  return (
    <div 
      className="bg-gray-800 text-white px-4 py-2"
      role="toolbar"
      aria-label="Ferramentas de acessibilidade"
    >
      <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
        <button
          onClick={handleFontSizeChange}
          className="flex items-center space-x-2 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label={`Tamanho da fonte: ${fontSize}. Clique para alterar`}
        >
          <Type className="h-4 w-4" aria-hidden="true" />
          <span className="text-sm capitalize">{fontSize}</span>
        </button>

        <button
          onClick={handleContrastToggle}
          className="flex items-center space-x-2 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label={`Alto contraste: ${highContrast ? 'ativado' : 'desativado'}. Clique para ${highContrast ? 'desativar' : 'ativar'}`}
        >
          {highContrast ? (
            <EyeOff className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Eye className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="text-sm">
            {highContrast ? 'Alto Contraste' : 'Contraste Normal'}
          </span>
        </button>
      </div>
    </div>
  );
};