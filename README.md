# CV Online — Mahari George

CV personal sub formă de pagină web, construit cu **React + Vite**. Navigarea este
reprezentată vizual ca o diagramă de automat finit (FSM) — fiecare secțiune este o
"stare" (`q0`...`q6`), o referință directă la disciplina Limbaje Formale și Automate și
la proiectul FSM AI din CV. Include mod de printare optimizat pentru A4 (export PDF din
browser) și este pregătit pentru deploy pe Vercel.

## Structura proiectului

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # punctul de intrare
    ├── App.jsx             # asamblează toate secțiunile
    ├── index.css           # design tokens + stiluri globale
    ├── components.css      # stiluri pentru componente
    ├── print.css           # stiluri pentru printare / export PDF (A4)
    ├── data/
    │   └── cvData.js       # TOATE informațiile CV-ului (editează aici)
    └── components/
        ├── StateMachineNav.jsx          # navigare sub formă de diagramă FSM
        ├── Hero.jsx
        ├── About.jsx
        ├── Education.jsx
        ├── Skills.jsx
        ├── AcademicBackground.jsx
        ├── Projects.jsx
        ├── LanguagesAndSoftSkills.jsx
        └── CareerObjectiveAndContact.jsx
```

## 1. Instalare Node.js

Ai nevoie de [Node.js](https://nodejs.org/) versiunea 18 sau mai nouă.

- Descarcă instalatorul de pe nodejs.org (varianta LTS) și rulează-l, **sau**
- pe Windows, poți folosi `winget install OpenJS.NodeJS.LTS`.

Verifică instalarea:

```bash
node -v
npm -v
```

## 2. Instalarea dependențelor

Din folderul proiectului:

```bash
npm install
```

## 3. Rularea locală (dev)

```bash
npm run dev
```

Vite va porni un server local (implicit `http://localhost:5173`). Deschide adresa
afișată în terminal în browser. Orice modificare din `src/` se reîncarcă automat.

## 4. Build pentru producție

```bash
npm run build
```

Rezultatul va fi generat în folderul `dist/`.

## 5. Verificarea build-ului (preview)

```bash
npm run preview
```

Servește exact ce ai construi la `npm run build`, util pentru a verifica înainte de deploy.

## 6. Publicarea pe GitHub

```bash
git init
git add .
git commit -m "CV online — React + Vite"
git branch -M main
git remote add origin https://github.com/GeorgeMahari/<numele-repo-ului>.git
git push -u origin main
```

(Creează mai întâi un repository gol pe GitHub, apoi înlocuiește URL-ul de mai sus cu
al tău.)

## 7. Deploy pe Vercel

**Opțiunea A — din interfața web (recomandat):**

1. Mergi pe [vercel.com](https://vercel.com) și autentifică-te (poți folosi contul GitHub).
2. „Add New… → Project" și selectează repository-ul acestui CV.
3. Vercel detectează automat framework-ul **Vite**. Setările implicite sunt corecte:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Apasă **Deploy**. În câteva zeci de secunde primești un URL public (ex.
   `mahari-george-cv.vercel.app`).

**Opțiunea B — din linia de comandă:**

```bash
npm install -g vercel
vercel login
vercel        # deploy de test (preview)
vercel --prod # deploy pe domeniul de producție
```

Nu este nevoie de nicio variabilă de mediu sau configurare suplimentară — proiectul este
100% frontend static.

## 8. Personalizarea datelor

Toate informațiile afișate în CV sunt separate de componente, în fișierul:

```
src/data/cvData.js
```

Deschide fișierul și editează direct valorile (nume, contact, educație, competențe,
proiecte, limbi, obiectiv de carieră etc.). Componentele React citesc automat aceste
date — nu trebuie să modifici JSX-ul pentru simple actualizări de conținut.

Câmpurile care lipseau în informațiile furnizate au fost marcate cu
`[COMPLETEAZĂ AICI]` (sau text similar, ex. `[COMPLETEAZĂ NIVELUL]`,
`[COMPLETEAZĂ LINK-UL...]`) direct în `cvData.js`. Caută-le și completează-le cu
informațiile tale reale înainte de a distribui CV-ul:

- `personal.portfolio` — link către un portofoliu separat, dacă publici unul
- `languages` — nivelurile pentru română / engleză / rusă
- `projects[].link` — linkurile către repository-urile publice (WhisperLink, FSM AI,
  Aroma Haven, YouTube Clone), dacă sunt disponibile

## 9. Adăugarea fotografiei de profil

Fotografia este opțională. Pentru a o adăuga:

1. Pune imaginea (ex. `poza-profil.jpg`) în folderul `public/`.
2. În `src/data/cvData.js`, setează:

   ```js
   photo: "/poza-profil.jpg",
   ```

3. Fotografia va apărea automat lângă titlul din secțiunea Hero. Dacă lași
   `photo: null`, secțiunea rămâne fără fotografie (fără spații goale).

## 10. Export / printare CV ca PDF

Butonul **„Printează / Export PDF”** din bara de navigare declanșează funcția nativă de
printare a browserului (`window.print()`). Fișierul `src/print.css` ascunde navigarea și
optimizează layout-ul pentru format **A4**:

1. Apasă butonul de print din pagină (sau `Ctrl/Cmd + P`).
2. În fereastra de printare a browserului, alege ca destinație **„Save as PDF”**.
3. Salvează fișierul — vei obține un CV curat, gata de trimis, fără elementele de
   navigare.

## 11. Conectarea la un domeniu personal

Dacă vei avea ulterior un domeniu propriu (ex. `georgemahari.dev`):

1. În dashboard-ul proiectului din Vercel, mergi la **Settings → Domains**.
2. Adaugă domeniul tău.
3. Vercel îți va afișa 1-2 înregistrări DNS (de tip `A` sau `CNAME`) pe care trebuie să
   le adaugi la registrarul de unde ai cumpărat domeniul.
4. După propagarea DNS (poate dura de la câteva minute până la câteva ore), site-ul va fi
   disponibil pe domeniul tău, cu certificat HTTPS generat automat de Vercel.

## Notă despre acuratețea conținutului

Toate informațiile din acest CV provin exclusiv din datele furnizate. Câmpurile lipsă au
fost marcate explicit cu `[COMPLETEAZĂ AICI]` și nu au fost inventate experiențe,
companii sau certificări. Verifică `src/data/cvData.js` înainte de a distribui CV-ul.
