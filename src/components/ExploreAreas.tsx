import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Shield, 
  Smartphone, 
  Database, 
  Settings, 
  Headphones,
  TrendingUp,
  Building2,
  BarChart3,
  ChevronRight
} from 'lucide-react';
import { techAreas } from '../data/techAreas';

export const ExploreAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const iconMap = {
      Code,
      Server,
      Shield,
      Smartphone,
      Database,
      Settings,
      Headphones,
      TrendingUp,
      Building2,
      BarChart3,
    };
    return iconMap[iconName as keyof typeof iconMap] || Code;
  };

  return (
    <div className="px-4 py-6">
      <div className="max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Explore Áreas de TI
          </h2>
          <p className="text-gray-600">
            Descubra as diferentes especializações em tecnologia e encontre seu caminho ideal.
          </p>
        </div>

        <div className="space-y-5" role="list" aria-label="Áreas de especialização em TI">
          {techAreas.map((area) => {
            const Icon = getIcon(area.icon);
            const isSelected = selectedArea === area.id;

            return (
              <div 
                key={area.id} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => setSelectedArea(isSelected ? null : area.id)}
                  className="w-full px-5 py-4 text-left hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors group"
                  aria-expanded={isSelected}
                  aria-label={`${isSelected ? 'Ocultar' : 'Mostrar'} detalhes sobre ${area.name}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4 sm:space-x-5">
                      <div className={`p-4 rounded-xl ${area.color} shadow-md flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0`}>
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 overflow-hidden">
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-800 text-base sm:text-lg leading-tight truncate">{area.name}</h3>
                        <p className="text-sm text-gray-500 group-hover:text-blue-700 mt-1 leading-relaxed line-clamp-2">{area.shortDescription}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors ml-4 flex-shrink-0">
                      <ChevronRight 
                        className={`h-5 w-5 text-gray-700 group-hover:text-blue-600 transition-all duration-200 ${isSelected ? 'rotate-90' : ''}`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </button>

                {isSelected && (
                  <div className="border-t border-gray-200 px-5 py-5 bg-gray-50">
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Sobre esta área</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Habilidades necessárias</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full font-medium inline-block"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Faixa salarial</h4>
                        <p className="text-green-700 font-semibold text-sm sm:text-base">{area.salaryRange}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Oportunidades para PCD</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {area.accessibilityNotes}
                        </p>
                      </div>

                      {area.certifications && area.certifications.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Certificações recomendadas</h4>
                          <ul className="space-y-3">
                            {area.certifications.map((cert, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-start">
                                <span className="text-blue-600 mr-2.5 flex-shrink-0 text-lg">•</span>
                                <span>{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};