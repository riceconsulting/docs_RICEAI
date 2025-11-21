import React, { useState, FC } from 'react';
import { resources, Language } from './translations';

// --- TYPE DEFINITIONS ---
interface Freebie {
  id: number;
  title: string;
  description: string;
  image: string;
  summary: string;
}

const DropdownIcon = () => (
    <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

const App: FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedFreebieId, setSelectedFreebieId] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const t = resources[language];
  const freebiesData = t.freebies;
  const selectedFreebie = selectedFreebieId ? freebiesData.find(f => f.id === selectedFreebieId) || null : null;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const navLinks = [
    { name: 'Guides', active: true, dropdown: false },
  ];

  const renderLeadsGeneratorTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      {t.tutorials.leadsGenerator.map((step, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
          <p>{step.text}</p>
          <img src={step.image} alt={step.title} className="w-full rounded-lg shadow-md mt-4" />
        </div>
      ))}
    </div>
  );
  
  const renderContentGeneratorTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      {t.tutorials.contentGenerator.map((step, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
          <p>{step.text}</p>
          <img src={step.image} alt={step.title} className="w-full rounded-lg shadow-md mt-4" />
        </div>
      ))}
    </div>
  );

  const renderLegalConsultantTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
        {t.tutorials.legalConsultant.map((step, index) => (
        <div key={index}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p>{step.text}</p>
            <img src={step.image} alt={step.title} className="w-full rounded-lg shadow-md mt-4" />
        </div>
        ))}
    </div>
  );

  const renderBusinessAssessmentsTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
        {t.tutorials.businessAssessments.map((step, index) => (
        <div key={index}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p>{step.text}</p>
            <img src={step.image} alt={step.title} className="w-full rounded-lg shadow-md mt-4" />
        </div>
        ))}
    </div>
  );

  const renderMarketAnalystTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-12">
      {t.tutorials.marketAnalyst.map((tool, index) => (
        <div key={index} className="space-y-6 p-6 rounded-lg border border-gray-200 bg-white">
          <h3 className="text-2xl font-bold text-gray-800">{tool.title}</h3>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{tool.howToUse.title}</h4>
            <p>{tool.howToUse.text}</p>
            <img src={tool.images[0]} alt={tool.howToUse.title} className="w-full rounded-lg shadow-md mt-4" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{tool.whatYouGet.title}</h4>
            <p>{tool.whatYouGet.text}</p>
            <img src={tool.images[1]} alt={tool.whatYouGet.title} className="w-full rounded-lg shadow-md mt-4" />
          </div>
        </div>
      ))}
    </div>
  );

  const renderContentMakerTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      {t.tutorials.contentMaker.map((step, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
          <p>{step.text}</p>
          <img src={step.image} alt={step.title} className="w-full rounded-lg shadow-md mt-4" />
        </div>
      ))}
    </div>
  );
  
  const renderLinkAssistantTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      {t.tutorials.linkAssistant.map((step, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
          <p>{step.text}</p>
          <img src={step.image} alt={step.title} className="w-full rounded-lg shadow-md mt-4" />
        </div>
      ))}
    </div>
  );

  const renderDefaultTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3 className="text-xl font-semibold text-gray-800 pt-4">Key Features</h3>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>An interesting and useful first feature.</li>
        <li>A second feature with various other advantages.</li>
        <li>A third feature to complete your project needs.</li>
      </ul>
    </div>
  );

  const renderContent = () => {
      if (selectedFreebie) {
        // Detail View (Blog Style)
        return (
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedFreebieId(null)}
                className="mb-8 text-[#5890AD] hover:text-[#477a93] font-semibold flex items-center transition-colors"
                aria-label="Back to freebies list"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                {t.ui.backToGuides}
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedFreebie.title}</h1>
              <p className="text-lg text-gray-600 mb-8">
                {selectedFreebie.summary}
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.ui.howToUse}</h2>
              {
                selectedFreebie.id === 1 ? renderLeadsGeneratorTutorial() :
                selectedFreebie.id === 2 ? renderContentGeneratorTutorial() :
                selectedFreebie.id === 3 ? renderLegalConsultantTutorial() :
                selectedFreebie.id === 4 ? renderBusinessAssessmentsTutorial() :
                selectedFreebie.id === 5 ? renderMarketAnalystTutorial() :
                selectedFreebie.id === 6 ? renderContentMakerTutorial() :
                selectedFreebie.id === 7 ? renderLinkAssistantTutorial() :
                renderDefaultTutorial()
              }
            </div>
          </div>
        );
      }
      // Grid View
      return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto">
             <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t.ui.exploreAll}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freebiesData.map((freebie) => (
                <div 
                  key={freebie.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col cursor-pointer"
                  onClick={() => setSelectedFreebieId(freebie.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setSelectedFreebieId(freebie.id)}
                >
                  <img src={freebie.image} alt={freebie.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{freebie.title}</h3>
                    <p className="text-gray-600 flex-grow">{freebie.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  };
  
  return (
    <div className="h-screen bg-gray-50 flex">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white flex-shrink-0 border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <a href="https://www.riceai.net" className="flex items-center">
              <img className="h-12 w-auto" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=200,fit=crop,q=95/AGB2yyJJKXfD527r/rice-ai-consulting-2-AoPWxvnWOju2GwOz.png" alt="RICE Logo" />
            </a>
            <button 
              onClick={() => setIsSidebarOpen(false)} 
              className="md:hidden p-1 -mr-1"
              aria-label="Close sidebar"
            >
              <svg className="h-6 w-6 text-gray-600 hover:text-gray-900" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedFreebieId(null);
                    if (window.innerWidth < 768) {
                      setIsSidebarOpen(false);
                    }
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-base transition-colors duration-200 ${
                    !selectedFreebieId
                      ? 'bg-[#9BBBCC] text-white font-semibold shadow'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {t.ui.allGuides}
                </a>
              </li>
               <li className="my-4 border-t border-gray-200"></li>
              {freebiesData.map((freebie) => (
                <li key={freebie.id} className="mt-1">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedFreebieId(freebie.id);
                      if (window.innerWidth < 768) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-base transition-colors duration-200 ${
                      selectedFreebieId === freebie.id
                        ? 'bg-[#9BBBCC] text-white font-semibold shadow'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {freebie.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header>
          <nav className="sticky top-0 z-30 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center h-20">
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsSidebarOpen(true)} 
                        aria-label="Open sidebar"
                        className="p-2 -ml-2 text-gray-600 hover:text-gray-900"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>

                {/* Desktop Navigation Links & Button */}
                <div className="hidden md:flex items-center space-x-8 ml-auto">
                  <button
                    onClick={toggleLanguage}
                    className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                  >
                    {language === 'en' ? '🇮🇩 Bahasa Indonesia' : '🇬🇧 English'}
                  </button>
                  {navLinks.map(link => (
                    <a key={link.name} href="#" className={`flex items-center text-base font-semibold transition-colors ${link.active ? 'text-gray-900 border-b-2 border-[#5890AD] pb-1' : 'text-gray-600 hover:text-gray-900'}`}>
                      {link.name}
                      {link.dropdown && <DropdownIcon />}
                    </a>
                  ))}
                   <a href={`https://api.whatsapp.com/send/?phone=6285330168811&text=${encodeURIComponent(t.ui.whatsappMessage)}&type=phone_number&app_absent=0`}
                    target="_blank" rel="noopener noreferrer"
                    className="bg-[#5890AD] text-white font-semibold px-5 py-3 rounded-lg shadow-sm hover:bg-[#477a93] transition-colors">
                    {t.ui.contactUs}
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow bg-gray-50">{renderContent()}</main>

      </div>
    </div>
  );
};

export default App;
