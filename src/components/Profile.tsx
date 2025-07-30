import React from 'react';
import { 
  User, 
  Settings, 
  Award, 
  Target, 
  Type, 
  Eye,
  EyeOff,
  Info,
  Heart,
  RotateCcw,
  AlertTriangle
} from 'lucide-react';

interface ProfileProps {
  fontSize: 'normal' | 'large' | 'extra-large';
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  userName?: string;
  onResetProgress: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  userName,
  onResetProgress,
}) => {
  const [showResetConfirm, setShowResetConfirm] = React.useState(false);
  const [completedSteps, setCompletedSteps] = React.useState(0);
  
  React.useEffect(() => {
    const saved = localStorage.getItem('completedSteps');
    if (saved) {
      setCompletedSteps(JSON.parse(saved).length);
    }
  }, []);

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

  const handleResetProgress = () => {
    onResetProgress();
    setShowResetConfirm(false);
  };
  return (
    <div className="px-4 py-6">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Perfil e Configurações
          </h2>
          <p className="text-gray-600">
            Personalize sua experiência e acompanhe seu progresso.
          </p>
        </div>

        <div className="space-y-4">
          {/* User Info Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <User className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {userName ? `Olá, ${userName}!` : 'Bem-vindo(a)!'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {completedSteps > 0 ? 'Continue sua jornada tech!' : 'Sua jornada tech está começando'}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Target className="h-5 w-5 text-blue-600 mx-auto mb-1" aria-hidden="true" />
                <p className="text-sm font-medium text-blue-800">Etapas</p>
                <p className="text-xs text-blue-600">{completedSteps > 0 ? 'Em progresso' : 'Não iniciado'}</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <Award className="h-5 w-5 text-green-600 mx-auto mb-1" aria-hidden="true" />
                <p className="text-sm font-medium text-green-800">Conquistas</p>
                <p className="text-xs text-green-600">{completedSteps} obtidas</p>
              </div>
            </div>
          </div>

          {/* Accessibility Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <h3 className="font-semibold text-gray-900">Configurações de Acessibilidade</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Type className="h-4 w-4 text-gray-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-gray-900">Tamanho da Fonte</p>
                    <p className="text-sm text-gray-600">Ajuste o tamanho do texto</p>
                  </div>
                </div>
                <button
                  onClick={handleFontSizeChange}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  aria-label={`Tamanho atual: ${fontSize}. Clique para alterar`}
                >
                  {fontSize === 'normal' ? 'Normal' : fontSize === 'large' ? 'Grande' : 'Extra Grande'}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {highContrast ? (
                    <EyeOff className="h-4 w-4 text-gray-600" aria-hidden="true" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-600" aria-hidden="true" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">Alto Contraste</p>
                    <p className="text-sm text-gray-600">Contraste suave para melhor legibilidade</p>
                  </div>
                </div>
                <button
                  onClick={handleContrastToggle}
                  className={`px-3 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    highContrast 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                  aria-label={`Alto contraste ${highContrast ? 'ativado' : 'desativado'}. Clique para ${highContrast ? 'desativar' : 'ativar'}`}
                >
                  {highContrast ? 'Ativado' : 'Desativado'}
                </button>
              </div>
            </div>
          </div>

          {/* Progress Management */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <RotateCcw className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <h3 className="font-semibold text-gray-900">Gerenciar Progresso</h3>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Você pode reiniciar sua jornada a qualquer momento. Isso apagará todo o seu progresso atual.
              </p>
              
              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="w-full bg-red-50 text-red-700 border border-red-200 py-2 px-4 rounded-lg font-medium hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                >
                  Zerar Progresso
                </button>
              ) : (
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <p className="text-sm font-medium text-red-800">Tem certeza?</p>
                  </div>
                  <p className="text-xs text-red-700 mb-3">
                    Esta ação não pode ser desfeita. Todo o seu progresso será perdido.
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleResetProgress}
                      className="flex-1 bg-red-600 text-white py-1 px-3 rounded text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                    >
                      Sim, zerar
                    </button>
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="flex-1 bg-gray-200 text-gray-800 py-1 px-3 rounded text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Info className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <h3 className="font-semibold text-gray-900">Sobre o App</h3>
            </div>
            
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                A <strong> DTI - SCS</strong>, desenvolveu este sistema para apoiar os primeiros passos de quem deseja conhecer e ingressar na área de Tecnologia da Informação (TI), com foco especial em pessoas com limitações ou pessoas com deficiência (PcDs) interessadas em construir uma carreira no setor.
              </p>
              <p>
                Nossa missão é oferecer recursos acessíveis, orientação especializada e uma trajetória estruturada que promova o desenvolvimento profissional e a inclusão real no mercado de tecnologia.
              </p>
              <div className="flex items-center space-x-2 text-red-600">
                <Heart className="h-4 w-4" aria-hidden="true" />
                <span className="font-medium">Feito com dedicação.</span>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Dica de Acessibilidade</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Use as teclas Tab e Enter para navegar pelo aplicativo. 
              Todos os elementos são compatíveis com leitores de tela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};