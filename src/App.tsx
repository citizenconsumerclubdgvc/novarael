import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutNovarael from './pages/AboutNovarael';
import AboutCCC from './pages/AboutCCC';
import Events from './pages/Events';
import OrganizingTeam from './pages/OrganizingTeam';
import EventRulebook from './pages/EventRulebook';
import GeneralRules from './pages/GeneralRules';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

type Page = 'home' | 'about-novarael' | 'about-ccc' | 'events' | 'team' | 'rulebook' | 'general-rules';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about-novarael':
        return <AboutNovarael />;
      case 'about-ccc':
        return <AboutCCC />;
      case 'events':
        return <Events />;
      case 'team':
        return <OrganizingTeam />;
      case 'rulebook':
        return <EventRulebook />;
      case 'general-rules':
        return <GeneralRules />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
