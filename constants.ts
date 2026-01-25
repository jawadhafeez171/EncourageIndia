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
    quote: 'As an Indian Forest Service Officer who once walked the path of an aspirant, I find the Green Book to be the perfect companion for upcoming exams related to Agricultural Sciences. It blends depth with clarity — a must-have for anyone serious about excelling.',
    image: '/images/results/vishal.jpg',
  },
  {
    name: 'Hanamanth Nandi',
    achievement: 'UPSC 2025 Batch',
    quote: "Stepping into the Lal Bahadur Shastri National Academy of Administration today feels nothing short of magical. Heartfelt thanks to Team encourageINDIAIAS for their constant guidance and unwavering support during my most difficult times.",
    image: '/images/results/hanamanth_nandi.jpg',
  },
  {
    name: 'Sharanayya Hiremath',
    achievement: 'Jailor, Police Department',
    quote: 'As someone serving in the Police Department, I understand the value of precise, well-structured study material. The Green Book stands out as a powerful resource for competitive exams related to agriculture and forest services.',
    image: '/images/results/sharanayya.jpg',
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
  { name: 'Hanamanth Nandi', rank: 'UPSC 2025 Batch, LBSNAA trainee', photo: '/images/results/hanamanth_nandi.jpg', quote: 'Today I feel blessed to live that dream at LBSNAA. A heartfelt thanks to Team encourageINDIAIAS for their constant guidance and unwavering support.', isGraphic: true },
  { name: 'Vishal Hosmani (IFS)', rank: 'AIR-122', photo: '/images/results/vishal.jpg', quote: 'The Green Book is the perfect companion for upcoming agricultural science related exams. Its concise, exam-oriented content makes it invaluable.', isGraphic: true },
  { name: 'Sharanayya Hiremath', rank: 'Jailor (Police Dept), MSc Agriculture', photo: '/images/results/sharanayya.jpg', quote: 'The Green Book stands out as a powerful resource for competitive exams including IFS, NABARD, FCI, and others.', isGraphic: true },
  { name: 'Mahadevi', rank: 'Cooperative Inspector, Bengaluru Division', photo: '/images/results/mahadevi.jpg', quote: 'Comprehensive, up-to-date, and curated with precision — this magazine (GREEN BOOK) is everything an agriculture student needs.', isGraphic: true },
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
        title: "UPSC Mains Detailed Syllabus",
        description: "Comprehensive, paper-wise breakdown of the UPSC Mains syllabus (2026-27 Edition).",
        fileUrl: "/downloads/upsc-mains-detailed-syllabus.pdf"
      },
      {
        title: "UPSC Mains GS Paper 1 Booklist",
        description: "Recommended books for GS Paper 1: Indian Heritage, History, and Geography.",
        fileUrl: "/downloads/upsc-gs1-booklist.pdf"
      },
      {
        title: "UPSC Mains GS Paper 2 Booklist",
        description: "Curated booklist for GS Paper 2: Governance, Constitution, Polity, Social Justice, and IR.",
        fileUrl: "/downloads/upsc-gs2-booklist.pdf"
      },
      {
        title: "UPSC Mains GS Paper 3 Booklist",
        description: "Essential resources for GS Paper 3: Technology, Economic Development, Environment, & Security.",
        fileUrl: "/downloads/upsc-gs3-booklist.pdf"
      },
      {
        title: "UPSC Mains GS Paper 4 Booklist",
        description: "A complete list of books and resources for GS Paper 4: Ethics, Integrity, and Aptitude.",
        fileUrl: "/downloads/upsc-gs4-ethics-booklist.pdf"
      },
      {
        title: "UPSC Optional Subjects List",
        description: "The official list of optional subjects available for the UPSC Mains Examination (2026-27).",
        fileUrl: "/downloads/upsc-optional-subjects-list.pdf"
      },
      {
        title: "UPSC Mains Exam Pattern & Overview",
        description: "A comprehensive overview of the Mains exam pattern, schedule, and marking scheme.",
        fileUrl: "/downloads/upsc-mains-exam-pattern-overview.pdf"
      },
      {
        title: "UPSC Mains Strategy at a Glance",
        description: "A one-page strategic guide covering syllabus analysis, answer writing, and revision plans.",
        fileUrl: "/downloads/upsc-mains-strategy.pdf"
      }
    ]
  },
  {
    category: "KPSC KAS Prelims Resources",
    items: [
      {
        title: "KPSC Prelims Syllabus (Paper 1 & 2)",
        description: "Detailed syllabus for both Paper 1 and Paper 2 of the KPSC KAS Preliminary Examination.",
        fileUrl: "/downloads/kpsc-prelims-syllabus.pdf"
      },
      {
        title: "KPSC Prelims Pattern & Schedule",
        description: "An overview of the KPSC Prelims exam pattern, including paper-wise distribution of marks and timings.",
        fileUrl: "/downloads/kpsc-prelims-pattern-schedule.pdf"
      },
      {
        title: "KPSC Prelims Preparation Strategy",
        description: "A complete, step-by-step strategy guide for preparing for the KPSC Prelims exam.",
        fileUrl: "/downloads/kpsc-prelims-preparation-strategy.pdf"
      },
      {
        title: "KPSC Prelims Booklist & Resources",
        description: "A comprehensive list of recommended books and resources for KAS Prelims preparation.",
        fileUrl: "/downloads/kpsc-prelims-booklist.pdf"
      },
      {
        title: "KPSC Prelims vs. Mains Comparison",
        description: "A tabular comparison highlighting the key differences between the Prelims and Mains exams.",
        fileUrl: "/downloads/kpsc-prelims-vs-mains-comparison.pdf"
      },
      {
        title: "KPSC Prelims Exam Details",
        description: "Complete details of the KPSC Preliminary Exam, including marks, duration, and qualifying criteria.",
        fileUrl: "/downloads/kpsc-prelims-exam-details.pdf"
      }
    ]
  },
  {
    category: "KPSC KAS Mains Resources",
    items: [
      {
        title: "KPSC Mains Detailed Syllabus",
        description: "The official detailed syllabus for all KPSC KAS Mains papers (GS I-IV, Essay).",
        fileUrl: "/downloads/kpsc-mains-detailed-syllabus.pdf"
      },
      {
        title: "KPSC Mains Exam Pattern (2026-27)",
        description: "An overview of the KAS Mains exam pattern, subjects, and marks distribution.",
        fileUrl: "/downloads/kpsc-mains-exam-pattern-2026.pdf"
      },
      {
        title: "KPSC Mains vs. UPSC Mains Comparison",
        description: "A side-by-side comparison of the Mains exam patterns for KPSC and UPSC.",
        fileUrl: "/downloads/kpsc-mains-vs-upsc-mains-comparison.pdf"
      },
      {
        title: "KPSC Mains Comprehensive Overview",
        description: "A complete guide to the KAS Mains exam, including dates, papers, and marking schemes.",
        fileUrl: "/downloads/kpsc-mains-comprehensive-overview.pdf"
      },
      {
        title: "KPSC Mains 2026-27 Timetable",
        description: "The official timetable for the KPSC Gazetted Probationers Main Examination 2026-27.",
        fileUrl: "/downloads/kpsc-mains-2026-timetable.pdf"
      },
    ]
  },
  {
    category: "KPSC AC-SAAD Prelims Resources",
    items: [
      {
        title: "AC (K-SAAD) Prelims Pattern & Syllabus",
        description: "The official pattern and syllabus for the KPSC AC (State Accounts Dept) Prelims.",
        fileUrl: "/downloads/kpsc-ac-saad-prelims-pattern-syllabus.pdf"
      },
      {
        title: "AC-SAAD Prelims Detailed Syllabus (Paper 1)",
        description: "Topic-wise breakdown for the General Studies paper of the AC-SAAD Prelims.",
        fileUrl: "/downloads/kpsc-ac-saad-prelims-paper1-syllabus.pdf"
      },
      {
        title: "AC-SAAD Prelims Detailed Syllabus (Paper 2)",
        description: "Topic-wise breakdown for the Commerce & Management paper of the AC-SAAD Prelims.",
        fileUrl: "/downloads/kpsc-ac-saad-prelims-paper2-syllabus.pdf"
      },
      {
        title: "About the KSA&AD Department",
        description: "Learn about the Karnataka State Audit and Accounts Department (KSA&AD).",
        fileUrl: "/downloads/about-ksa-and-ad.pdf"
      }
    ]
  },
  {
    category: "KPSC AC-SAAD Mains Resources",
    items: [
      {
        title: "AC-SAAD Mains Detailed Syllabus",
        description: "The official topic-wise detailed syllabus for all papers of the AC-SAAD Mains exam.",
        fileUrl: "/downloads/kpsc-ac-saad-mains-detailed-syllabus.pdf"
      },
      {
        title: "AC-SAAD Mains Exam Pattern",
        description: "An overview of the AC-SAAD Mains exam pattern, subjects, and marks distribution.",
        fileUrl: "/downloads/kpsc-ac-saad-mains-exam-pattern.pdf"
      }
    ]
  },
  {
    category: "General Resources",
    items: [
      {
        title: "Previous Year Question Papers (UPSC)",
        description: "Download the last 5 years of question papers for Prelims and Mains.",
        fileUrl: "/downloads/upsc-pyq.zip"
      },
      {
        title: "Current Affairs Magazine (Last Month)",
        description: "Our comprehensive monthly compilation of current events and analysis.",
        fileUrl: "/downloads/current-affairs-magazine.pdf"
      },
      {
        title: "Karnataka Judiciary Syllabus",
        description: "Official syllabus for the Karnataka Civil Judge examinations.",
        fileUrl: "/downloads/karnataka-judiciary-syllabus.pdf"
      },
      {
        title: "Answer Writing Practice Sheets",
        description: "Templates and practice sheets to improve your Mains answer writing skills.",
        fileUrl: "/downloads/answer-writing-sheets.pdf"
      },
      {
        title: "NCERT Booklist for UPSC",
        description: "A curated list of essential NCERT books for a strong foundation.",
        fileUrl: "/downloads/ncert-booklist.pdf"
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