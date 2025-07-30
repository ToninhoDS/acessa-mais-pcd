import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Shield, 
  Smartphone, 
  Database, 
  Settings, 
  HeadphonesIcon,
  TrendingUp,
  Building,
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
      HeadphonesIcon,
      TrendingUp,
      Building,
    };
    return iconMap[iconName as keyof typeof iconMap] || Code;
  };

  return (
    <div className="px-4 py-6">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Explore Áreas de TI
          </h2>
          <p className="text-gray-600">
            Descubra as diferentes especializações em tecnologia e encontre seu caminho ideal.
          </p>
        </div>

        <div className="space-y-3" role="list" aria-label="Áreas de especialização em TI">
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
                  className="w-full p-4 text-left hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors group"
                  aria-expanded={isSelected}
                  aria-label={`${isSelected ? 'Ocultar' : 'Mostrar'} detalhes sobre ${area.name}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${area.color}`}>
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-800">{area.name}</h3>
                        <p className="text-sm text-gray-600 group-hover:text-blue-700">{area.shortDescription}</p>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`h-5 w-5 text-gray-400 transition-transform ${isSelected ? 'rotate-90' : ''}`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isSelected && (
                  <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Sobre esta área</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Habilidades necessárias</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Faixa salarial</h4>
                        <p className="text-green-700 font-semibold">{area.salaryRange}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Oportunidades para PCD</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {area.accessibilityNotes}
                        </p>
                      </div>

                      {area.certifications && area.certifications.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Certificações recomendadas</h4>
                          <ul className="space-y-1">
                            {area.certifications.map((cert, index) => (
                              <li key={index} className="text-sm text-gray-700">
                                • {cert}
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