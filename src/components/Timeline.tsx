import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, Play, ExternalLink, Award } from 'lucide-react';
import { timelineData } from '../data/timelineData';

interface ProgressBarProps {
  completedSteps: number;
  totalSteps: number;
  userName?: string;
  isSticky?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completedSteps, totalSteps, userName, isSticky = false }) => (
  <div className={`${isSticky ? 'fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white shadow-lg' : 'mb-6'}`}>
    <div className="max-w-md mx-auto">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Progresso na Jornada</span>
          </div>
          <span className="text-blue-600 font-bold text-lg">
            {completedSteps}/{totalSteps}
          </span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(completedSteps / totalSteps) * 100}%` }}
            role="progressbar"
            aria-valuenow={completedSteps}
            aria-valuemin={0}
            aria-valuemax={totalSteps}
            aria-label={`Progresso da jornada: ${completedSteps} de ${totalSteps} etapas concluídas`}
          />
        </div>
        {completedSteps > 0 && (
          <p className="text-sm text-blue-700 mt-2">
            🎉 Excelente progresso! Continue assim!
          </p>
        )}
      </div>
    </div>
  </div>
);

interface TimelineProps {
  userName?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ userName }) => {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isProgressSticky, setIsProgressSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Load completed steps from localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem('completedSteps');
    if (saved) {
      setCompletedSteps(new Set(JSON.parse(saved)));
    }
  }, []);

  // Handle scroll for sticky progress bar
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show sticky progress bar when scrolling down past initial progress section
      if (currentScrollY > 200 && !isProgressSticky) {
        setIsProgressSticky(true);
      } else if (currentScrollY <= 200 && isProgressSticky) {
        setIsProgressSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProgressSticky]);

  const toggleStepComplete = (stepId: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
    localStorage.setItem('completedSteps', JSON.stringify(Array.from(newCompleted)));
  };

  const toggleStepDetails = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  const markAsCompleted = (stepId: number) => {
    const newCompleted = new Set(completedSteps);
    newCompleted.add(stepId);
    setCompletedSteps(newCompleted);
    localStorage.setItem('completedSteps', JSON.stringify(Array.from(newCompleted)));
    setActiveStep(null);
    
    // Scroll to the completed card for better UX
    setTimeout(() => {
      const cardElement = document.getElementById(`step-${stepId}`);
      if (cardElement) {
        cardElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100);
  };

  return (
    <div className={`px-4 py-6 ${isProgressSticky ? 'pt-24' : ''}`}>
      {/* Sticky Progress Bar */}
      {isProgressSticky && (
        <ProgressBar 
          completedSteps={completedSteps.size}
          totalSteps={timelineData.length}
          userName={userName}
          isSticky={true}
        />
      )}
      
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {userName ? `Sua Jornada na TI, ${userName}` : 'Sua Jornada na TI'}
          </h2>
          <p className="text-gray-600">
            Siga este caminho estruturado para construir sua carreira em tecnologia. 
            Cada etapa contém recursos valiosos para seu desenvolvimento.
          </p>
          
          {/* Static Progress Bar */}
          <div className="mt-4">
            <ProgressBar 
              completedSteps={completedSteps.size}
              totalSteps={timelineData.length}
              userName={userName}
            />
          </div>
        </div>

        <div className="space-y-4" role="list" aria-label="Etapas da jornada em TI">
          {timelineData.map((step, index) => {
            const isCompleted = completedSteps.has(step.id);
            const isActive = activeStep === step.id;
            const isLast = index === timelineData.length - 1;

            return (
              <div key={step.id} id={`step-${step.id}`} className="relative" role="listitem">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <button
                      onClick={() => toggleStepComplete(step.id)}
                      className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors z-10 bg-white"
                      aria-label={`${isCompleted ? 'Marcar como não concluída' : 'Marcar como concluída'}: ${step.title}`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      ) : (
                        <Circle className="h-8 w-8 text-gray-400 hover:text-blue-500 transition-colors" />
                      )}
                    </button>
                    {!isLast && (
                      <div className="w-0.5 h-16 bg-gray-300 mt-2" aria-hidden="true" />
                    )}
                  </div>
                
                  <div className="flex-1">
                    <div 
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => toggleStepDetails(step.id)}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-semibold ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
                              {step.title}
                              {isCompleted && <span className="ml-2 text-green-600">✓</span>}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mt-1">
                              {step.description}
                            </p>
                            
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                {step.category}
                              </span>
                              <span>{step.duration}</span>
                            </div>
                          </div>
                          
                          <ChevronRight 
                            className={`h-5 w-5 text-gray-400 transition-transform ml-2 ${isActive ? 'rotate-90' : ''}`}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      {isActive && (
                        <div className="border-t border-gray-200 p-4 bg-gray-50">
                          <div className="space-y-4">
                            {step.content && (
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Conteúdo</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {step.content}
                                </p>
                              </div>
                            )}

                            {step.videos && step.videos.length > 0 && (
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Vídeos Recomendados</h4>
                                <div className="space-y-2">
                                  {step.videos.map((video, videoIndex) => (
                                    <a
                                      key={videoIndex}
                                      href={video.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center space-x-2 p-2 bg-white rounded border hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors group"
                                      aria-label={`Assistir vídeo: ${video.title} (abre em nova aba)`}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Play className="h-4 w-4 text-red-600 flex-shrink-0" aria-hidden="true" />
                                      <span className="text-sm text-gray-900 group-hover:text-blue-800 flex-1">{video.title}</span>
                                      <ExternalLink className="h-3 w-3 text-gray-400" aria-hidden="true" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}

                            {step.links && step.links.length > 0 && (
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Links Úteis</h4>
                                <div className="space-y-2">
                                  {step.links.map((link, linkIndex) => (
                                    <a
                                      key={linkIndex}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center space-x-2 p-2 bg-white rounded border hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors group"
                                      aria-label={`Acessar: ${link.title} (abre em nova aba)`}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <ExternalLink className="h-4 w-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900 group-hover:text-blue-800 font-medium">{link.title}</p>
                                        {link.description && (
                                          <p className="text-xs text-gray-600 group-hover:text-blue-700">{link.description}</p>
                                        )}
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {!isCompleted && (
                              <div className="pt-4 border-t border-gray-200">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    markAsCompleted(step.id);
                                  }}
                                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                                >
                                  ✓ Marcar como Concluído
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};