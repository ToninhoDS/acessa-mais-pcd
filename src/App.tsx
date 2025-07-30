import React, { useState, useEffect } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { Timeline } from './components/Timeline';
import { ExploreAreas } from './components/ExploreAreas';
import { Resources } from './components/Resources';
import { Profile } from './components/Profile';
import { Header } from './components/Header';
import { AccessibilityBar } from './components/AccessibilityBar';
import { WelcomeModal } from './components/WelcomeModal';

type View = 'timeline' | 'explore' | 'resources' | 'profile';

function App() {
  const [currentView, setCurrentView] = useState<View>('timeline');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [userName, setUserName] = useState<string>('');

  // Load user preferences
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize') as typeof fontSize;
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedUserName = localStorage.getItem('userName');
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (savedFontSize) setFontSize(savedFontSize);
    setHighContrast(savedHighContrast);
    
    if (savedUserName) {
      setUserName(savedUserName);
    }
    
    // Show welcome modal if first visit
    if (!hasVisited) {
      setShowWelcomeModal(true);
    }
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
    document.documentElement.classList.remove('text-normal', 'text-large', 'text-extra-large');
    document.documentElement.classList.add(`text-${fontSize}`);
  }, [fontSize, highContrast]);

  const handleWelcomeComplete = (name: string) => {
    setUserName(name);
    localStorage.setItem('userName', name);
    localStorage.setItem('hasVisited', 'true');
    setShowWelcomeModal(false);
  };

  const resetProgress = () => {
    localStorage.removeItem('completedSteps');
    localStorage.removeItem('userName');
    localStorage.removeItem('hasVisited');
    setUserName('');
    window.location.reload();
  };
  const renderCurrentView = () => {
    switch (currentView) {
      case 'timeline':
        return <Timeline userName={userName} />;
      case 'explore':
        return <ExploreAreas />;
      case 'resources':
        return <Resources />;
      case 'profile':
        return <Profile 
          fontSize={fontSize} 
          setFontSize={setFontSize} 
          highContrast={highContrast} 
          setHighContrast={setHighContrast}
          userName={userName}
          onResetProgress={resetProgress}
        />;
      default:
        return <Timeline userName={userName} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        aria-label="Pular para o conteúdo principal"
      >
        Pular para o conteúdo principal
      </a>

      <AccessibilityBar 
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />
      
      <Header userName={userName} />
      
      <main 
        id="main-content"
        className="flex-1 pb-20"
        role="main"
        aria-label="Conteúdo principal do aplicativo"
      >
        {renderCurrentView()}
      </main>
      
      <NavigationBar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
      />
      
      {showWelcomeModal && (
        <WelcomeModal onComplete={handleWelcomeComplete} />
      )}
    </div>
  );
}

export default App;