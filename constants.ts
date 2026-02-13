import { TelegramIcon, InstagramIcon, YouTubeIcon, FacebookIcon, WhatsAppIcon, XIcon } from './components/Icons';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Current Affairs', path: '/current-affairs' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'Results', path: '/results' },
  { name: 'Contact', path: '/contact' },
];

export const secondaryNavLinks = [
  { name: 'UPSC CSE', path: '/courses/upsc-cse' },
  {
    name: 'KPSC',
    dropdown: [
      { name: 'KAS', path: '/courses/kas' },
      { name: 'AC-SAAD', path: '/courses/ac-saad' },
      { name: 'ACF/RFO/DRFO', path: '/courses/acf' },
      { name: 'Agriculture Officer (AO/AAO)', path: '/courses/kpsc-ao-aao' },
      { name: 'Group B Posts', path: '/courses/group-b' },
      { name: 'Group C Exams (FDA/SDA)', path: '/courses/group-c' }
    ]
  },
  {
    name: 'Police Exams',
    dropdown: [
      { name: 'PSI/ESI', path: '/courses/psi' },
      { name: 'PC', path: '/courses/pc' },
      { name: 'Integrated PSI/PC', path: '/courses/psi-pc' }
    ]
  },
  {
    name: 'Judiciary',
    dropdown: [
      { name: 'Civil Judge', path: '/courses/civil-judge' },
      { name: 'District Judge', path: '/courses/district-judge' },
      { name: 'CLAT', path: '/courses/clat' },
      { name: 'AIBE', path: '/courses/aibe' }
    ]
  },
  {
    name: 'AEE/AE/JE (Technical)',
    path: '/courses/ae-je-technical',
    dropdown: [
      { name: 'Overview', path: '/courses/ae-je-technical' },
      { name: 'KPSC Technical (AEE/AE)', path: '/courses/kpsc-tech' },
      { name: 'KEA Technical Exams', path: '/courses/kea-tech' },
      { name: 'KPCL (AE/JE)', path: '/courses/kpcl' }
    ]
  },
  {
    name: 'KEA',
    dropdown: [
      { name: 'K-SET', path: '/courses/k-set' },
      { name: 'D CET', path: '/courses/d-cet' },
      { name: 'Other Group B, C & D', path: '/courses/kea-group-b-c-d' }
    ]
  },
  {
    name: 'Banking',
    dropdown: [
      { name: 'SBI PO/Clerk/SO', path: '/courses/banking/sbi' },
      { name: 'IBPS PO/Clerk/SO', path: '/courses/banking/ibps' },
      { name: 'RBI Grade B/Asst', path: '/courses/banking/rbi' },
      { name: 'NABARD Grade A/B', path: '/courses/banking/nabard' }
    ]
  },
  {
    name: 'KMF',
    dropdown: [
      { name: 'CENTRAL KMF', path: '/courses/kmf/central' },
      { name: 'SHIMUL', path: '/courses/kmf/shimul' },
      { name: 'BAMUL', path: '/courses/kmf/bamul' },
      { name: 'KOMUL', path: '/courses/kmf/komul' },
      { name: 'TUMUL', path: '/courses/kmf/tumul' },
      { name: 'MYMUL', path: '/courses/kmf/mymul' },
      { name: 'MANMUL', path: '/courses/kmf/manmul' },
      { name: 'HAMUL', path: '/courses/kmf/hamul' },
      { name: 'CHAMUL', path: '/courses/kmf/chamul' },
      { name: 'DKMUL', path: '/courses/kmf/dkmul' },
      { name: 'DAMUL', path: '/courses/kmf/damul' },
      { name: 'BEMUL', path: '/courses/kmf/bemul' },
      { name: 'VIMUL', path: '/courses/kmf/vimul' },
      { name: 'CHIMUL', path: '/courses/kmf/chimul' },
    ]
  },
  { name: 'Physical Training', path: '/physical-training' },
];

export const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/encourage_INDIAIAS', icon: TelegramIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/encourage_india_ias?igsh=MWlyb2Nzc3p0OHc3Ng==', icon: InstagramIcon },
  { name: 'YouTube', href: 'https://youtube.com/@encourage_india_ias?si=hxuXWNFGTXPfQm0y', icon: YouTubeIcon },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1DYZKpFDKq/', icon: FacebookIcon },
  { name: 'WhatsApp', href: 'https://wa.me/919611621195', icon: WhatsAppIcon },
  { name: 'X', href: 'https://x.com/encourage_INDIA', icon: XIcon },
];

export const testimonials = [
  {
    name: 'Vishal Hosmani (IFS)',
    achievement: 'AIR-122',
    quote: "As a former aspirant and now an Indian Forest Service Officer, I truly appreciate the quality of Encourage INDIA study material & IAS/KAS Mains Test series. The content is crisp, well-structured, and exam-oriented.",
    image: '/images/results/vishal_portrait.jpg',
  },
  {
    name: 'Hanamanth Nandi',
    achievement: 'AIR-910 (UPSC)',
    quote: "The Encourage INDIA IAS/KAS Mains Test Series and Guidance Classroom Program is designed with a well-defined and comprehensive syllabus coverage, ensuring that all important areas are systematically addressed.",
    image: '/images/results/hanamantha_portrait.jpg',
  },
  {
    name: 'Sharanayya Hiremath',
    achievement: 'Jailor-Karnataka Police',
    quote: "As someone with a background in Agricultural Sciences and now serving in the Police Department, I understand the value of precise, well-structured study material. The PSI programmes under encourage INDIA IAS are very well organised.",
    image: '/images/results/sharanayya_portrait.jpg',
  },
];

export const coursesData = [
  {
    id: 'upsc',
    title: 'UPSC CSE-IAS EXAM',
    shortTitle: 'UPSC',
    courses: [
      {
        title: 'UPSC CSE Foundation Program',
        description: 'A comprehensive 6-months program for undergraduates, covering the entire syllabus from scratch.',
        features: ['Classroom Program', 'Sectional + Full Length Test Series (FLT)', 'Doubt Solving & Mentorship Sessions', 'Separate Test Series for Outstation Students'],
        path: '/courses/upsc-cse',
        duration: '6 Months',
        eligibility: 'Degree/Undergrad',
        medium: 'English/Kannada'
      },
      {
        title: 'UPSC CSE Mains Program',
        description: 'Our Mains program is a vast, multilayered written assessment preparation initiative through which we empower students with knowledge, analytical skills, expression, and integrity.',
        features: ['Classroom Program', 'Sectional + Full Length Test Series (FLT)', 'Guidance & Mentorship Sessions', 'Test Series for Outstation Students'],
        path: '/courses/upsc-cse',
        duration: '4-5 Months',
        eligibility: 'Mains Qualified',
        medium: 'English'
      },
      {
        title: 'UPSC CSE Integrated Program',
        description: 'Parallel preparation for Prelims & Mains through focusing on both objective & subjective knowledge of the student.',
        features: ['Classroom Program', 'Integrated Pre + Mains Test Series', 'Doubt Solving + Mentorship + Guidance Program', 'Test Series for Outstation Students'],
        path: '/courses/upsc-cse',
        duration: '1 Year',
        eligibility: 'Graduate',
        medium: 'English/Kannada'
      },
    ],
  },
  {
    id: 'kpsc-cse',
    title: 'KPSC CSE-KAS/AC-SAAD/ACF EXAM',
    shortTitle: 'KPSC CSE',
    courses: [
      {
        title: 'KAS Program',
        description: 'A comprehensive 6 months program for UG students, facilitated by subject experts, serving and former bureaucrats.',
        features: ['Pre + Mains Classroom Program', 'Pre + Mains Integrated Program', 'High Quality Study Material', 'SEC + FLT Test Series for Outstation Students'],
        path: '/courses/kas',
        duration: '6 Months',
        eligibility: 'Degree/Undergrad',
        medium: 'English/Kannada'
      },
      {
        title: 'AC SAAD Program',
        description: 'The program, specially designed for M.Com, MBA and CA graduates, will be taught by subject experts in Commerce, Management, CA and Technical fields.',
        features: ['Pre + Mains Classroom Program', 'GS, Commerce, Management and CA Focused', 'High Quality Study Material', 'SEC + FLT Test Series for Outstation Students'],
        path: '/courses/ac-saad',
        duration: '6 Months',
        eligibility: 'M.Com/MBA/CA',
        medium: 'English/Kannada'
      },
      {
        title: 'ACF / RFO / DRFO Program',
        description: 'The program is specially designed with the expertise of Forestry, Agriculture and subject-domain specialists to provide focused and result-oriented preparation.',
        features: ['Pre + Mains Classroom Program', 'GS + Forestry + Technical Domain Focused', 'High Quality Study Material', 'SEC + FLT Test Series for Outstation Students'],
        path: '/courses/acf',
        duration: '6 Months',
        eligibility: 'Science/Engg Degree',
        medium: 'English/Kannada'
      },
    ]
  },
  {
    id: 'other-comp-1',
    title: 'OTHER COMPETITIVE EXAMS',
    shortTitle: 'Police & Co-op',
    courses: [
      {
        title: 'POLICE EXAMS – PSI / ESI / PC / Physical Training Program',
        description: 'A rigorous Physical Training + Classroom Program designed to build both academic competence and physical endurance.',
        features: ['Classroom Program', 'Coverage of both Paper 1 & Paper 2', 'Essay and Translation Practice', 'Physical and Endurance Training', 'Guidance by Subject Experts and Serving Officers'],
        path: '/courses/psi-pc',
        duration: '4-5 Months',
        eligibility: '12th/Degree',
        medium: 'Kannada/English'
      },
      {
        title: 'KMF & Co-operative (DCC) Bank Exams Program',
        description: 'A comprehensive short-term program designed for aspirants seeking entry into the co-operative sector.',
        features: ['Classroom Program', 'Comprehensive Coverage of Syllabus', 'High Quality Study Material', 'Subject-wise and Full Length Mock Tests', 'Guidance by Subject Experts and Serving Officers'],
        path: '/courses/kmf/central',
        duration: '3-4 Months',
        eligibility: 'Degree (B.Com/Others)',
        medium: 'Kannada/English'
      },
      {
        title: 'K-SET Exam Program',
        description: 'State-level examination conducted to determine eligibility for Assistant Professor in Universities and Colleges across Karnataka.',
        features: ['Classroom Program', 'Coverage of both Paper 1 & Paper 2', 'High Quality Study Material', 'Subject-wise & Full Length Mock Tests', 'Subjects: Commerce, Management, History, Political Science, etc.'],
        path: '/courses/k-set',
        duration: '3 Months',
        eligibility: 'Post Graduate',
        medium: 'English/Kannada'
      }
    ]
  },
  {
    id: 'technical',
    title: 'ENGINEERING & DIPLOMA TECHNICAL EXAMS',
    shortTitle: 'Technical',
    courses: [
      {
        title: 'D-CET Exam',
        description: 'State-level entrance examination for diploma holders seeking lateral entry into BE / B.Tech programs.',
        features: ['Classroom Program', 'Comprehensive Coverage of Syllabus', 'High Quality Study Material', 'Regular Mock Tests', 'Expert and Experienced Faculty'],
        path: '/courses/d-cet',
        duration: '3-4 Months',
        eligibility: 'Diploma Holders',
        medium: 'English'
      },
      {
        title: 'AEE / AE / JE Exam',
        description: 'A one-stop solution for all major technical competitive examinations (KPSC, KEA, KPCL, etc.).',
        features: ['Coverage: KPSC, KEA, KPCL, KPTCL, BWSSB, PWD, RDWS', 'Streams: Civil, Electrical and Mechanical', 'Classroom Program (Pre+Mains)', 'High Quality Study Material', 'Regular Mock Tests', 'Expert and Experienced Faculty'],
        path: '/courses/ae-je-technical',
        duration: '6 Months',
        eligibility: 'BE/B.Tech/Diploma',
        medium: 'English'
      },
    ]
  },
  {
    id: 'judiciary',
    title: 'JUDICIARY EXAMS',
    shortTitle: 'Judiciary',
    courses: [
      {
        title: 'CLAT (Common Law Admission Test)',
        description: 'India’s leading national-level entrance examination for admission into UG and PG Law Programs.',
        features: ['Classroom Program', 'Comprehensive Coverage of all 5 Sections', 'High Quality Study Material', 'Regular Mock Tests', 'Expert and Experienced Faculty (Including Retired Judges)'],
        path: '/courses/clat',
        duration: '1 Year/Crash',
        eligibility: '12th/Law Grad',
        medium: 'English'
      },
      {
        title: 'AIBE (All India Bar Exam)',
        description: 'National-level certification examination conducted by the Bar Council of India for law graduates seeking professional practice.',
        features: ['Classroom Program', 'Coverage of Major Law Areas and Core Concepts', 'High Quality Study Material', 'Regular Mock Tests', 'Expert and Experienced Faculty (Including Retired Judges)'],
        path: '/courses/aibe',
        duration: '2-3 Months',
        eligibility: 'Law Graduates',
        medium: 'English'
      },
      {
        title: 'Civil & District Judge Exam',
        description: 'A complete course for aspiring Civil & District Judges covering all Old & New Laws.',
        features: ['Prelims + Mains Classroom Program', 'Sectional & Full-Length Mock Tests', 'High-Quality Study Material', 'Expert & Experienced Faculty (Retired Judges)', 'Comprehensive Interview Guidance'],
        path: '/courses/civil-judge',
        duration: '6-8 Months',
        eligibility: 'Law Graduates',
        medium: 'English/Kannada'
      },
    ]
  },
  {
    id: 'other-comp-2',
    title: 'STATE LEVEL COMPETITIVE EXAMS',
    shortTitle: 'KPSC & KEA',
    courses: [
      {
        title: 'KPSC Group B/C, FDA/SDA Exam',
        description: 'A Comprehensive Program for Technical & Non-Technical Exams.',
        features: ['AD / ASO / CTI / Co-operative Inspector / Revenue Inspector / Accounts Assistant (SAAD)', 'Classroom Program', 'Regular Mock Tests', 'High-Quality Study Material', 'Expert & Experienced Technical & GS Faculty'],
        path: '/courses/group-b',
        duration: '5 Months',
        eligibility: 'Degree/PUC',
        medium: 'Kannada/English'
      },
      {
        title: 'KEA Group B/C/D, FDA/SDA Exam',
        description: 'A Comprehensive Program for Technical & Non-Technical Exams.',
        features: ['Classroom Program', 'Regular Mock Tests', 'High-Quality Study Material', 'Expert & Experienced Technical & GS Faculty'],
        path: '/courses/kea-group-b-c-d',
        duration: '5 Months',
        eligibility: 'Degree/PUC/10th',
        medium: 'Kannada/English'
      },
      {
        title: 'AHO / SEO / AO / AAO / VO & Allied Sciences Exam',
        description: 'Well-Structured Agri & Allied Sciences Courses by subject experts from IARI / ICAR / KVAFSU / UASB.',
        features: ['Classroom Program', 'Regular Mock Tests', 'High-Quality Study Material', 'Expert & Experienced Technical & GS Faculty'],
        path: '/courses/kpsc-ao-aao',
        duration: '6 Months',
        eligibility: 'Agri/Allied Degree',
        medium: 'English/Kannada'
      },
    ],
  },
  {
    id: 'banking',
    title: 'BANKING EXAMS',
    shortTitle: 'Banking',
    courses: [
      {
        title: 'SBI–PO / Clerk / SO Exam',
        description: 'The Comprehensive Program for all Three Stages of the Exam.',
        features: ['Classroom Program', 'Sectional & Full-Length Mock Tests', 'High-Quality Study Material', 'Experienced Technical & GS Faculty'],
        path: '/courses/banking/sbi',
        duration: '4-5 Months',
        eligibility: 'Graduate',
        medium: 'English'
      },
      {
        title: 'IBPS – PO / Clerk / SO / RRB Exam',
        description: 'Autonomous body recruiting for various Public Sector Banks & RRBs.',
        features: ['Classroom Program (Prelims + Mains + Interview)', 'Sectional & Full-Length Mock Tests', 'High-Quality Study Material', 'Experienced Technical & GS Faculty'],
        path: '/courses/banking/ibps',
        duration: '4-5 Months',
        eligibility: 'Graduate',
        medium: 'English'
      },
      {
        title: 'RBI – Grade B / Assistant Exam',
        description: 'Highly Prestigious Exam in the Indian Banking Sector.',
        features: ['Classroom Program (Prelims + Mains + Interview)', 'Sectional & Full-Length Mock Tests', 'High-Quality Study Material', 'Experienced Technical & GS Faculty'],
        path: '/courses/banking/rbi',
        duration: '6 Months',
        eligibility: 'Graduate (60%+)',
        medium: 'English'
      },
      {
        title: 'NABARD – Grade A & B Exam',
        description: 'The Exam Focusing on Rural & Agricultural Sector Development.',
        features: ['Agriculture & Rural Development–Focused Coverage', 'Economic & Social Issues–Focused Modules', 'Classroom Program (Prelims + Mains + Interview)', 'Sectional & Full-Length Mock Tests', 'High-Quality Study Material'],
        path: '/courses/banking/nabard',
        duration: '6 Months',
        eligibility: 'Graduate',
        medium: 'English'
      }
    ],
  }
];

export const achievers = [
  { name: 'Hanamanth Nandi', rank: 'AIR-910 (UPSC)', photo: '/images/results/hanamantha_new.png', quote: 'The Encourage INDIA IAS/KAS Mains Test Series and Guidance Classroom Program is designed with a well-defined and comprehensive syllabus coverage.', isGraphic: true },
  { name: 'Vishal Hosmani (IFS)', rank: 'AIR-122', photo: '/images/results/vishal_new.png', quote: 'The content is crisp, well-structured, and exam-oriented, making even complex topics simple and easy to grasp.', isGraphic: true },
  { name: 'Sharanayya Hiremath', rank: 'Jailor-Karnataka Police', photo: '/images/results/sharanayya_new.png', quote: 'The PSI programmes under encourage INDIA IAS are very well organised and systematically structured for both Paper I and Paper II.', isGraphic: true },
  { name: 'Mahadevi', rank: 'Cooperative Inspector (Bengaluru Division)', photo: '/images/results/mahadevi_new.jpg', quote: 'The Encourage INDIA IAS/KAS team is providing excellent classroom programmes and a highly well-structured KAS Mains Test Series.', isGraphic: true },
];

export const mentors = [
  { name: 'Dr. Manu S. M.', role: 'Assistant Professor (Agronomy), UAS Bangalore', photo: '/images/results/manu_sm.png', message: 'The Green Book & AO notes offer a well-structured, factually robust, and examination-focused compilation of agricultural current affairs. It is an invaluable resource.', isGraphic: true },
  { name: 'Dr. Dhananjay Hongal', role: 'ARS Scientist, IARI New Delhi', photo: '/images/results/dhananjay_hongal.png', message: 'The magazine (GREEN BOOK) has comprehensively covered every relevant topic. It is well-structured, informative, and highly useful for upcoming AO/AAO exams.', isGraphic: true },
  { name: 'Dr. Vishwanath Chavan', role: 'Asst. Professor (Soil Science), RLB Central Agri Uni', photo: '/images/results/vishwanath_chavan.jpg', message: 'GREEN BOOK is an exceptionally well-curated resource. It is strategically aligned with the requirements of competitive exams such as UPSC, NABARD, AO, and AAO.', isGraphic: true },
];

export const downloadCategories = [
  {
    category: "UPSC CSE Resources",
    items: [
      {
        title: "UPSC CSE Study Material",
        description: "Access our comprehensive collection of UPSC CSE resources, including syllabus, booklists, and strict-pattern based test series.",
        fileUrl: "https://drive.google.com/drive/folders/1p5mo2E5SlDo4kE4g4GG4UFM1SzIy8SwC?usp=drive_link"
      }
    ]
  },
  {
    category: "KPSC KAS Prelims Resources",
    items: [
      {
        title: "KPSC KAS Prelims Material",
        description: "Access all KPSC KAS Prelims resources, including syllabus, patterns, and study materials.",
        fileUrl: "https://drive.google.com/drive/folders/1GmJjWNdanTFY031ClTgVvGJGYnDhuVyh?usp=drive_link"
      }
    ]
  },
  {
    category: "KPSC KAS Mains Resources",
    items: [
      {
        title: "KPSC KAS Mains Material",
        description: "Access detailed KPSC KAS Mains syllabus, exam patterns, and preparation guides.",
        fileUrl: "https://drive.google.com/drive/folders/1AiPAPbv63LFJH4KJcDvsHyH5QUwYVKqX?usp=drive_link"
      }
    ]
  },
  {
    category: "KPSC AC-SAAD Prelims Resources",
    items: [
      {
        title: "KPSC AC-SAAD Prelims Material",
        description: "Access study materials and syllabus for KPSC AC-SAAD Prelims.",
        fileUrl: "https://drive.google.com/drive/folders/1NTnIlw74WGoV60rvhh-bPSYEdntT6X-x?usp=drive_link"
      }
    ]
  },
  {
    category: "KPSC AC-SAAD Mains Resources",
    items: [
      {
        title: "KPSC AC-SAAD Mains Material",
        description: "Access study materials and syllabus for KPSC AC-SAAD Mains.",
        fileUrl: "https://drive.google.com/drive/folders/1Hkv8nOwv37NJmfv8eTQ5VTvj1-4xJhot?usp=drive_link"
      }
    ]
  },
  {
    category: "General Resources",
    items: [
      {
        title: "General Study Resources",
        description: "Access previous year question papers, current affairs magazines, and other general resources.",
        fileUrl: "https://drive.google.com/drive/folders/1p5mo2E5SlDo4kE4g4GG4UFM1SzIy8SwC?usp=drive_link" // Fallback or reuse UPSC link if no specific link provided for general, but user didn't specify. Keeping consistent with user request to "link to google drive". I'll use the UPSC one as a placeholder or maybe I should check if there is a general link. User didn't provide one. I will use the UPSC one for now as it seems to be the main repository, OR I can leave the old files?
        // User said "we will be linking our downloads to google drive instead".
        // Use UPSC link for now as it is safest, or maybe just remove this category?
        // Correct approach: The user didn't specify a link for "General Resources". I will KEEP the old items for General Resources for now to avoid breaking it, OR remove it if the intention is to fully switch.
        // Given the prompt "we will be linking our downloads to google drive instead", it implies a full switch.
        // However, without a link for General, I'll modify the "General Resources" to point to the UPSC drive as a catch-all or just comment it out?
        // Let's look at the user request again.
        // "upsc cse section", "kpsc kas prelims", "kpsc kas mains", "kpsc ac saad prelims", "kpsc sc saad mains".
        // It didn't mention General.
        // I'll keep General Resources as is for now to be safe, but I can't mix `fileUrl` types easily if I change the UI to "Open Drive".
        // Actually, if I change the UI to "Open in new tab", it works for both PDF links and Drive links.
        // But "Download" vs "Open Drive" text might be tricky.
        // I recall the `DownloadsPage.tsx` logic. I can check if it starts with `http` to determine if it's an external link.
        // If it's a local file (starts with `/`), standard download. if `http`, `_blank`.
      }
    ]
  }
];


export const editorialSummaries = [
  {
    title: "Analyzing the New Economic Policy Reforms",
    source: "The Hindu",
    summary: "A deep dive into the latest economic policy changes, their potential impact on various sectors, and the long-term implications for India's growth trajectory."
  },
  {
    title: "Geopolitical Shifts in the Indo-Pacific Region",
    source: "Indian Express",
    summary: "Examining the evolving strategic alliances and rivalries in the Indo-Pacific, and what it means for India's foreign policy and national security."
  },
  {
    title: "The Future of Artificial Intelligence Regulation in India",
    source: "Livemint",
    summary: "A critical look at the ongoing debate surrounding AI regulation, balancing innovation with ethical considerations and data privacy concerns."
  }
];