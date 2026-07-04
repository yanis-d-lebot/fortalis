console.log("islam.js O.K.");

// VARIABLES
const sourateAlFatiha = [
  {titre: "1 Sourate Al-Fatiha"},
  {verset:1, arabe: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", francais: "Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux."},
  {verset:2, arabe: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", francais: "Louange à Allah, Seigneur de l’univers."},
  {verset:3, arabe: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", francais: "Le Tout Miséricordieux, le Très Miséricordieux,"},
  {verset:4, arabe: "مَٰلِكِ يَوْمِ ٱلدِّينِ", francais: "Maître du Jour de la rétribution."},
  {verset:5, arabe: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", francais: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours."},
  {verset:6, arabe: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", francais: "Guide-nous dans le droit chemin,"},
  {verset:7, arabe: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ", francais: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.."},
]
const sourateAlBaqara = [
  {titre: "2 Sourate Al-Baqara"},
]
const sourateAlImran = [
  {titre: "3 Sourate Al-Imran"},
]
const sourateAlNisa3 = [
  {titre: "4 Sourate An-Nisa'"},
]
const sourateAlMaidah = [
  {titre: "5 Sourate Al-Maidah"},
]
const sourateAlAnam = [
  {titre: "6 Sourate Al-Anam"},
]
const sourateAlAraf = [
  {titre: "7 Sourate Al-Araf"},
]
const sourateAlAnfal = [
  {titre: "8 Sourate Al-Anfal"},
]
const sourateAtTawbah = [
  {titre: "9 Sourate At-Tawbah"},
]
const sourateYunus = [
  {titre: "10 Sourate Yunus"},
]
const sourateHud = [
  {titre: "11 Sourate Hud"},
]
const sourateYusuf = [
  {titre: "12 Sourate Yusuf"},
]
const sourateArRaad = [
  {titre: "13 Sourate Ar-Raad"},
]
const sourateIbrahim = [
  {titre: "14 Sourate Ibrahim"},
]
const sourateAlHijr = [
  {titre: "15 Sourate Al-Hijr"},
]
const sourateAnNahl = [
  {titre: "16 Sourate An-Nahl"},
]
const sourateAlIsra = [
  {titre: "17 Sourate Al-Isra"},
]
const sourateAlKahf = [
  {titre: "18 Sourate Al-Kahf"},
]
const sourateMaryam = [
  {titre: "19 Sourate Maryam"},
]
const sourateTaHa = [
  {titre: "20 Sourate Ta-Ha"},
]
const sourateAlAnbiya = [
  {titre: "21 Sourate Al-Anbiya"},
]
const sourateAlHajj = [
  {titre: "22 Sourate Al-Hajj"},
]
const sourateAlMuminune = [
  {titre: "23 Sourate Al-Muminune"},
]
const sourateAnNur = [
  {titre: "24 Sourate An-Nur"},
]
const sourateAlFurqane = [
  {titre: "25 Sourate Al-Furqane"},
]
const sourateAsShuaraa = [
  {titre: "26 Sourate As-Shuaraa"},
]
const sourateAnNaml = [
  {titre: "27 Sourate An-Naml"},
]
const sourateAlQasas = [
  {titre: "28 Sourate Al-Qasas"},
]
const sourateAlAnkabut = [
  {titre: "29 Sourate Al-Ankabut"},
]
const sourateArRum = [
  {titre: "30 Sourate Ar-Rum"},
]
const sourateLuqman = [
  {titre: "31 Sourate Luqman"},
]
const sourateAsSajda = [
  {titre: "32 Sourate As-Sajda"},
]
const sourateAlAhzab = [
  {titre: "33 Sourate Al-Ahzab"},
]
const sourateSaba = [
  {titre: "34 Sourate Saba"},
]
const sourateFatir = [
  {titre: "35 Sourate Fatir"},
]
const sourateYassine = [
  {titre: "36 Sourate  Yassine"},
]
const sourateAsSaffat = [
  {titre: "37 Sourate As-Saffat"},
]
const sourateSad = [
  {titre: "38 Sourate Sad"},
]
const sourateAzZumar = [
  {titre: "39 Sourate Az-Zumar"},
]
const sourateGafir = [
  {titre: "40 Sourate Gafir"},
]
const sourateFussilat = [
  {titre: "41 Sourate Fussilat"},
]
const sourateAshShura = [
  {titre: "42 Sourate Ash-Shura"},
]
const sourateAzzukhruf = [
  {titre: "43 Sourate Azzukhruf"},
]
const sourateAdDukhan = [
  {titre: "44 Sourate Ad-Dukhan"},
]
const sourateAlJathya = [
  {titre: "45 Sourate Al-Jathya"},
]
const sourateAlAhqaf = [
  {titre: "46 Sourate Al-Ahqaf"},
]
const sourateMuhammad = [
  {titre: "47 Sourate Muhammad"},
]
const sourateAlFath = [
  {titre: "48 Sourate Al-Fath"},
]
const sourateAlHujurat = [
  {titre: "49 Sourate Al-Hujurat"},
]
const sourateQaf = [
  {titre: "50 Sourate Qaf"},
]
const sourateAdDariyat = [
  {titre: "51 Sourate Ad-Dariyat"},
]
const sourateAtTur = [
  {titre: "52 Sourate At-Tur"},
]
const sourateAnNajm = [
  {titre: "53 Sourate An-Najm"},
]
const sourateAlQamar = [
  {titre: "54 Sourate Al-Qamar"},
]
const sourateArRahman = [
  {titre: "55 Sourate Ar-Rahman"},
]
const sourateAlWaqi3a = [
  {titre: "56 Sourate Al-Waqi'a"},
]
const sourateAlHadid = [
  {titre: "57 Sourate Al-Hadid"},
]
const sourateAlMujadalah = [
  {titre: "58 Sourate Al-Mujadalah"},
]
const sourateAlHasr = [
  {titre: "59 Sourate Al-Hasr"},
]
const sourateAlMumtahanah = [
  {titre: "60 Sourate Al-Mumtahanah"},
]
const sourateAsSaff = [
  {titre: "61 Sourate As-Saff"},
]
const sourateAlJumua = [
  {titre: "62 Sourate Al-Jumua"},
]
const sourateAlMunafiqun = [
  {titre: "63 Sourate Al-Munafiqun"},
]
const sourateAtTagabun = [
  {titre: "64 Sourate At-Tagabun"},
]
const sourateAtTalaq = [
  {titre: "65 Sourate At-Talaq"},
]




// FUNCTIONS


// CODES