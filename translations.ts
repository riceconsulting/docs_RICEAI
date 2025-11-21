export type Language = 'en' | 'id';

export const resources = {
  en: {
    ui: {
      backToGuides: "Back to Guides List",
      howToUse: "How to Use",
      exploreAll: "Explore All Guides",
      contactUs: "Contact Us",
      allGuides: "All Guides",
      toggleLanguage: "Bahasa Indonesia",
      whatsappMessage: "Hi, I'm interested in learning more about the RICE AI guides. Can you help me?"
    },
    freebies: [
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
    ],
    tutorials: {
      leadsGenerator: [
        {
          title: "1. Configuration",
          text: "You can select your desired criteria by defining the target location and industry, setting the company growth stage, choosing a custom research focus (like SWOT analysis), and describing your product or service to generate the corresponding personalized leads.",
          image: "/images/leads/step1.png"
        },
        {
          title: "2. Advanced Options",
          text: "You can use the advanced options to specify other details, such as inputting your sender name and title, providing your company's website and contact email, and customizing the email or WhatsApp message templates with specific placeholders, to generate more personalized leads.",
          image: "/images/leads/step2.png"
        },
        {
          title: "3. AI Lead Generation in Progress",
          text: "You can monitor the AI's progress in real-time by watching the completion percentage bar advance and viewing the counter of processed leads (e.g., \"Processed 1/2 leads\") as it works to generate your list.",
          image: "/images/leads/step3.png"
        },
        {
          title: "4. Generated Lead Results",
          text: "You can review the generated results by scrolling through the list of companies, reading the brief description for each, and selecting a specific lead to view the corresponding full details and personalized outreach drafts.",
          image: "/images/leads/step4.png"
        },
        {
          title: "5. Saved Leads Management",
          text: "Alternatively, you can use the built-in functions to manage your list by importing new leads from a text file, exporting your current list to a CSV file for your CRM, or clearing all saved leads at once.",
          image: "/images/leads/step5.png"
        }
      ],
      contentGenerator: [
        {
          title: "1. Topic Generation Configuration",
          text: "You can select your desired criteria by defining your industry or niche, specifying the target audience, choosing a content angle (like a 'How-to Guide'), and setting an engagement hook to generate the corresponding topic ideas.",
          image: "/images/content/step1.png"
        },
        {
          title: "2. Generated Topic Ideas",
          text: "You can select your desired topic idea from the results (by its title, description, and associated tags) to use it for the content generator.",
          image: "/images/content/step2.png"
        },
        {
          title: "3. Content Generator Configuration",
          text: "You can use the selected topic and customize the output by defining the platform (like 'Website Blog Post'), setting the tone of voice (like 'Professional'), and selecting the word count and writer persona to generate the corresponding content.",
          image: "/images/content/step3.png"
        },
        {
          title: "4. Generated Content and Refinement",
          text: "You can review the initial draft in the conversation window, and then use the \"Refine Your Content\" box by typing further instructions (like 'add a call-to-action') and clicking 'Regenerate' or 'Refine' to adjust the corresponding content.",
          image: "/images/content/step4.png"
        }
      ],
      legalConsultant: [
        {
          title: "1. AI Legal Document Analysis",
          text: "You can start a new analysis by dragging and dropping a file, clicking to upload a document (like a PDF, DOCX, or TXT), or selecting a recent project from your list to have the AI summarize, identify risks, and answer questions.",
          image: "/images/legal/step1.png"
        },
        {
          title: "2. AI Summary Generation",
          text: "You can review the full document text on the left, then use the 'AI Summary' feature by clicking the 'Create Summary' button to generate a corresponding executive summary and key clause identifications.",
          image: "/images/legal/step2.png"
        },
        {
          title: "3. AI Risk Analysis",
          text: "You can select the 'AI Risk Analysis' feature and click the 'Analyze Risk' button to scan the document and identify corresponding potential legal risks, missing clauses, and compliance issues.",
          image: "/images/legal/step3.png"
        },
        {
          title: "4. AI PII Analysis",
          text: "You can select the 'PII Analysis' feature and click the 'Analyze PII' button to identify Personally Identifiable Information (PII) and get corresponding advice on potential privacy risks.",
          image: "/images/legal/step4.png"
        },
        {
          title: "5. Clause Extraction",
          text: "You can select the 'Extract Clause' feature, then type the clause you want to find (e.g., 'default clause') in the input box, and click 'Submit' to find and extract all relevant parts of the corresponding document.",
          image: "/images/legal/step5.png"
        },
        {
          title: "6. Document Translation",
          text: "You can select the 'Translate Document' feature, then choose the target language (e.g., 'English'), and click the 'Translate Document' button to get the corresponding translated version of the text.",
          image: "/images/legal/step6.png"
        },
        {
          title: "7. Document Q&A",
          text: "You can select the 'Document Q&A' feature, then type a specific question (e.g., 'what was the court's decision') in the input box, and click 'Submit' to get a direct answer from the AI along with a citation from the corresponding text.",
          image: "/images/legal/step7.png"
        }
      ],
      businessAssessments: [
        {
          title: "1. Business & Technology Assessment Center",
          text: "You can select your desired assessment (by 'AI & Business Automation Readiness', 'Business Growth', 'IT Maturity', or 'Cybersecurity') and click 'Mulai' to gain valuable insights into your company's corresponding readiness.",
          image: "/images/business/step1.png"
        },
        {
          title: "2. Assessment Questionnaire Process",
          text: "You will be presented with a series of questions (like this question about AI strategy), and you can select the most suitable answer for each question before receiving your assessment results.",
          image: "/images/business/step2.png"
        },
        {
          title: "3. Assessment Result and AI Summary",
          text: "You can see your assessment results (based on the score and 'Development Stage'), and you can use the 'Unlock AI-Powered Insights' feature by clicking 'Create Summary' to generate a corresponding personalized executive summary.",
          image: "/images/business/step3.png"
        },
        {
          title: "4. Key Insights and Detailed Report",
          text: "You can view your assessment results in detail by analyzing the 'Your Readiness Profile' on the radar chart, viewing the 'Next Step Recommendations', or downloading the 'Detailed Report' (PDF) to get the corresponding details.",
          image: "/images/business/step4.png"
        }
      ],
      marketAnalyst: [
        {
          title: "Tool 1: Niche Trend & Market Vibe Analysis",
          howToUse: {
            title: "How to Use",
            text: "Select the 'Niche Trend Analysis' feature, then enter 1-2 keywords (like 'Thailand personal shopping') or click an existing example, and click 'Analyze Now' to identify corresponding market opportunities and visual styles."
          },
          whatYouGet: {
            title: "What You'll Get",
            text: "You can view the niche trend analysis results by reviewing the 'Vibe Board' for visual style, reading the 'Spotlight Opportunity' for specific ideas, analyzing the 'Social Media Pulse' (including hashtags and popular content formats), and checking the 'Trend Velocity Projection' to see its corresponding lifecycle."
          },
          images: ["/images/market/step1.png", "/images/market/step2.png"]
        },
        {
          title: "Tool 2: Find Competitors",
          howToUse: {
            title: "How to Use",
            text: "Select the 'Find Competitors' feature, then enter your product, brand, or service (like 'Plant-based catering'), and click 'Find Competitors' to discover your corresponding competitors in the market."
          },
          whatYouGet: {
            title: "What You'll Get",
            text: "You can see your competitive map results, divided by 'Direct Competitors' and 'Indirect Competitors', and review the brief description of each business to understand your corresponding market landscape."
          },
          images: ["/images/market/step3.png", "/images/market/step4.png"]
        },
        {
          title: "Tool 3: Competitor Research & Product Teardown",
          howToUse: {
            title: "How to Use",
            text: "Select the 'Competitor Research' feature, then enter a competitor's URL or store name (e.g., 'tokopedia.com/roseallday'), add an optional analysis focus (e.g., 'customer service'), and click 'Analyze Competitor' to tear down their corresponding offerings."
          },
          whatYouGet: {
            title: "What You'll Get",
            text: "You can review the full analysis report by analyzing the 'Visual Branding Analysis' and 'Competitor Price Benchmarking' (as seen on screen), as well as checking 'Performance Trends Over Time', 'SEO Strength', 'Emotional Appeal', 'Pricing Strategy Analysis', 'Social Proof', 'Related Keywords', 'Customer Sentiment', 'SWOT Analysis', and 'Your Winning Edge' to get corresponding comprehensive insights."
          },
          images: ["/images/market/step5.png", "/images/market/step6.png"]
        },
        {
          title: "Tool 4: Sales Copy Generator",
          howToUse: {
            title: "How to Use",
            text: "Select the 'Sales Copy Generator' feature, then ask a business question (e.g., 'How to clarify a negative rumor'), or use an existing example, and click 'Analyze & Create Copy' to get a corresponding risk analysis and a safe, effective copy draft."
          },
          whatYouGet: {
            title: "What You'll Get",
            text: "You can review the generated results by reading the 'Market Reaction Analysis', viewing the 'Risk Estimate', and copying the 'Copy & Paste Ready' draft (e.g., 'Sincere Apology') as needed."
          },
          images: ["/images/market/step7.png", "/images/market/step8.png"]
        }
      ],
      contentMaker: [
        {
          title: "1. Content Maker Dashboard",
          text: "You can select 'Create Design from Idea' (by just writing your idea), 'Create Content from Photo' (by uploading your product photo), or choose one of the suggested ideas to start creating your corresponding visual design.",
          image: "/images/content-maker/step1.png"
        },
        {
          title: "2. Create Design from Idea",
          text: "You can explain your idea (like '25% Discount Poster') and select a style to generate multiple visual options to choose from. You can then select your favorite visual, choose from several AI-generated captions, edit the selected caption and hashtags in the text box, or click 'Regenerate Caption & Hashtag' to get new corresponding suggestions.",
          image: "/images/content-maker/step2.png"
        },
        {
          title: "3. Create Content from Photo",
          text: "You can upload your product photo (by clicking or drag & drop), then click 'Create Visual' to have the AI generate a visual design, and use 'Regenerate Caption & Hashtag' or manually edit the caption before proceeding to schedule your corresponding post.",
          image: "/images/content-maker/step3.png"
        },
        {
          title: "4. Post Scheduling",
          text: "You will be redirected to the 'Schedule Post' page, where you can review the final content preview, select the platform (like 'Instagram'), choose a specific date and time, and then click 'Confirm Schedule' to set your corresponding post.",
          image: "/images/content-maker/step4.png"
        },
        {
          title: "5. Content Schedule",
          text: "After scheduling, you can view your 'Content Schedule' to see all your planned posts (like the 'Nikmati sensasi matcha' post) organized in a calendar view with their corresponding dates and times.",
          image: "/images/content-maker/step5.png"
        },
        {
          title: "6. Recent Projects Gallery",
          text: "You can view all your 'Recent Projects' in the gallery, select a previous design to re-edit, or click 'Create New Project' to start a corresponding new design.",
          image: "/images/content-maker/step6.png"
        }
      ],
      linkAssistant: [
        {
          title: "1. AI Message Generator",
          text: "You can select the 'Message Purpose' (e.g., 'Follow Up'), 'Message Style' (e.g., 'Friendly & Casual'), and provide relevant 'Context', then click 'Create New Template' to generate a corresponding message template.",
          image: "/images/link-assistant/step1.png"
        },
        {
          title: "2. Message Template Results",
          text: "You can review the various template results (like 'Ready to Use', 'with Placeholder', or 'Alternative'), then 'Copy' the text or 'Send to WA' (Send to WhatsApp) for the corresponding template.",
          image: "/images/link-assistant/step2.png"
        },
        {
          title: "3. Multi-Platform Link Generator",
          text: "You can select the 'Platform' (like 'WhatsApp', 'Telegram', or 'Tokopedia'), enter 'Your Link', and then click 'Add to LinkRICE Page' to add the corresponding link to your main page.",
          image: "/images/link-assistant/step3.png"
        },
        {
          title: "4. Your LinkRICE Page",
          text: "You can set up your page by adding a 'Logo', 'Business Name', and 'Bio', adding 'Link Buttons' (like WhatsApp and Tokopedia), choosing a 'Theme', and viewing the 'Live Preview' before clicking 'Publish' to get your corresponding link.",
          image: "/images/link-assistant/step4.png"
        },
        {
          title: "5. Your Published LinkRICE Page",
          text: "After publishing, you will get a unique link that can be accessed anytime, which will display your 'link in bio' page (including your logo, business name, and link buttons) to your corresponding customers.",
          image: "/images/link-assistant/step5.png"
        },
        {
          title: "6. Smart Link & QR Code Generator",
          text: "You can enter a 'Long Link' (e.g., your Tokopedia link) and click 'Create Smart Link' to get a 'Short Link' and download a 'QR Code' for your corresponding campaign.",
          image: "/images/link-assistant/step6.png"
        }
      ]
    }
  },
  id: {
    ui: {
      backToGuides: "Kembali ke Daftar Panduan",
      howToUse: "Cara Penggunaan",
      exploreAll: "Jelajahi Semua Panduan",
      contactUs: "Hubungi Kami",
      allGuides: "Semua Panduan",
      toggleLanguage: "English",
      whatsappMessage: "Halo, saya tertarik untuk mempelajari lebih lanjut tentang panduan RICE AI. Bisakah Anda membantu saya?"
    },
    freebies: [
      {
        id: 1,
        title: "Leads Generator",
        description: "Alat sederhana dan hemat biaya untuk menangani tugas pembuatan prospek yang spesifik dan berdampak tinggi.",
        image: "/images/leads/step1.png",
        summary: "Bagian ini memberikan gambaran umum tentang kinerja karyawan, membantu Anda melacak aktivitas seperti interaksi pelanggan, waktu respons, dan hasil kerja. Data dapat diekspor sebagai file Excel untuk pelacakan dan analisis yang lebih mudah."
      },
      {
        id: 2,
        title: "Content Generator",
        description: "Alat intuitif untuk menghasilkan topik menarik dan menyusun konten berkualitas tinggi untuk berbagai platform.",
        image: "/images/content/step1.png",
        summary: "Bagian ini memberikan gambaran umum tentang Content Generator, membantu Anda membuat topik menarik dan menyusun konten berkualitas tinggi untuk berbagai platform. Prosesnya disederhanakan untuk kemudahan penggunaan dan penyempurnaan."
      },
      {
        id: 3,
        title: "AI Legal Consultant",
        description: "Analisis dokumen hukum, identifikasi risiko, dan dapatkan jawaban dari kontrak Anda.",
        image: "/images/legal/step1.png",
        summary: "AI Legal Consultant memberdayakan Anda untuk menganalisis dokumen, mengidentifikasi risiko, mengekstrak klausul, menerjemahkan teks, dan mendapatkan jawaban atas pertanyaan hukum Anda secara instan."
      },
      {
        id: 4,
        title: "Business & Technology Assessments",
        description: "Dapatkan wawasan berharga tentang kesiapan dan potensi pertumbuhan perusahaan Anda.",
        image: "/images/business/step1.png",
        summary: "Gunakan alat penilaian kami untuk mengukur kesiapan AI, pertumbuhan bisnis, kematangan TI, dan postur keamanan siber perusahaan Anda, lengkap dengan wawasan bertenaga AI."
      },
      {
        id: 5,
        title: "AI Market Analyst",
        description: "Temukan tren pasar, cari kompetitor, dan hasilkan naskah penjualan yang efektif.",
        image: "/images/market/step1.png",
        summary: "AI Market Analyst membantu Anda mengidentifikasi tren niche, menganalisis kompetitor, membedah produk mereka, dan menghasilkan naskah penjualan yang menarik dengan analisis risiko."
      },
      {
        id: 6,
        title: "Content Maker",
        description: "Buat visual yang memukau dari ide atau foto, lengkap dengan keterangan yang dibuat oleh AI.",
        image: "/images/content-maker/step1.png",
        summary: "Dari ide hingga posting terjadwal, Content Maker menyederhanakan pembuatan konten visual Anda. Buat desain, dapatkan keterangan bertenaga AI, dan jadwalkan posting Anda ke platform seperti Instagram, semua dalam satu alur kerja."
      },
      {
        id: 7,
        title: "Link Assistant",
        description: "Buat template pesan, buat halaman link-in-bio, dan perpendek tautan dengan kode QR.",
        image: "/images/link-assistant/step1.png",
        summary: "Link Assistant membantu Anda melibatkan pelanggan secara efektif. Buat pesan yang disesuaikan, bangun halaman link-in-bio profesional, dan buat tautan pintar serta kode QR untuk mengarahkan lalu lintas ke platform utama Anda."
      },
    ],
    tutorials: {
      leadsGenerator: [
        {
          title: "1. Konfigurasi",
          text: "Anda dapat memilih kriteria yang diinginkan dengan menentukan target lokasi dan industri, menetapkan tahap pertumbuhan perusahaan, memilih fokus penelitian khusus (seperti analisis SWOT), dan mendeskripsikan produk atau layanan Anda untuk menghasilkan prospek yang dipersonalisasi.",
          image: "/images/leads/step1.png"
        },
        {
          title: "2. Opsi Lanjutan",
          text: "Anda dapat menggunakan opsi lanjutan untuk menentukan detail lainnya, seperti memasukkan nama dan jabatan pengirim, menyediakan situs web dan email kontak perusahaan, serta menyesuaikan template email atau pesan WhatsApp dengan placeholder tertentu, untuk menghasilkan prospek yang lebih personal.",
          image: "/images/leads/step2.png"
        },
        {
          title: "3. Pembuatan Prospek AI Sedang Berlangsung",
          text: "Anda dapat memantau kemajuan AI secara real-time dengan melihat bilah persentase penyelesaian bergerak maju dan melihat penghitung prospek yang diproses (misalnya, \"Diproses 1/2 prospek\") saat ia bekerja untuk menghasilkan daftar Anda.",
          image: "/images/leads/step3.png"
        },
        {
          title: "4. Hasil Prospek yang Dihasilkan",
          text: "Anda dapat meninjau hasil yang dihasilkan dengan menggulir daftar perusahaan, membaca deskripsi singkat untuk masing-masing, dan memilih prospek tertentu untuk melihat detail lengkap dan draf penjangkauan yang dipersonalisasi.",
          image: "/images/leads/step4.png"
        },
        {
          title: "5. Manajemen Prospek Tersimpan",
          text: "Sebagai alternatif, Anda dapat menggunakan fungsi bawaan untuk mengelola daftar Anda dengan mengimpor prospek baru dari file teks, mengekspor daftar Anda saat ini ke file CSV untuk CRM Anda, atau menghapus semua prospek yang tersimpan sekaligus.",
          image: "/images/leads/step5.png"
        }
      ],
      contentGenerator: [
        {
          title: "1. Konfigurasi Pembuatan Topik",
          text: "Anda dapat memilih kriteria yang diinginkan dengan menentukan industri atau niche Anda, menentukan audiens target, memilih sudut pandang konten (seperti 'Panduan Cara'), dan menetapkan pancingan keterlibatan untuk menghasilkan ide topik yang sesuai.",
          image: "/images/content/step1.png"
        },
        {
          title: "2. Ide Topik yang Dihasilkan",
          text: "Anda dapat memilih ide topik yang diinginkan dari hasil (berdasarkan judul, deskripsi, dan tag terkait) untuk digunakan pada pembuat konten.",
          image: "/images/content/step2.png"
        },
        {
          title: "3. Konfigurasi Pembuat Konten",
          text: "Anda dapat menggunakan topik yang dipilih dan menyesuaikan output dengan menentukan platform (seperti 'Postingan Blog Website'), mengatur nada suara (seperti 'Profesional'), dan memilih jumlah kata serta persona penulis untuk menghasilkan konten yang sesuai.",
          image: "/images/content/step3.png"
        },
        {
          title: "4. Konten yang Dihasilkan dan Penyempurnaan",
          text: "Anda dapat meninjau draf awal di jendela percakapan, dan kemudian menggunakan kotak \"Sempurnakan Konten Anda\" dengan mengetik instruksi lebih lanjut (seperti 'tambahkan ajakan bertindak') dan mengklik 'Regenerate' atau 'Refine' untuk menyesuaikan konten yang sesuai.",
          image: "/images/content/step4.png"
        }
      ],
      legalConsultant: [
        {
          title: "1. Analisis Dokumen Hukum AI",
          text: "Anda dapat memulai analisis baru dengan menyeret dan menjatuhkan file, mengklik untuk mengunggah dokumen (seperti PDF, DOCX, atau TXT), atau memilih proyek terbaru dari daftar Anda untuk meminta AI meringkas, mengidentifikasi risiko, dan menjawab pertanyaan.",
          image: "/images/legal/step1.png"
        },
        {
          title: "2. Pembuatan Ringkasan AI",
          text: "Anda dapat meninjau teks dokumen lengkap di sebelah kiri, lalu menggunakan fitur 'AI Summary' dengan mengklik tombol 'Create Summary' untuk menghasilkan ringkasan eksekutif dan identifikasi klausul utama yang sesuai.",
          image: "/images/legal/step2.png"
        },
        {
          title: "3. Analisis Risiko AI",
          text: "Anda dapat memilih fitur 'AI Risk Analysis' dan mengklik tombol 'Analyze Risk' untuk memindai dokumen dan mengidentifikasi potensi risiko hukum, klausul yang hilang, dan masalah kepatuhan yang sesuai.",
          image: "/images/legal/step3.png"
        },
        {
          title: "4. Analisis PII AI",
          text: "Anda dapat memilih fitur 'PII Analysis' dan mengklik tombol 'Analyze PII' untuk mengidentifikasi Informasi Identifikasi Pribadi (PII) dan mendapatkan saran yang sesuai tentang potensi risiko privasi.",
          image: "/images/legal/step4.png"
        },
        {
          title: "5. Ekstraksi Klausul",
          text: "Anda dapat memilih fitur 'Extract Clause', lalu ketik klausul yang ingin Anda temukan (misalnya, 'klausul default') di kotak input, dan klik 'Submit' untuk menemukan dan mengekstrak semua bagian relevan dari dokumen yang sesuai.",
          image: "/images/legal/step5.png"
        },
        {
          title: "6. Terjemahan Dokumen",
          text: "Anda dapat memilih fitur 'Translate Document', lalu pilih bahasa target (misalnya, 'Inggris'), dan klik tombol 'Translate Document' untuk mendapatkan versi teks terjemahan yang sesuai.",
          image: "/images/legal/step6.png"
        },
        {
          title: "7. Tanya Jawab Dokumen",
          text: "Anda dapat memilih fitur 'Document Q&A', lalu ketik pertanyaan spesifik (misalnya, 'apa keputusan pengadilan') di kotak input, dan klik 'Submit' untuk mendapatkan jawaban langsung dari AI beserta kutipan dari teks yang sesuai.",
          image: "/images/legal/step7.png"
        }
      ],
      businessAssessments: [
        {
          title: "1. Pusat Penilaian Bisnis & Teknologi",
          text: "Anda dapat memilih penilaian yang diinginkan (berdasarkan 'Kesiapan AI & Otomatisasi Bisnis', 'Pertumbuhan Bisnis', 'Kematangan TI', atau 'Keamanan Siber') dan klik 'Mulai' untuk mendapatkan wawasan berharga tentang kesiapan perusahaan Anda yang sesuai.",
          image: "/images/business/step1.png"
        },
        {
          title: "2. Proses Kuesioner Penilaian",
          text: "Anda akan disajikan serangkaian pertanyaan (seperti pertanyaan tentang strategi AI ini), dan Anda dapat memilih jawaban yang paling sesuai untuk setiap pertanyaan sebelum menerima hasil penilaian Anda.",
          image: "/images/business/step2.png"
        },
        {
          title: "3. Hasil Penilaian dan Ringkasan AI",
          text: "Anda dapat melihat hasil penilaian Anda (berdasarkan skor dan 'Tahap Pengembangan'), dan Anda dapat menggunakan fitur 'Unlock AI-Powered Insights' dengan mengklik 'Create Summary' untuk menghasilkan ringkasan eksekutif yang dipersonalisasi.",
          image: "/images/business/step3.png"
        },
        {
          title: "4. Wawasan Utama dan Laporan Rinci",
          text: "Anda dapat melihat hasil penilaian Anda secara rinci dengan menganalisis 'Profil Kesiapan Anda' pada grafik radar, melihat 'Rekomendasi Langkah Selanjutnya', atau mengunduh 'Laporan Rinci' (PDF) untuk mendapatkan detail yang sesuai.",
          image: "/images/business/step4.png"
        }
      ],
      marketAnalyst: [
        {
          title: "Alat 1: Analisis Tren Niche & Vibe Pasar",
          howToUse: {
            title: "Cara Penggunaan",
            text: "Pilih fitur 'Niche Trend Analysis', lalu masukkan 1-2 kata kunci (seperti 'belanja pribadi Thailand') atau klik contoh yang ada, dan klik 'Analyze Now' untuk mengidentifikasi peluang pasar dan gaya visual yang sesuai."
          },
          whatYouGet: {
            title: "Apa yang Anda Dapatkan",
            text: "Anda dapat melihat hasil analisis tren niche dengan meninjau 'Vibe Board' untuk gaya visual, membaca 'Spotlight Opportunity' untuk ide-ide spesifik, menganalisis 'Social Media Pulse' (termasuk tagar dan format konten populer), dan memeriksa 'Trend Velocity Projection' untuk melihat siklus hidup yang sesuai."
          },
          images: ["/images/market/step1.png", "/images/market/step2.png"]
        },
        {
          title: "Alat 2: Temukan Kompetitor",
          howToUse: {
            title: "Cara Penggunaan",
            text: "Pilih fitur 'Find Competitors', lalu masukkan produk, merek, atau layanan Anda (seperti 'Katering nabati'), dan klik 'Find Competitors' untuk menemukan kompetitor Anda yang sesuai di pasar."
          },
          whatYouGet: {
            title: "Apa yang Anda Dapatkan",
            text: "Anda dapat melihat hasil peta kompetitif Anda, dibagi menjadi 'Kompetitor Langsung' dan 'Kompetitor Tidak Langsung', dan meninjau deskripsi singkat dari setiap bisnis untuk memahami lanskap pasar Anda yang sesuai."
          },
          images: ["/images/market/step3.png", "/images/market/step4.png"]
        },
        {
          title: "Alat 3: Riset Kompetitor & Bedah Produk",
          howToUse: {
            title: "Cara Penggunaan",
            text: "Pilih fitur 'Competitor Research', lalu masukkan URL atau nama toko kompetitor (misalnya, 'tokopedia.com/roseallday'), tambahkan fokus analisis opsional (misalnya, 'layanan pelanggan'), dan klik 'Analyze Competitor' untuk membedah penawaran mereka yang sesuai."
          },
          whatYouGet: {
            title: "Apa yang Anda Dapatkan",
            text: "Anda dapat meninjau laporan analisis lengkap dengan menganalisis 'Visual Branding Analysis' dan 'Competitor Price Benchmarking' (seperti yang terlihat di layar), serta memeriksa 'Performance Trends Over Time', 'SEO Strength', 'Emotional Appeal', 'Pricing Strategy Analysis', 'Social Proof', 'Related Keywords', 'Customer Sentiment', 'SWOT Analysis', dan 'Your Winning Edge' untuk mendapatkan wawasan komprehensif yang sesuai."
          },
          images: ["/images/market/step5.png", "/images/market/step6.png"]
        },
        {
          title: "Alat 4: Generator Naskah Penjualan",
          howToUse: {
            title: "Cara Penggunaan",
            text: "Pilih fitur 'Sales Copy Generator', lalu ajukan pertanyaan bisnis (misalnya, 'Bagaimana mengklarifikasi rumor negatif'), atau gunakan contoh yang ada, dan klik 'Analyze & Create Copy' untuk mendapatkan analisis risiko dan draf naskah yang aman dan efektif."
          },
          whatYouGet: {
            title: "Apa yang Anda Dapatkan",
            text: "Anda dapat meninjau hasil yang dihasilkan dengan membaca 'Market Reaction Analysis', melihat 'Risk Estimate', dan menyalin draf 'Copy & Paste Ready' (misalnya, 'Permintaan Maaf Tulus') sesuai kebutuhan."
          },
          images: ["/images/market/step7.png", "/images/market/step8.png"]
        }
      ],
      contentMaker: [
        {
          title: "1. Dasbor Content Maker",
          text: "Anda dapat memilih 'Create Design from Idea' (hanya dengan menulis ide Anda), 'Create Content from Photo' (dengan mengunggah foto produk Anda), atau memilih salah satu ide yang disarankan untuk mulai membuat desain visual yang sesuai.",
          image: "/images/content-maker/step1.png"
        },
        {
          title: "2. Buat Desain dari Ide",
          text: "Anda dapat menjelaskan ide Anda (seperti 'Poster Diskon 25%') dan memilih gaya untuk menghasilkan beberapa opsi visual untuk dipilih. Anda kemudian dapat memilih visual favorit Anda, memilih dari beberapa keterangan yang dibuat oleh AI, mengedit keterangan dan tagar yang dipilih di kotak teks, atau mengklik 'Regenerate Caption & Hashtag' untuk mendapatkan saran baru yang sesuai.",
          image: "/images/content-maker/step2.png"
        },
        {
          title: "3. Buat Konten dari Foto",
          text: "Anda dapat mengunggah foto produk Anda (dengan mengklik atau seret & lepas), lalu klik 'Create Visual' agar AI menghasilkan desain visual, dan gunakan 'Regenerate Caption & Hashtag' atau edit keterangan secara manual sebelum melanjutkan untuk menjadwalkan posting Anda yang sesuai.",
          image: "/images/content-maker/step3.png"
        },
        {
          title: "4. Penjadwalan Posting",
          text: "Anda akan diarahkan ke halaman 'Schedule Post', di mana Anda dapat meninjau pratinjau konten akhir, memilih platform (seperti 'Instagram'), memilih tanggal dan waktu tertentu, lalu klik 'Confirm Schedule' untuk mengatur posting Anda yang sesuai.",
          image: "/images/content-maker/step4.png"
        },
        {
          title: "5. Jadwal Konten",
          text: "Setelah menjadwalkan, Anda dapat melihat 'Content Schedule' Anda untuk melihat semua posting yang direncanakan (seperti posting 'Nikmati sensasi matcha') yang diatur dalam tampilan kalender dengan tanggal dan waktu yang sesuai.",
          image: "/images/content-maker/step5.png"
        },
        {
          title: "6. Galeri Proyek Terbaru",
          text: "Anda dapat melihat semua 'Recent Projects' Anda di galeri, memilih desain sebelumnya untuk diedit ulang, atau mengklik 'Create New Project' untuk memulai desain baru yang sesuai.",
          image: "/images/content-maker/step6.png"
        }
      ],
      linkAssistant: [
        {
          title: "1. Generator Pesan AI",
          text: "Anda dapat memilih 'Message Purpose' (misalnya, 'Tindak Lanjut'), 'Message Style' (misalnya, 'Ramah & Santai'), dan memberikan 'Konteks' yang relevan, lalu klik 'Create New Template' untuk menghasilkan template pesan yang sesuai.",
          image: "/images/link-assistant/step1.png"
        },
        {
          title: "2. Hasil Template Pesan",
          text: "Anda dapat meninjau berbagai hasil template (seperti 'Siap Pakai', 'dengan Placeholder', atau 'Alternatif'), lalu 'Salin' teks atau 'Kirim ke WA' (Kirim ke WhatsApp) untuk template yang sesuai.",
          image: "/images/link-assistant/step2.png"
        },
        {
          title: "3. Generator Tautan Multi-Platform",
          text: "Anda dapat memilih 'Platform' (seperti 'WhatsApp', 'Telegram', atau 'Tokopedia'), masukkan 'Tautan Anda', lalu klik 'Add to LinkRICE Page' untuk menambahkan tautan yang sesuai ke halaman utama Anda.",
          image: "/images/link-assistant/step3.png"
        },
        {
          title: "4. Halaman LinkRICE Anda",
          text: "Anda dapat mengatur halaman Anda dengan menambahkan 'Logo', 'Nama Bisnis', dan 'Bio', menambahkan 'Tombol Tautan' (seperti WhatsApp dan Tokopedia), memilih 'Tema', dan melihat 'Pratinjau Langsung' sebelum mengklik 'Publish' untuk mendapatkan tautan Anda yang sesuai.",
          image: "/images/link-assistant/step4.png"
        },
        {
          title: "5. Halaman LinkRICE Anda yang Diterbitkan",
          text: "Setelah diterbitkan, Anda akan mendapatkan tautan unik yang dapat diakses kapan saja, yang akan menampilkan halaman 'link in bio' Anda (termasuk logo, nama bisnis, dan tombol tautan) kepada pelanggan Anda yang sesuai.",
          image: "/images/link-assistant/step5.png"
        },
        {
          title: "6. Generator Tautan Pintar & Kode QR",
          text: "Anda dapat memasukkan 'Tautan Panjang' (misalnya, tautan Tokopedia Anda) dan klik 'Create Smart Link' untuk mendapatkan 'Tautan Pendek' dan mengunduh 'Kode QR' untuk kampanye Anda yang sesuai.",
          image: "/images/link-assistant/step6.png"
        }
      ]
    }
  }
};
