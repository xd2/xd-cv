import ModernCV from './components/ModernCV';
import { profileData } from './data/profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <button
        onClick={() => window.print()}
        title="Imprimer"
        className="no-print hidden md:flex items-center gap-2 px-3 py-2 text-sm text-royal-blue hover:text-royal-blue-dark absolute top-4 right-4 bg-white/70 hover:bg-white rounded-md shadow-sm border"
        aria-label="Imprimer le CV"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h1a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-3a3 3 0 0 1 3-3h1Zm2 0h8V5H8v2Zm8 8H8v4h8v-4Zm3-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
        </svg>
        <span className="sr-only md:not-sr-only">Imprimer</span>
      </button>
      <ModernCV profile={profileData} />
    </div>
  );
}

export default App;