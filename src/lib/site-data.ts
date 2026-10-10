export const PHONE = "0729 847 830";
export const TEL = "+40729847830";
export const WA_NUMBER = "40729847830";
export const WA =
  "https://wa.me/40729847830?text=Bun%C4%83%20ziua!%20Am%20nevoie%20de%20vulcanizare%20mobil%C4%83%20%C3%AEn%20Constan%C8%9Ba.";
export const MAPS = "https://maps.app.goo.gl/i5PAv56cqGkRsLGX8";
export const REVIEWS = MAPS;

export const BASE: [number, number] = [44.7307159, 25.3662932];

export type Service = {
  slug: string;
  icon:
    | "lifebuoy"
    | "wrench"
    | "circle"
    | "gauge"
    | "truck"
    | "navigation";
  title: string;
  desc: string;
  intro: string;
  price: string;
  priceFrom: string;
  priceNote?: string;
  pricing?: { label: string; value: string; note?: string }[];
  duration: string;
  bullets: string[];
  steps: string[];
};

export type FAQ = {
  q: string;
  a: string;
  category: "prețuri" | "disponibilitate" | "timp-sosire" | "servicii" | "plată" | "siguranță";
};

export const services: Service[] = [
  {
    slug: "asistenta-rutiera",
    icon: "lifebuoy",
    title: "Asistență rutieră 24/7",
    desc: "Intervenim non-stop pe A2, A4, DN39 și în tot orașul, indiferent de oră.",
    intro:
      "Rămâi cu pana pe autostradă sau pe drum național? Venim la tine cu duba de intervenție, complet echipată, la orice oră din zi sau din noapte. Nu ai nevoie de platformă și nu trebuie să îți muți mașina.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "deplasare inclusă în oraș",
    pricing: [
      { label: "În Constanța", value: "la telefon", note: "deplasare inclusă" },
      { label: "A2 / A4 / DN39", value: "la telefon", note: "autostradă & drum național" },
      { label: "Camioane & utilitare", value: "personalizat", note: "contracte flote" },
    ],
    duration: "20–40 minute pe loc",
    bullets: [
      "Intervenții pe A2, A4, DN39, DN3 și centura Constanța",
      "Sculărie profesională și compresor la bord",
      "Anvelope de schimb pentru cele mai comune dimensiuni",
      "Semnalizare corectă a zonei de lucru, în siguranță",
    ],
    steps: [
      "Ne suni sau trimiți locația pe WhatsApp",
      "Confirmăm timpul de sosire și prețul estimat",
      "Ajungem la tine și reparăm pe loc",
      "Plătești cu cardul, transfer sau numerar",
    ],
  },
  {
    slug: "reparatii-pe-loc",
    icon: "wrench",
    title: "Reparație pană pe loc",
    desc: "Pene, tăieturi sau valve defecte — reparate la fața locului, fără platformă.",
    intro:
      "Reparăm pana direct acolo unde ești: plombă internă, ciuperci de vulcanizare, schimb de valvă sau resigilare jantă. Anvelopa rămâne sigură pentru rulaj normal, cu garanție pentru lucrare.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "reparație simplă pe loc",
    duration: "15–30 minute",
    bullets: [
      "Plombă internă la cald sau ciupercă (reparație permanentă)",
      "Reparație tăieturi laterale ușoare, unde e sigur",
      "Schimb valve și senzori de presiune",
      "Verificare presiune la toate roțile, gratuit",
    ],
    steps: [
      "Diagnosticăm anvelopa la fața locului",
      "Îți spunem dacă reparația e sigură sau e nevoie de anvelopă nouă",
      "Reparăm, umflăm și verificăm etanșeitatea",
      "Primești garanție pentru lucrare",
    ],
  },
  {
    slug: "montaj-domiciliu",
    icon: "circle",
    title: "Schimb anvelope la domiciliu",
    desc: "Montaj vară/iarnă direct acasă sau la birou, fără timpi de așteptare.",
    intro:
      "Venim cu utilajul mobil de montat și echilibrat direct în curtea ta sau în parcarea de la birou. Schimbăm setul sezonier în aproximativ o oră, fără să pierzi timpul la coadă în service.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "set de 4 anvelope",
    duration: "45–75 minute pentru un set complet",
    bullets: [
      "Montaj și demontaj pe jantă, cu mașină mobilă",
      "Echilibrare electronică inclusă la cerere",
      "Cuplu de strângere corect, cu cheie dinamometrică",
      "Preluăm anvelopele vechi la cerere",
    ],
    steps: [
      "Stabilim ziua și ora prin telefon sau WhatsApp",
      "Venim la adresa ta cu tot echipamentul",
      "Montăm, echilibrăm și verificăm presiunile",
      "Îți lăsăm factură sau bon, la alegere",
    ],
  },
  {
    slug: "echilibrare-roti",
    icon: "gauge",
    title: "Echilibrare roți",
    desc: "Echilibrare electronică precisă pentru rulare lină și uzură uniformă.",
    intro:
      "Vibrațiile în volan la 90–120 km/h vin aproape mereu de la roți neechilibrate. Facem echilibrare electronică cu aparatură mobilă, direct la tine, cu contragreutăți adezive sau cu clemă.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "per roată",
    duration: "10 minute pe roată",
    bullets: [
      "Echilibrare pentru jante de aluminiu și de oțel",
      "Contragreutăți invizibile pentru jante de aluminiu",
      "Verificare deformări de jantă și uzură neuniformă",
      "Recomandări de rotire a anvelopelor",
    ],
    steps: [
      "Verificăm vibrațiile și starea roților",
      "Echilibrăm fiecare roată pe aparat",
      "Remontăm la cuplul corect",
      "Test scurt de rulare, dacă e nevoie",
    ],
  },
  {
    slug: "vulcanizare-camioane",
    icon: "truck",
    title: "Vulcanizare camioane",
    desc: "Intervenții pentru TIR-uri și autoutilitare, contracte pentru flote.",
    intro:
      "Avem echipament special pentru camioane, autotrenuri și autoutilitare: pistoale de impact de mare cuplu, cricuri de tonaj și anvelope de intervenție. Lucrăm cu transportatori și flote pe bază de contract.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "contracte flote",
    duration: "30–60 minute pe roată",
    bullets: [
      "Intervenții pe A2, A4 și în zona Portului Constanța",
      "Reparații și schimb pentru roți de camion și remorcă",
      "Contracte și facturare lunară pentru flote",
      "Prioritate la dispecerat pentru clienții pe contract",
    ],
    steps: [
      "Dispecerul tău ne trimite locația și dimensiunea",
      "Confirmăm disponibilitatea anvelopei",
      "Intervenim pe loc, cu semnalizare de siguranță",
      "Primești documentele pentru flotă",
    ],
  },
  {
    slug: "transport-auto",
    icon: "navigation",
    title: "Transport auto",
    desc: "Tractare și transport pentru autoturisme în Constanța și împrejurimi.",
    intro:
      "Când anvelopa nu mai poate fi reparată sau mașina nu poate rula, organizăm tractarea către service-ul sau adresa dorită, în Constanța și în județ.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "în funcție de distanță",
    duration: "în funcție de distanță",
    bullets: [
      "Tractare autoturisme și utilitare ușoare",
      "Transport către service, acasă sau la ITP",
      "Intervenții pe autostradă și pe drumuri naționale",
      "Preț comunicat clar înainte de plecare",
    ],
    steps: [
      "Ne spui locația și destinația",
      "Primești prețul final, fără surprize",
      "Preluăm mașina în siguranță",
      "Livrăm la adresa stabilită",
    ],
  },
];

export type Zone = {
  slug: string;
  name: string;
  short: string;
  eta: string;
  etaMinutes: string;
  coords: [number, number];
  desc: string;
  intro: string;
  roads: string[];
  localities: string[];
};

export const zones: Zone[] = [
  {
    slug: "dragodana-gaesti",
    name: "Dragodana & Găești",
    short: "Dragodana / Găești",
    eta: "Sosire ~5–15 min",
    etaMinutes: "5–15 min",
    coords: [44.7186, 25.3194],
    desc: "Baza noastră e aici — ajungem cel mai repede.",
    intro:
      "Baza noastră este pe Calea Găești, Nr. 45, Dragodana. Acoperim rapid Dragodana, Găești, Picior de Munte, Boteni și satele din jur, pe DN7 și DN61.",
    roads: ["DN7", "DN61", "Calea Găești"],
    localities: ["Dragodana", "Găești", "Picior de Munte", "Boteni", "Cucuteni", "Mătăsaru"],
  },
  {
    slug: "targoviste",
    name: "Târgoviște",
    short: "Târgoviște",
    eta: "Sosire ~20–35 min",
    etaMinutes: "20–35 min",
    coords: [44.9254, 25.4567],
    desc: "Reședința județului și împrejurimile, non-stop.",
    intro:
      "Venim în tot orașul Târgoviște și în comunele din jur: Răzvad, Ulmi, Aninoasa, Șotânga și Doicești, pentru reparații pe loc și montaj la domiciliu.",
    roads: ["DN71", "DN72", "Centura Târgoviște"],
    localities: ["Târgoviște", "Răzvad", "Ulmi", "Aninoasa", "Doicești"],
  },
  {
    slug: "titu",
    name: "Titu & DN7",
    short: "Titu / DN7",
    eta: "Sosire ~20–30 min",
    etaMinutes: "20–30 min",
    coords: [44.6622, 25.5742],
    desc: "Intervenții pe DN7 și în zona Titu.",
    intro:
      "Acoperim orașul Titu și tronsonul DN7 spre București, inclusiv Ghimpați, Odobești și Potlogi.",
    roads: ["DN7", "DN71", "DJ711"],
    localities: ["Titu", "Odobești", "Potlogi", "Ghimpați", "Corbii Mari"],
  },
  {
    slug: "autostrada-a1",
    name: "Autostrada A1",
    short: "Autostrada A1",
    eta: "Sosire ~25–45 min",
    etaMinutes: "25–45 min",
    coords: [44.62, 25.42],
    desc: "Pene pe autostrada A1 București–Pitești, non-stop.",
    intro:
      "Pe autostradă intervenim cu semnalizare completă, în siguranță. Acoperim tot tronsonul A1 dintre București și Pitești, inclusiv nodurile Ciolpani și Găești.",
    roads: ["A1", "DN7", "DN65B"],
    localities: ["Nod Găești", "Ciolpani", "Ungheni", "Bolintin"],
  },
  {
    slug: "pitesti",
    name: "Pitești",
    short: "Pitești",
    eta: "Sosire ~40–60 min",
    etaMinutes: "40–60 min",
    coords: [44.8565, 24.8692],
    desc: "Pitești și zona Ștefănești, cu confirmare telefonică.",
    intro:
      "Mergem la Pitești, Ștefănești, Bradu și Mioveni pentru pene, schimb de anvelope și asistență pe drum.",
    roads: ["A1", "DN7", "DN65"],
    localities: ["Pitești", "Ștefănești", "Bradu", "Mioveni"],
  },
  {
    slug: "bucuresti-vest",
    name: "București & vestul Ilfovului",
    short: "București vest",
    eta: "Sosire ~50–80 min",
    etaMinutes: "50–80 min",
    coords: [44.4352, 26.0225],
    desc: "Asistență până în vestul Bucureștiului, la cerere.",
    intro:
      "Pentru vestul Bucureștiului, Chiajna, Domnești și Bragadiru venim la cerere, de regulă cu o confirmare telefonică pentru dimensiunea anvelopei.",
    roads: ["A1", "DN7", "Centura București"],
    localities: ["Militari", "Chiajna", "Domnești", "Bragadiru", "Roșu"],
  },
  {
    slug: "ploiesti",
    name: "Ploiești",
    short: "Ploiești",
    eta: "Sosire ~60–90 min",
    etaMinutes: "60–90 min",
    coords: [44.9419, 26.0225],
    desc: "Deplasare la cerere, inclusiv camioane și flote.",
    intro:
      "Mergem la Ploiești și în zona Prahovei la cerere, pentru autoturisme, utilitare și camioane.",
    roads: ["DN72", "DN1", "A3"],
    localities: ["Ploiești", "Blejoi", "Bărcănești", "Târgșoru Vechi"],
  },
  {
    slug: "moreni",
    name: "Moreni",
    short: "Moreni",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    coords: [44.98, 25.644],
    desc: "Moreni și comunele din jur.",
    intro:
      "Venim în Moreni, Gura Ocniței, Ocnița și I. L. Caragiale pentru pene, montaj și asistență pe drum.",
    roads: ["DN72", "DJ720"],
    localities: ["Moreni", "Gura Ocniței", "Ocnița", "I. L. Caragiale"],
  },
  {
    slug: "pucioasa-fieni",
    name: "Pucioasa & Fieni",
    short: "Pucioasa & Fieni",
    eta: "Sosire ~35–50 min",
    etaMinutes: "35–50 min",
    coords: [45.074, 25.434],
    desc: "Valea Ialomiței, până la Fieni.",
    intro:
      "Urcăm pe DN71 spre Pucioasa, Fieni, Vulcana-Băi și Moroeni pentru reparații pe loc și schimb de anvelope.",
    roads: ["DN71", "DJ712"],
    localities: ["Pucioasa", "Fieni", "Vulcana-Băi", "Brănești", "Moroeni"],
  },
  {
    slug: "racari",
    name: "Răcari",
    short: "Răcari",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    coords: [44.63, 25.738],
    desc: "Răcari și zona de est a județului.",
    intro:
      "Acoperim Răcari, Conțești, Brezoaele și Crevedia, inclusiv tronsonul DN1A.",
    roads: ["DN7", "DJ711", "DN1A"],
    localities: ["Răcari", "Conțești", "Brezoaele", "Crevedia"],
  },
  {
    slug: "topoloveni",
    name: "Topoloveni",
    short: "Topoloveni",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    coords: [44.807, 25.083],
    desc: "Pe DN7 și A1 spre Pitești.",
    intro:
      "Intervenim în Topoloveni, Leordeni, Călinești și pe autostrada A1 până la nodul Pitești.",
    roads: ["A1", "DN7"],
    localities: ["Topoloveni", "Leordeni", "Călinești", "Priboieni"],
  },
  {
    slug: "bolintin",
    name: "Bolintin",
    short: "Bolintin",
    eta: "Sosire ~35–50 min",
    etaMinutes: "35–50 min",
    coords: [44.448, 25.757],
    desc: "Bolintin-Vale și zona Giurgiu nord.",
    intro:
      "Venim în Bolintin-Vale, Bolintin-Deal, Mihai Vodă și Ogrezeni pentru pene și asistență rutieră.",
    roads: ["DN61", "A1"],
    localities: ["Bolintin-Vale", "Bolintin-Deal", "Ogrezeni", "Mihai Vodă"],
  },
  {
    slug: "videle",
    name: "Videle",
    short: "Videle",
    eta: "Sosire ~40–60 min",
    etaMinutes: "40–60 min",
    coords: [44.278, 25.525],
    desc: "Videle și nordul Teleormanului.",
    intro:
      "Deservim Videle, Crevenicu, Poeni și Ciolănești pe DN61, cu confirmare telefonică.",
    roads: ["DN61", "DN6"],
    localities: ["Videle", "Poeni", "Crevenicu", "Ciolănești"],
  },
  {
    slug: "campulung",
    name: "Câmpulung",
    short: "Câmpulung",
    eta: "Sosire ~60–90 min",
    etaMinutes: "60–90 min",
    coords: [45.268, 25.047],
    desc: "Câmpulung Muscel, la cerere.",
    intro:
      "Mergem la Câmpulung, Mioveni și Domnești la cerere, pentru autoturisme, utilitare și camioane.",
    roads: ["DN73", "DN72A"],
    localities: ["Câmpulung", "Valea Mare-Pravăț", "Mioveni", "Golești"],
  },
];

export const mapRings = [
  { minutes: "30 min", km: 25, radius: 25000 },
  { minutes: "60 min", km: 50, radius: 50000 },
  { minutes: "90 min", km: 100, radius: 100000 },
];

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const EMAIL = "contact@vulcanizaremobilaconstanta.ro";
export const ADDRESS = "Calea Găești, Nr. 45, Dragodana";

export const stats = [
  { value: "15 min", label: "Timp mediu de răspuns în oraș" },
  { value: "2.000+", label: "Clienți ajutați cu pene și anvelope" },
  { value: "365 zile", label: "Intervenții fără programare" },
  { value: "100%", label: "Prețuri clare, fără costuri ascunse" },
];

export const reviews = [
  {
    initials: "LS",
    name: "Laur Solomon",
    when: "Constanța",
    text: "Cel mai bun pe cuvânt și punctual, lucrează cel mai bine și cel mai rapid oriunde ai fi.",
  },
  {
    initials: "CI",
    name: "Ciprian",
    when: "Constanța",
    text: "A fost la fața locului în 15 minute. Politicos și corect, prețul foarte rezonabil. Pneul a fost reparat în 10 minute.",
  },
  {
    initials: "AM",
    name: "Andrei M.",
    when: "acum 3 săptămâni",
    text: "Pană pe A4 la 23:00. Au ajuns rapid, montaj profesionist, preț corect. Salvatori!",
  },
  {
    initials: "EP",
    name: "Elena P.",
    when: "acum o lună",
    text: "Mi-au schimbat setul de iarnă direct în curte. Punctuali, curați, recomand cu încredere.",
  },
];

export const faqs = [
  {
    q: "Cât costă o intervenție de vulcanizare mobilă în Constanța?",
    a: "Tariful depinde de tipul intervenției și de distanță și îl primești la telefon înainte de plecare, fără surprize. Sunați pentru o estimare exactă în 30 de secunde.",
    category: "prețuri",
  },
  {
    q: "Veniți și noaptea sau în weekend?",
    a: "Da, suntem disponibili 24/7, inclusiv noaptea, sâmbăta, duminica și de sărbători. Dacă rămâneți cu pana la 3 dimineața, sunați și venim.",
    category: "disponibilitate",
  },
  {
    q: "Cât durează până ajungeți la mine?",
    a: "În Constanța oraș ajungem în 10–20 de minute. În Mamaia, Năvodari sau Agigea în 15–35 de minute. În Eforie, Techirghiol sau Ovidiu în 25–45 de minute, în funcție de trafic.",
    category: "timp-sosire",
  },
  {
    q: "Ce servicii faceți la fața locului?",
    a: "Reparație pană (plombă internă, ciuperci), schimb roată cu cea de rezervă, montaj anvelope noi, echilibrare roți cu aparatură mobilă, verificare presiune și schimb valve. Pentru cazuri severe oferim și transport auto.",
    category: "servicii",
  },
  {
    q: "Pot plăti cu cardul?",
    a: "Da, acceptăm plata cu cardul (POS mobil), transfer bancar și numerar. Emitem factură pentru companii.",
    category: "plată",
  },
  {
    q: "Lucrați și cu camioane sau TIR?",
    a: "Da, avem echipament special pentru vulcanizare camioane și autotrenuri. Intervenim pe A2, A4 și în zona portului pentru flote și transportatori.",
    category: "servicii",
  },
  {
    q: "Este sigur să reparați pană pe autostradă?",
    a: "Intervenim doar după semnalizarea corectă a zonei de lucru, cu triunghiuri, veste reflectorizante și lumină de avertizare. Siguranța ta și a echipei noastre e prioritatea zero.",
    category: "siguranță",
  },
  {
    q: "Dacă anvelopa nu poate fi reparată, ce fac?",
    a: "Îți spunem de la început dacă reparația e sigură sau dacă e nevoie de anvelopă nouă. Oferim și transport auto către service-ul dorit, cu preț comunicat înainte de plecare.",
    category: "servicii",
  },
];
