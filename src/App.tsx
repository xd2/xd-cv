import ModernCV from './components/ModernCV';
import { profileData } from './data/profile';
import { generateMarkdown } from './utils/markdownGenerator';

function App() {
  const handleGenerateMarkdown = () => {
    const markdown = generateMarkdown(profileData);
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profileData.name.replace(/\s+/g, '_')}_CV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="no-print hidden md:flex flex-col gap-2 absolute top-4 right-4">
        <button
          onClick={handleGenerateMarkdown}
          title="Générer Markdown"
          className="flex items-center gap-2 px-3 py-2 text-sm text-royal-blue hover:text-royal-blue-dark bg-white/70 hover:bg-white rounded-md shadow-sm border"
          aria-label="Générer le CV en Markdown"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h3l2 3 2-3h3v8h-2v-4l-2 3h-2l-2-3v4H6V7z"/>
          </svg>
          <span className="sr-only md:not-sr-only">Text (MD)</span>
        </button>
        <button
          onClick={() => window.print()}
          title="Imprimer"
          className="flex items-center gap-2 px-3 py-2 text-sm text-royal-blue hover:text-royal-blue-dark bg-white/70 hover:bg-white rounded-md shadow-sm border"
          aria-label="Imprimer le CV"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h1a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-3a3 3 0 0 1 3-3h1Zm2 0h8V5H8v2Zm8 8H8v4h8v-4Zm3-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
          </svg>
          <span className="sr-only md:not-sr-only">Imprimer</span>
        </button>
      </div>
      <ModernCV profile={profileData} />
    </div>
  );
}

export default App;