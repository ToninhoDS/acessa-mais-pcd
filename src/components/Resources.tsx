import React, { useState } from 'react';
import { 
  BookOpen, 
  Video, 
  ExternalLink, 
  Users, 
  Award, 
  Search,
  Filter,
  Briefcase
} from 'lucide-react';
import { resources } from '../data/resources';

type ResourceCategory = 'all' | 'courses' | 'communities' | 'certifications' | 'jobs' | 'tools';

export const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all' as const, label: 'Todos', icon: BookOpen },
    { id: 'courses' as const, label: 'Cursos', icon: Video },
    { id: 'communities' as const, label: 'Comunidades', icon: Users },
    { id: 'certifications' as const, label: 'Certificações', icon: Award },
    { id: 'jobs' as const, label: 'Vagas', icon: Briefcase },
    { id: 'tools' as const, label: 'Ferramentas', icon: Filter },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getResourceIcon = (category: string) => {
    switch (category) {
      case 'courses': return Video;
      case 'communities': return Users;
      case 'certifications': return Award;
      case 'jobs': return Briefcase;
      case 'tools': return Filter;
      default: return BookOpen;
    }
  };

  return (
    <div className="px-4 py-6">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Recursos e Materiais
          </h2>
          <p className="text-gray-600">
            Acesse cursos, comunidades, certificações e ferramentas para impulsionar sua carreira.
          </p>
        </div>

        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Buscar recursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Buscar recursos por título ou descrição"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-6">
          <div className="flex overflow-x-auto space-x-2 pb-2" role="tablist" aria-label="Categorias de recursos">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Filtrar por ${category.label}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources list */}
        <div className="space-y-4" role="list" aria-label="Lista de recursos disponíveis">
          {filteredResources.length === 0 ? (
            <div className="text-center py-8">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-3" aria-hidden="true" />
              <p className="text-gray-600">
                Nenhum recurso encontrado para sua busca.
              </p>
            </div>
          ) : (
            filteredResources.map((resource) => {
              const Icon = getResourceIcon(resource.category);
              
              return (
                <div 
                  key={resource.id} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                  role="listitem"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${resource.featured ? 'bg-yellow-500' : 'bg-blue-600'}`}>
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-gray-900">
                          {resource.title}
                          {resource.featured && (
                            <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                              Destaque
                            </span>
                          )}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full capitalize">
                            {resource.category}
                          </span>
                          {resource.price && (
                            <span className={resource.price === 'Gratuito' ? 'text-green-600 font-medium' : 'text-gray-600'}>
                              {resource.price}
                            </span>
                          )}
                        </div>
                        
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 transition-colors"
                          aria-label={`Acessar ${resource.title} (abre em nova aba)`}
                        >
                          <span className="text-sm font-medium">Acessar</span>
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};