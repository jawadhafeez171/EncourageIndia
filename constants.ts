
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
        { name: 'Agriculture Officer (AO/AAO)', path: '/courses/kpsc-ao-aao'},
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
      name: 'AE/JE (Technical)', 
      path: '/courses/ae-je-technical',
      dropdown: [
        { name: 'Overview', path: '/courses/ae-je-technical' },
        { name: 'KPSC Technical (AE/AEE)', path: '/courses/kpsc-tech' },
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
      name: 'KMF', 
      dropdown: [
        { name: 'SHIMUL', path: '/courses/kmf-shimul' },
      ]
    },
    { name: 'Physical Training', path: '/physical-training' },
];

export const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/encourage_INDIAIAS', icon: TelegramIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/encourageindiaias/?utm_source=qr&r=nametag', icon: InstagramIcon },
  { name: 'YouTube', href: 'https://youtube.com/@encourage_india_ias?si=hxuXWNFGTXPfQm0y', icon: YouTubeIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'WhatsApp', href: 'https://wa.me/919611621195', icon: WhatsAppIcon },
  { name: 'X', href: '#', icon: XIcon },
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    achievement: 'UPSC CSE, AIR 45',
    quote: 'The personalized mentorship and structured curriculum at Encourage India were instrumental in my success. The faculty is incredibly supportive.',
    image: 'https://picsum.photos/seed/priya/100/100',
  },
  {
    name: 'Arjun Singh',
    achievement: 'Karnataka Civil Judge, Rank 5',
    quote: "Encourage India's focus on answer writing and mock interviews gave me the confidence I needed to crack the judicial services exam.",
    image: 'https://picsum.photos/seed/arjun/100/100',
  },
  {
    name: 'Sneha Reddy',
    achievement: 'KPSC, Deputy Superintendent',
    quote: 'The current affairs coverage and test series are top-notch. I highly recommend Encourage India to all state PSC aspirants.',
    image: 'https://picsum.photos/seed/sneha/100/100',
  },
];

export const coursesData = [
  {
    id: 'upsc',
    title: 'UPSC Civil Services',
    shortTitle: 'UPSC',
    courses: [
      {
        title: 'UPSC CSE Foundation Program',
        description: 'A comprehensive 2-year program for undergraduates, covering the entire syllabus from scratch.',
        features: ['Integrated Prelims & Mains', 'Personalized Mentorship', 'Daily Answer Writing'],
        path: '/courses/upsc-cse',
      },
      {
        title: 'UPSC Prelims Test Series',
        description: 'An extensive test series designed to cover the entire prelims syllabus with detailed explanations.',
        features: ['40+ Sectional & Full Tests', 'Performance Analysis', 'All India Ranking'],
      },
       {
        title: 'UPSC Mains Mentorship',
        description: 'A dedicated program for mains preparation with focus on answer writing and ethics.',
        features: ['Daily Writing Targets', 'One-on-One Feedback', 'Essay & Ethics Classes'],
      },
    ],
  },
  {
    id: 'kas',
    title: 'KPSC - KAS',
    shortTitle: 'KAS',
    courses: [
       {
        title: 'KPSC KAS Foundation',
        description: 'An integrated program for Karnataka Administrative Service (KAS) covering all papers for Prelims and Mains.',
        features: ['Karnataka Specific GK', 'Kannada Language Paper', 'Interview Guidance', 'Economic Survey Analysis'],
        path: '/courses/kas',
      },
      {
        title: 'KAS Prelims Crash Course',
        description: 'A fast-track course focusing on high-yield topics and revision for the upcoming KAS Prelims.',
        features: ['Subject-wise Revision', 'Mock Tests', 'Current Affairs Capsule'],
      }
    ]
  },
  {
    id: 'aeje',
    title: 'AE/JE (Technical) Exams',
    shortTitle: 'AE/JE',
    courses: [
      {
        title: 'Comprehensive Technical Program',
        description: 'Unified coaching for KPSC AE/AEE, KEA Technical, and KPCL AE/JE posts.',
        features: ['Core Civil/Mech/Elec Subjects', 'General Studies Integrated', 'Technical Mock Tests'],
        path: '/courses/ae-je-technical',
      },
      {
        title: 'KPSC AE/AEE (PWD/WRD)',
        description: 'Focused coaching for Assistant Engineer posts in Karnataka PWD and Water Resources Department.',
        features: ['Specialized PWD Syllabus', 'Previous Year QP Analysis', 'GS Paper Module'],
        path: '/courses/kpsc-tech',
      },
      {
        title: 'KEA Technical (JE/AE)',
        description: 'Targeted batches for various Board & Corporation technical recruitments conducted by KEA.',
        features: ['JE Level Focus', 'Computer Literacy', 'General English'],
        path: '/courses/kea-tech',
      }
    ]
  },
  {
    id: 'judiciary',
    title: 'Judicial & Law Services',
    shortTitle: 'Law',
    courses: [
       {
        title: 'Civil Judge Foundation',
        description: 'A complete course for aspiring Civil Judges covering all law subjects and procedural laws.',
        features: ['Bare Act Analysis', 'Judgment Writing Practice', 'Mock Interviews'],
        path: '/courses/civil-judge',
      },
      {
        title: 'District Judge Preparation',
        description: 'Specialized batch for practicing advocates aiming for Higher Judicial Services.',
        features: ['Higher Law Standards', 'Case Law Updates', 'Descriptive Paper Focus'],
        path: '/courses/district-judge',
      },
      {
        title: 'CLAT Entrance Batch',
        description: 'Targeted coaching for UG and PG Law entrance examinations for NLUs.',
        features: ['Legal Reasoning', 'Logical Ability', 'English Proficiency'],
        path: '/courses/clat',
      },
      {
        title: 'AIBE Certification Course',
        description: 'Short-term crash course to clear the All India Bar Examination.',
        features: ['Open Book Strategy', 'Quick Law Revision', 'PYQ Coverage'],
        path: '/courses/aibe',
      }
    ]
  },
  {
    id: 'kpsc',
    title: 'Other KPSC Exams',
    shortTitle: 'KPSC',
    courses: [
      {
        title: 'KPSC AC-SAAD',
        description: 'Targeted preparation for Assistant Controller in State Accounts Department.',
        features: ['Commerce & Management Focus', 'Paper 2 Specialization', 'General Studies Coverage'],
        path: '/courses/ac-saad',
      },
      {
        title: 'ACF / RFO / DRFO',
        description: 'Specialized coaching for the prestigious Karnataka Forest Service examination.',
        features: ['Forestry & Environment', 'General Science Focus', 'Aptitude Training'],
        path: '/courses/acf',
      },
      {
        title: 'Agriculture Officer (AO/AAO)',
        description: 'Comprehensive course for Agriculture graduates aspiring for AO/AAO posts.',
        features: ['Subject Matter Experts', 'B.Sc Agri Syllabus', 'GK Paper Coverage'],
        path: '/courses/kpsc-ao-aao',
      },
      {
        title: 'Group B Posts',
        description: 'Coaching for various Group B technical and non-technical posts.',
        features: ['Specific Paper Guidance', 'General Knowledge', 'Test Series'],
        path: '/courses/group-b',
      },
      {
        title: 'Group C (FDA / SDA / PDO)',
        description: 'Focused preparation for various Group C recruitment examinations.',
        features: ['General Kannada/English', 'General Knowledge', 'Mental Ability'],
        path: '/courses/group-c',
      },
    ],
  },
  {
    id: 'kea',
    title: 'KEA Examinations',
    shortTitle: 'KEA',
    courses: [
       {
        title: 'KPCL Recruitment',
        description: 'Coaching for Assistant Engineer, Junior Engineer, and other posts in Karnataka Power Corporation Ltd.',
        features: ['Technical & Non-Tech', 'General Awareness', 'Kannada Language'],
        path: '/courses/kpcl',
      },
      {
        title: 'Karnataka SET (K-SET)',
        description: 'Preparation for Assistant Professor eligibility test.',
        features: ['Paper 1 (General)', 'Paper 2 (Subject)', 'Teaching Aptitude'],
        path: '/courses/k-set',
      },
      {
        title: 'D CET (Lateral Entry)',
        description: 'Specialized coaching for Diploma CET for lateral entry into B.E/B.Tech courses.',
        features: ['Applied Math & Science', 'Core Technical Concepts', 'Revision Tests'],
        path: '/courses/d-cet',
      },
      {
        title: 'KEA Group B, C & D (Non-Tech)',
        description: 'Coaching for Village Administrative Officer (VAO) and other administrative posts.',
        features: ['Communication Papers', 'GK & Current Affairs', 'VAO Specific Modules'],
        path: '/courses/kea-group-b-c-d',
      },
      {
        title: 'KMF SHIMUL Recruitment',
        description: 'Dedicated batch for SHIMUL and other milk union recruitments.',
        features: ['Co-operative Laws', 'Computer Knowledge', 'General Syllabus'],
        path: '/courses/kmf-shimul',
      }
    ],
  },
  {
    id: 'police',
    title: 'Police Examinations',
    shortTitle: 'Police',
    courses: [
      {
        title: 'PSI / ESI Integrated',
        description: 'Comprehensive coaching for both Police Sub-Inspector and Excise Sub-Inspector exams.',
        features: ['Physical Training Guide', 'Translation', 'General Studies'],
        path: '/courses/psi',
      },
      {
        title: 'Police Constable (PC)',
        description: 'Dedicated batch for Police Constable recruitment.',
        features: ['General Knowledge', 'Psychology', 'Indian Constitution'],
        path: '/courses/pc',
      },
      {
        title: 'Integrated PSI/PC Batch',
        description: 'Foundation batch covering multiple police-grade examinations.',
        features: ['Holistic Prep', 'Weekly Tests', 'Physical Mentorship'],
        path: '/courses/psi-pc',
      }
    ]
  },
  {
    id: 'others',
    title: 'Other Programs',
    shortTitle: 'Others',
    courses: [
        {
            title: 'Personal Mentorship Program',
            description: 'One-on-one guidance for students who need strategic intervention in their preparation.',
            features: ['Weekly Progress Check', 'Strategy Planning', 'Doubt Resolution'],
        },
        {
            title: 'Interview Guidance Program',
            description: 'Specialized sessions for candidates who have cleared Mains and are appearing for the interview.',
            features: ['Mock Interviews', 'DAF Analysis', 'Personality Grooming'],
        }
    ]
  }
];

export const achievers = [
    { name: 'Amit Kumar', rank: 'UPSC CSE, AIR 22', photo: 'https://picsum.photos/seed/amit/400/400', quote: 'Consistent guidance and high-quality test series were the key factors in my success.' },
    { name: 'Sunita Patil', rank: 'Karnataka Civil Judge, Rank 3', photo: 'https://picsum.photos/seed/sunita/400/400', quote: 'The mentorship for judgment writing was invaluable. I am grateful to the entire team.' },
    { name: 'Ravi Gowda', rank: 'KPSC KAS, Rank 8', photo: 'https://picsum.photos/seed/ravi/400/400', quote: 'Excellent coverage of Karnataka-specific topics and current affairs.' },
    { name: 'Deepa Iyer', rank: 'UPSC CSE, AIR 98', photo: 'https://picsum.photos/seed/deepa/400/400', quote: 'The one-on-one sessions helped me identify and work on my weak areas effectively.' },
    { name: 'Kiran Kumar', rank: 'PSI, Karnataka Police', photo: 'https://picsum.photos/seed/kiran/400/400', quote: 'The holistic preparation, including physical guidance, was a game-changer for me.' },
    { name: 'Megha Desai', rank: 'UPSC CSE, AIR 150', photo: 'https://picsum.photos/seed/megha/400/400', quote: 'I could always count on the faculty for doubt clearing and motivation.' },
];

export const mentors = [
    { name: 'Rajesh Gupta', role: 'Chief Mentor, UPSC', photo: 'https://picsum.photos/seed/mentor1/200/200', message: 'Our mission is to democratize quality education. We believe every determined student deserves a chance to serve the nation.' },
    { name: 'Anjali Menon', role: 'Lead Mentor, Judiciary', photo: 'https://picsum.photos/seed/mentor2/200/200', message: 'The path to the judiciary demands precision and perseverance. We are here to help you at every step of this noble journey.' },
];

export const downloadCategories = [
    {
        category: "UPSC CSE Resources",
        items: [
            {
                title: "UPSC Mains Detailed Syllabus",
                description: "Comprehensive, paper-wise breakdown of the UPSC Mains syllabus (2026 Edition).",
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
                description: "The official list of optional subjects available for the UPSC Mains Examination (2025).",
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
                title: "KPSC Mains Exam Pattern (2025)",
                description: "An overview of the KAS Mains exam pattern, subjects, and marks distribution.",
                fileUrl: "/downloads/kpsc-mains-exam-pattern-2025.pdf"
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
                title: "KPSC Mains 2025 Timetable",
                description: "The official timetable for the KPSC Gazetted Probationers Main Examination 2025.",
                fileUrl: "/downloads/kpsc-mains-2025-timetable.pdf"
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
