// ============================================================
// cvData.js — toate informațiile CV-ului, într-un singur loc.
// Modifică valorile de mai jos pentru a-ți actualiza CV-ul.
// Caută "[COMPLETEAZĂ AICI]" pentru câmpurile care lipsesc.
// ============================================================

export const personal = {
  name: "Mahari George",
  role: "Student Tehnologii Informaționale · Candidat Internship IT",
  location: "Chișinău, Republica Moldova",
  email: "maharigeorge2005@gmail.com",
  phone: "067769266",
  linkedin: "https://www.linkedin.com/in/george-mahari-712323309/",
  github: "https://github.com/GeorgeMahari",
  // Adaugă un link către portofoliu dacă publici unul separat de acest CV.
  portfolio: "[COMPLETEAZĂ AICI]",
  drivingLicense: "Categoria B",
  photo: "/George.png", // vezi README.md — secțiunea "Adăugarea fotografiei de profil"
}

export const profileSummary = `Sunt student în anul III la Tehnologii Informaționale (UTM, FCIM) și sunt interesat de
dezvoltarea software, programare și tehnologii moderne. Am o bază academică solidă în
informatică, matematică și discipline tehnice, dobândită în cadrul studiilor universitare, iar
acum caut să transform aceste cunoștințe teoretice în experiență practică, alături de o echipă
de dezvoltare software. Sunt în căutarea unei practici de specialitate / internship IT pentru
septembrie 2026.`

export const education = [
  {
    institution: "Universitatea Tehnică a Moldovei (UTM)",
    faculty: "Facultatea Calculatoare, Informatică și Microelectronică (FCIM)",
    program: "Tehnologii Informaționale (TI)",
    degree: "Studii universitare de licență",
    period: "2024 – 2028",
    year: "Anul III",
    location: "Chișinău, Republica Moldova",
    status: "Student",
    note: "Practica de specialitate programată pentru septembrie 2026.",
  },
]

// Nivelurile folosite deliberat NU sunt exagerate:
// "Currently Learning" < "Familiar" < "Basic" < "Intermediate" < "Academic Knowledge"
export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: "Academic Knowledge" },
      { name: "C++", level: "Academic Knowledge" },
      { name: "C#", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Basic" },
      { name: "TypeScript", level: "Basic" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "React", level: "Currently Learning" },
      { name: "Vite", level: "Basic" },
      { name: "TypeScript", level: "Basic" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C# / .NET", level: "Intermediate" },
      { name: "Node.js", level: "Familiar" },
      { name: "REST API", level: "Basic" },
      { name: "JSON", level: "Familiar" },
      { name: "JWT", level: "Basic" },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "SQL", level: "Basic" }],
  },
  {
    title: "Tools & Development",
    skills: [
      { name: "Git", level: "Familiar" },
      { name: "GitHub", level: "Familiar" },
      { name: "Visual Studio", level: "Familiar" },
      { name: "Visual Studio Code", level: "Familiar" },
    ],
  },
  {
    title: "Systems",
    skills: [
      { name: "Windows", level: "Familiar" },
      { name: "Linux", level: "Basic" },
      { name: "VirtualBox", level: "Basic" },
    ],
  },
  {
    title: "DevOps / Infrastructure",
    skills: [{ name: "Docker", level: "Basic" }],
  },
  {
    title: "Networking",
    skills: [
      { name: "Computer Networks", level: "Academic Knowledge" },
      { name: "Cisco Networking Concepts", level: "Academic Knowledge" },
      { name: "IP Addressing", level: "Academic Knowledge" },
      { name: "TCP/IP Concepts", level: "Academic Knowledge" },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "Cybersecurity Fundamentals", level: "Academic Knowledge" },
      { name: "Nmap", level: "Basic" },
      { name: "Nessus", level: "Basic" },
      { name: "Lynis", level: "Basic" },
      { name: "GPG", level: "Basic" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "UML", level: "Intermediate" },
      { name: "PlantUML", level: "Basic" },
      { name: "API Concepts", level: "Basic" },
    ],
  },
]

export const academicBackground = {
  intro:
    "Fundament academic și teoretic acumulat pe parcursul studiilor la UTM — nu experiență profesională.",
  disciplines: [
    "Calculul I",
    "Calculul II",
    "Algebră liniară și geometrie analitică",
    "Matematici speciale",
    "Matematică discretă",
    "Rețele de calculatoare",
    "Analiza și proiectarea algoritmilor",
    "Structuri de date și algoritmi (SDA)",
    "Programarea calculatoarelor",
    "Programare orientată pe obiecte (C++)",
    "Analiza și modelarea sistemelor",
    "Metode numerice",
    "Grafică pe calculator",
    "Limbaje formale și automate finite",
    "Fizică / Mecanică",
    "Sisteme de operare / Linux în medii virtualizate",
    "Elemente de securitate cibernetică",
    "UML și modelarea sistemelor software",
  ],
  transferableSkills: [
    "Gândire algoritmică",
    "Rezolvarea problemelor",
    "Gândire matematică și logică",
    "Înțelegerea structurilor de date",
    "Înțelegerea algoritmilor",
    "Modelarea sistemelor",
    "Analiza sistemelor",
    "Înțelegerea rețelelor de calculatoare",
    "Gândire abstractă și analitică",
  ],
  courseworkProjects: [
    "Programare în C și C++",
    "Structuri de date și algoritmi — arbori binari de căutare (BST), DFS/BFS, recursivitate",
    "Analiza și proiectarea algoritmilor — analiza complexității",
    "Programare orientată pe obiecte",
    "UML — Use Case, Sequence, Collaboration, Class, Component și Deployment Diagrams (PlantUML)",
    "Analiza și modelarea sistemelor",
    "Rețele de calculatoare",
    "Laboratoare de mecanică și metode numerice în MATLAB / Octave",
    "Linux în mașini virtuale — Nmap, Nessus, Lynis, GPG",
  ],
  courses: [
    {
      title: "Cisco / Computer Networking",
      note: "Activitate academică — introducere în rețele de calculatoare, diagnosticare și concepte de rețelistică.",
    },
  ],
}

export const projects = [
  {
    name: "WhisperLink",
    type: "Full-Stack Social Messaging Application",
    description:
      "Aplicație de social messaging dezvoltată în echipă de 3 studenți, cu interfață modernă pentru comunicare. Am contribuit la partea de frontend și la integrarea proiectului în cadrul echipei.",
    tech: ["React", "Vite", "TypeScript", "CSS", "C#", ".NET", "REST API", "JSON", "JWT"],
  },
  {
    name: "FSM AI · Gesture Recognition",
    type: "AI / Computer Vision",
    description:
      "Sistem de control al unui player video prin gesturile mâinii, folosind puncte de reper detectate cu MediaPipe pentru a recunoaște gesturi și a le transforma în comenzi (play/pause, forward/backward 10s, control volum).",
    tech: ["Python", "OpenCV", "MediaPipe", "Hand Landmark Detection", "Gesture Recognition"],
  },
  {
    name: "Aroma Haven",
    type: "E-commerce Coffee Website (frontend)",
    description:
      "Website de prezentare pentru produse de cafea, cu interfață frontend și funcționalitate de calculare a prețului. Backend-ul și baza de date nu au fost implementate complet.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "YouTube Clone",
    type: "Frontend / API Practice",
    description:
      "Proiect realizat pentru exersarea dezvoltării frontend și a integrării unui API, cu afișare dinamică a datelor și interfață inspirată de o platformă video.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
  },
]

export const languages = [
  { name: "Română", level: "Nativ" },
  { name: "Engleză", level: "B2+" },
  { name: "Rusă", level: "B2+" },
  { name: "Franceză", level: "A2+" },
]

export const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Logical Thinking",
  "Teamwork",
  "Continuous Learning",
  "Adaptability",
  "Attention to Detail",
  "Ability to Learn New Technologies",
  "Technical Curiosity",
]

export const careerObjective = {
  title: "Obiectiv profesional",
  text: `Obiectivul meu actual este să găsesc o companie unde să pot efectua practica de
specialitate în septembrie 2026 și să aplic practic cunoștințele acumulate la universitate,
alături de dezvoltatori cu experiență.`,
  interests: [
    "IT Internship",
    "Software Development Internship",
    "Junior Software Developer Internship",
    "Full-Stack Development Internship",
    "Backend Development Internship",
    "C# / .NET Internship",
    "Frontend Development Internship",
    "React / TypeScript Internship",
    "Python Internship",
    "AI / Computer Vision Internship",
  ],
  preferredLocation: "Chișinău, Republica Moldova",
}


export const navStates = [
  { id: "profile", label: "Profil", short: "q0", start: true },
  { id: "education", label: "Educație", short: "q1" },
  { id: "skills", label: "Competențe", short: "q2" },
  { id: "academic", label: "Fundament academic", short: "q3" },
  { id: "projects", label: "Proiecte", short: "q4" },
  { id: "languages", label: "Limbi & Soft Skills", short: "q5" },
  { id: "contact", label: "Obiectiv & Contact", short: "q6", accept: true },
]
