import React, { useState, FC } from 'react';

// --- TYPE DEFINITIONS ---
interface Freebie {
  id: number;
  title: string;
  description: string;
  image: string;
  summary: string;
}

// --- DUMMY DATA ---
const freebiesData: Freebie[] = [
  {
    id: 1,
    title: "Leads Generator",
    description: "A simple, cost-effective tool to tackle specific, high-impact lead generation tasks.",
    image: "/images/leads/step1.png",
    summary: "This section provides an overview of employee performance, helping you track activities such as customer interactions, response times, and work results. The data can be exported as an Excel file for easier tracking and analysis."
  },
  {
    id: 2,
    title: "Content Generator",
    description: "An intuitive tool to generate engaging topics and draft high-quality content for various platforms.",
    image: "/images/content/step1.png",
    summary: "This section provides an overview of the Content Generator, helping you create engaging topics and draft high-quality content for various platforms. The process is streamlined for easy use and refinement."
  },
  {
    id: 3,
    title: "AI Legal Consultant",
    description: "Analyze legal documents, identify risks, and get answers from your contracts.",
    image: "/images/legal/step1.png",
    summary: "The AI Legal Consultant empowers you to analyze documents, identify risks, extract clauses, translate text, and get answers to your legal questions instantly."
  },
  {
    id: 4,
    title: "Business & Technology Assessments",
    description: "Gain valuable insights into your company's readiness and growth potential.",
    image: "/images/business/step1.png",
    summary: "Use our assessment tools to measure your company's AI readiness, business growth, IT maturity, and cybersecurity posture, complete with AI-powered insights."
  },
  {
    id: 5,
    title: "AI Market Analyst",
    description: "Discover market trends, find competitors, and generate effective sales copy.",
    image: "/images/market/step1.png",
    summary: "The AI Market Analyst helps you identify niche trends, analyze competitors, tear down their products, and generate compelling sales copy with risk analysis."
  },
  {
    id: 6,
    title: "Content Maker",
    description: "Create stunning visuals from an idea or photo, complete with AI-generated captions.",
    image: "/images/content-maker/step1.png",
    summary: "From idea to scheduled post, the Content Maker streamlines your visual content creation. Generate designs, get AI-powered captions, and schedule your posts to platforms like Instagram, all within a single workflow."
  },
  {
    id: 7,
    title: "Link Assistant",
    description: "Generate message templates, create a link-in-bio page, and shorten links with QR codes.",
    image: "/images/link-assistant/step1.png",
    summary: "The Link Assistant helps you engage customers effectively. Generate tailored messages, build a professional link-in-bio page, and create smart links and QR codes to drive traffic to your key platforms."
  },
];

const DropdownIcon = () => (
    <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

const App: FC = () => {
  const [selectedFreebie, setSelectedFreebie] = useState<Freebie | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: 'Guides', active: true, dropdown: false },
  ];

  const renderLeadsGeneratorTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Configuration</h3>
        <p>You can select your desired criteria by defining the target location and industry, setting the company growth stage, choosing a custom research focus (like SWOT analysis), and describing your product or service to generate the corresponding personalized leads.</p>
        <img src="/images/leads/step1.png" alt="Configuration Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Advanced Options</h3>
        <p>You can use the advanced options to specify other details, such as inputting your sender name and title, providing your company's website and contact email, and customizing the email or WhatsApp message templates with specific placeholders, to generate more personalized leads.</p>
        <img src="/images/leads/step2.png" alt="Advanced Options Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. AI Lead Generation in Progress</h3>
        <p>You can monitor the AI's progress in real-time by watching the completion percentage bar advance and viewing the counter of processed leads (e.g., "Processed 1/2 leads") as it works to generate your list.</p>
        <img src="/images/leads/step3.png" alt="Progress Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Generated Lead Results</h3>
        <p>You can review the generated results by scrolling through the list of companies, reading the brief description for each, and selecting a specific lead to view the corresponding full details and personalized outreach drafts.</p>
        <img src="/images/leads/step4.png" alt="Results Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Saved Leads Management</h3>
        <p>Alternatively, you can use the built-in functions to manage your list by importing new leads from a text file, exporting your current list to a CSV file for your CRM, or clearing all saved leads at once.</p>
        <img src="/images/leads/step5.png" alt="Results Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
    </div>
  );
  
  const renderContentGeneratorTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Topic Generation Configuration</h3>
        <p>You can select your desired criteria by defining your industry or niche, specifying the target audience, choosing a content angle (like a 'How-to Guide'), and setting an engagement hook to generate the corresponding topic ideas.</p>
        <img src="/images/content/step1.png" alt="Topic Generation Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Generated Topic Ideas</h3>
        <p>You can select your desired topic idea from the results (by its title, description, and associated tags) to use it for the content generator.</p>
        <img src="/images/content/step2.png" alt="Topic Ideas Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Content Generator Configuration</h3>
        <p>You can use the selected topic and customize the output by defining the platform (like 'Website Blog Post'), setting the tone of voice (like 'Professional'), and selecting the word count and writer persona to generate the corresponding content.</p>
        <img src="/images/content/step3.png" alt="Content Config Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Generated Content and Refinement</h3>
        <p>You can review the initial draft in the conversation window, and then use the "Refine Your Content" box by typing further instructions (like 'add a call-to-action') and clicking 'Regenerate' or 'Refine' to adjust the corresponding content.</p>
        <img src="/images/content/step4.png" alt="Content Refinement Step" className="w-full rounded-lg shadow-md mt-4" />
      </div>
    </div>
  );

  const renderLegalConsultantTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. AI Legal Document Analysis</h3>
            <p>You can start a new analysis by dragging and dropping a file, clicking to upload a document (like a PDF, DOCX, or TXT), or selecting a recent project from your list to have the AI summarize, identify risks, and answer questions.</p>
            <img src="/images/legal/step1.png" alt="AI Legal Document Analysis" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. AI Summary Generation</h3>
            <p>You can review the full document text on the left, then use the 'AI Summary' feature by clicking the 'Create Summary' button to generate a corresponding executive summary and key clause identifications.</p>
            <img src="/images/legal/step2.png" alt="AI Summary Generation" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. AI Risk Analysis</h3>
            <p>You can select the 'AI Risk Analysis' feature and click the 'Analyze Risk' button to scan the document and identify corresponding potential legal risks, missing clauses, and compliance issues.</p>
            <img src="/images/legal/step3.png" alt="AI Risk Analysis" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4. AI PII Analysis</h3>
            <p>You can select the 'PII Analysis' feature and click the 'Analyze PII' button to identify Personally Identifiable Information (PII) and get corresponding advice on potential privacy risks.</p>
            <img src="/images/legal/step4.png" alt="AI PII Analysis" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Clause Extraction</h3>
            <p>You can select the 'Extract Clause' feature, then type the clause you want to find (e.g., 'default clause') in the input box, and click 'Submit' to find and extract all relevant parts of the corresponding document.</p>
            <img src="/images/legal/step5.png" alt="Clause Extraction" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">6. Document Translation</h3>
            <p>You can select the 'Translate Document' feature, then choose the target language (e.g., 'English'), and click the 'Translate Document' button to get the corresponding translated version of the text.</p>
            <img src="/images/legal/step6.png" alt="Document Translation" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">7. Document Q&A</h3>
            <p>You can select the 'Document Q&A' feature, then type a specific question (e.g., 'what was the court's decision') in the input box, and click 'Submit' to get a direct answer from the AI along with a citation from the corresponding text.</p>
            <img src="/images/legal/step7.png" alt="Document Q&A" className="w-full rounded-lg shadow-md mt-4" />
        </div>
    </div>
  );

  const renderBusinessAssessmentsTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Business & Technology Assessment Center</h3>
            <p>You can select your desired assessment (by 'AI & Business Automation Readiness', 'Business Growth', 'IT Maturity', or 'Cybersecurity') and click 'Mulai' to gain valuable insights into your company's corresponding readiness.</p>
            <img src="/images/business/step1.png" alt="Assessment Center" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Assessment Questionnaire Process</h3>
            <p>You will be presented with a series of questions (like this question about AI strategy), and you can select the most suitable answer for each question before receiving your assessment results.</p>
            <img src="/images/business/step2.png" alt="Questionnaire Process" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Assessment Result and AI Summary</h3>
            <p>You can see your assessment results (based on the score and 'Development Stage'), and you can use the 'Unlock AI-Powered Insights' feature by clicking 'Create Summary' to generate a corresponding personalized executive summary.</p>
            <img src="/images/business/step3.png" alt="Result and AI Summary" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Key Insights and Detailed Report</h3>
            <p>You can view your assessment results in detail by analyzing the 'Your Readiness Profile' on the radar chart, viewing the 'Next Step Recommendations', or downloading the 'Detailed Report' (PDF) to get the corresponding details.</p>
            <img src="/images/business/step4.png" alt="Key Insights and Report" className="w-full rounded-lg shadow-md mt-4" />
        </div>
    </div>
  );

  const renderMarketAnalystTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-12">
      {/* Tool 1 */}
      <div className="space-y-6 p-6 rounded-lg border border-gray-200 bg-white">
        <h3 className="text-2xl font-bold text-gray-800">Tool 1: Niche Trend & Market Vibe Analysis</h3>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">How to Use</h4>
          <p>Select the 'Niche Trend Analysis' feature, then enter 1-2 keywords (like 'Thailand personal shopping') or click an existing example, and click 'Analyze Now' to identify corresponding market opportunities and visual styles.</p>
          <img src="/images/market/step1.png" alt="Niche Trend Analysis" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">What You'll Get</h4>
          <p>You can view the niche trend analysis results by reviewing the 'Vibe Board' for visual style, reading the 'Spotlight Opportunity' for specific ideas, analyzing the 'Social Media Pulse' (including hashtags and popular content formats), and checking the 'Trend Velocity Projection' to see its corresponding lifecycle.</p>
          <img src="/images/market/step2.png" alt="Niche Trend Results" className="w-full rounded-lg shadow-md mt-4" />
        </div>
      </div>

      {/* Tool 2 */}
      <div className="space-y-6 p-6 rounded-lg border border-gray-200 bg-white">
        <h3 className="text-2xl font-bold text-gray-800">Tool 2: Find Competitors</h3>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">How to Use</h4>
          <p>Select the 'Find Competitors' feature, then enter your product, brand, or service (like 'Plant-based catering'), and click 'Find Competitors' to discover your corresponding competitors in the market.</p>
          <img src="/images/market/step3.png" alt="Find Competitors" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">What You'll Get</h4>
          <p>You can see your competitive map results, divided by 'Direct Competitors' and 'Indirect Competitors', and review the brief description of each business to understand your corresponding market landscape.</p>
          <img src="/images/market/step4.png" alt="Competitor Analysis Results" className="w-full rounded-lg shadow-md mt-4" />
        </div>
      </div>

      {/* Tool 3 */}
      <div className="space-y-6 p-6 rounded-lg border border-gray-200 bg-white">
        <h3 className="text-2xl font-bold text-gray-800">Tool 3: Competitor Research & Product Teardown</h3>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">How to Use</h4>
          <p>Select the 'Competitor Research' feature, then enter a competitor's URL or store name (e.g., 'tokopedia.com/roseallday'), add an optional analysis focus (e.g., 'customer service'), and click 'Analyze Competitor' to tear down their corresponding offerings.</p>
          <img src="/images/market/step5.png" alt="Competitor Research" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">What You'll Get</h4>
          <p>You can review the full analysis report by analyzing the 'Visual Branding Analysis' and 'Competitor Price Benchmarking' (as seen on screen), as well as checking 'Performance Trends Over Time', 'SEO Strength', 'Emotional Appeal', 'Pricing Strategy Analysis', 'Social Proof', 'Related Keywords', 'Customer Sentiment', 'SWOT Analysis', and 'Your Winning Edge' to get corresponding comprehensive insights.</p>
          <img src="/images/market/step6.png" alt="Competitor Research Results" className="w-full rounded-lg shadow-md mt-4" />
        </div>
      </div>

      {/* Tool 4 */}
      <div className="space-y-6 p-6 rounded-lg border border-gray-200 bg-white">
        <h3 className="text-2xl font-bold text-gray-800">Tool 4: Sales Copy Generator</h3>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">How to Use</h4>
          <p>Select the 'Sales Copy Generator' feature, then ask a business question (e.g., 'How to clarify a negative rumor'), or use an existing example, and click 'Analyze & Create Copy' to get a corresponding risk analysis and a safe, effective copy draft.</p>
          <img src="/images/market/step7.png" alt="Sales Copy Generator" className="w-full rounded-lg shadow-md mt-4" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">What You'll Get</h4>
          <p>You can review the generated results by reading the 'Market Reaction Analysis', viewing the 'Risk Estimate', and copying the 'Copy & Paste Ready' draft (e.g., 'Sincere Apology') as needed.</p>
          <img src="/images/market/step8.png" alt="Copy Generator Results" className="w-full rounded-lg shadow-md mt-4" />
        </div>
      </div>
    </div>
  );

  const renderContentMakerTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Content Maker Dashboard</h3>
        <p>You can select 'Create Design from Idea' (by just writing your idea), 'Create Content from Photo' (by uploading your product photo), or choose one of the suggested ideas to start creating your corresponding visual design.</p>
        <img src="/images/content-maker/step1.png" alt="Content Maker Dashboard" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Create Design from Idea</h3>
        <p>You can explain your idea (like '25% Discount Poster') and select a style to generate multiple visual options to choose from. You can then select your favorite visual, choose from several AI-generated captions, edit the selected caption and hashtags in the text box, or click 'Regenerate Caption & Hashtag' to get new corresponding suggestions.</p>
        <img src="/images/content-maker/step2.png" alt="Create Design from Idea" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Create Content from Photo</h3>
        <p>You can upload your product photo (by clicking or drag & drop), then click 'Create Visual' to have the AI generate a visual design, and use 'Regenerate Caption & Hashtag' or manually edit the caption before proceeding to schedule your corresponding post.</p>
        <img src="/images/content-maker/step3.png" alt="Create Content from Photo" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Post Scheduling</h3>
        <p>You will be redirected to the 'Schedule Post' page, where you can review the final content preview, select the platform (like 'Instagram'), choose a specific date and time, and then click 'Confirm Schedule' to set your corresponding post.</p>
        <img src="/images/content-maker/step4.png" alt="Post Scheduling" className="w-full rounded-lg shadow-md mt-4" />
      </div>
       <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Content Schedule</h3>
        <p>After scheduling, you can view your 'Content Schedule' to see all your planned posts (like the 'Nikmati sensasi matcha' post) organized in a calendar view with their corresponding dates and times.</p>
        <img src="/images/content-maker/step5.png" alt="Content Schedule" className="w-full rounded-lg shadow-md mt-4" />
      </div>
       <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">6. Recent Projects Gallery</h3>
        <p>You can view all your 'Recent Projects' in the gallery, select a previous design to re-edit, or click 'Create New Project' to start a corresponding new design.</p>
        <img src="/images/content-maker/step6.png" alt="Recent Projects Gallery" className="w-full rounded-lg shadow-md mt-4" />
      </div>
    </div>
  );
  
  const renderLinkAssistantTutorial = () => (
    <div className="text-gray-700 text-lg leading-relaxed space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. AI Message Generator</h3>
        <p>You can select the 'Message Purpose' (e.g., 'Follow Up'), 'Message Style' (e.g., 'Friendly & Casual'), and provide relevant 'Context', then click 'Create New Template' to generate a corresponding message template.</p>
        <img src="/images/link-assistant/step1.png" alt="AI Message Generator" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Message Template Results</h3>
        <p>You can review the various template results (like 'Ready to Use', 'with Placeholder', or 'Alternative'), then 'Copy' the text or 'Send to WA' (Send to WhatsApp) for the corresponding template.</p>
        <img src="/images/link-assistant/step2.png" alt="Message Template Results" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Multi-Platform Link Generator</h3>
        <p>You can select the 'Platform' (like 'WhatsApp', 'Telegram', or 'Tokopedia'), enter 'Your Link', and then click 'Add to LinkRICE Page' to add the corresponding link to your main page.</p>
        <img src="/images/link-assistant/step3.png" alt="Multi-Platform Link Generator" className="w-full rounded-lg shadow-md mt-4" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Your LinkRICE Page</h3>
        <p>You can set up your page by adding a 'Logo', 'Business Name', and 'Bio', adding 'Link Buttons' (like WhatsApp and Tokopedia), choosing a 'Theme', and viewing the 'Live Preview' before clicking 'Publish' to get your corresponding link.</p>
        <img src="/images/link-assistant/step4.png" alt="Your LinkRICE Page" className="w-full rounded-lg shadow-md mt-4" />
      </div>
       <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Your Published LinkRICE Page</h3>
        <p>After publishing, you will get a unique link that can be accessed anytime, which will display your 'link in bio' page (including your logo, business name, and link buttons) to your corresponding customers.</p>
        <img src="/images/link-assistant/step5.png" alt="Your Published LinkRICE Page" className="w-full rounded-lg shadow-md mt-4" />
      </div>
       <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">6. Smart Link & QR Code Generator</h3>
        <p>You can enter a 'Long Link' (e.g., your Tokopedia link) and click 'Create Smart Link' to get a 'Short Link' and download a 'QR Code' for your corresponding campaign.</p>
        <img src="/images/link-assistant/step6.png" alt="Smart Link & QR Code Generator" className="w-full rounded-lg shadow-md mt-4" />
      </div>
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
                onClick={() => setSelectedFreebie(null)}
                className="mb-8 text-[#5890AD] hover:text-[#477a93] font-semibold flex items-center transition-colors"
                aria-label="Back to freebies list"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Guides List
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedFreebie.title}</h1>
              <p className="text-lg text-gray-600 mb-8">
                {selectedFreebie.summary}
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Use</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore All Guides</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freebiesData.map((freebie) => (
                <div 
                  key={freebie.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col cursor-pointer"
                  onClick={() => setSelectedFreebie(freebie)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setSelectedFreebie(freebie)}
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
            <a href="#" className="flex items-center">
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
                    setSelectedFreebie(null);
                    if (window.innerWidth < 768) {
                      setIsSidebarOpen(false);
                    }
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-base transition-colors duration-200 ${
                    !selectedFreebie
                      ? 'bg-[#9BBBCC] text-white font-semibold shadow'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  All Guides
                </a>
              </li>
               <li className="my-4 border-t border-gray-200"></li>
              {freebiesData.map((freebie) => (
                <li key={freebie.id} className="mt-1">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedFreebie(freebie);
                      if (window.innerWidth < 768) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-base transition-colors duration-200 ${
                      selectedFreebie?.id === freebie.id
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
                  {navLinks.map(link => (
                    <a key={link.name} href="#" className={`flex items-center text-base font-semibold transition-colors ${link.active ? 'text-gray-900 border-b-2 border-[#5890AD] pb-1' : 'text-gray-600 hover:text-gray-900'}`}>
                      {link.name}
                      {link.dropdown && <DropdownIcon />}
                    </a>
                  ))}
                   <a href="https://api.whatsapp.com/send/?phone=6285330168811&text=Hi,+let%27s+schedule+a+time+to+discuss+the+RICE+AI+lead+generator+solution.+I%27m+ready+to+see+how+it+can+help+our+business!&type=phone_number&app_absent=0"
                    target="_blank" rel="noopener noreferrer"
                    className="bg-[#5890AD] text-white font-semibold px-5 py-3 rounded-lg shadow-sm hover:bg-[#477a93] transition-colors">
                    Contact Us
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
