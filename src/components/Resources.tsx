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
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Buscar recursos por título ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md text-gray-900 placeholder-gray-500"
              aria-label="Buscar recursos por título ou descrição"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Filtrar por categoria:</h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl" role="tablist" aria-label="Categorias de recursos">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center justify-center space-x-1 px-3 sm:px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm min-h-[48px] ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Filtrar por ${category.label}`}
                  title={category.label}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-center hidden xs:inline">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources list */}
        <div className="space-y-3" role="list" aria-label="Lista de recursos disponíveis">
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
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
                  role="listitem"
                >
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className={`p-3.5 rounded-xl ${resource.featured ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-blue-500 to-blue-700'} shadow-sm flex-shrink-0`}>
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      
                      <div className="flex-1 min-w-0 w-full">
                        <div className="relative mb-2 w-full">
                          <h3 className="font-bold text-lg text-gray-900 leading-tight pr-20">
                            {resource.title}
                          </h3>
                          {resource.featured && (
                             <span className="absolute top-0 right-0 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full border border-yellow-300 flex items-center space-x-1">
                               <span>⭐</span>
                               <span>Destaque</span>
                             </span>
                           )}
                        </div>
                        
                        <p className="text-gray-700 text-sm leading-relaxed w-full min-w-0 flex-1">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-2 mt-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1.5 rounded-full border border-gray-300 capitalize whitespace-nowrap">
                          {resource.category}
                        </span>
                        {resource.price && (
                          <span className={`text-xs font-semibold px-2.5 py-1.5 rounded-full whitespace-nowrap ${
                            resource.price === 'Gratuito' 
                              ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300' 
                              : 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-300'
                          }`}>
                            {resource.price}
                          </span>
                        )}
                      </div>
                      
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
                        aria-label={`Acessar ${resource.title} (abre em nova aba)`}
                      >
                        <span>Acessar</span>
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
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