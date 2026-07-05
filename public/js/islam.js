console.log("islam.js O.K.");

// VARIABLES
const sourateAlBaqara = [
  {titre: "2 Sourate Al-Baqara"},
  {verset:3, arabe: "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ-٣", francais: "3-qui croient à l'invisible et accomplissent la Salat et dépensent (dans l'obéissance à Allah), de ce que Nous leur avons attribué"},
  {verset:1, arabe: ">ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ-٣<", francais: "Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux."},
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
const sourateAtTahrim = [
  {titre: "66 Sourate At-Tahrim"},
]
const sourateAlMulk = [
  {titre: "67 Sourate Al-Mulk"},
]
const sourateAlQalam = [
  {titre: "68 Sourate Al-Qalam"},
]
const sourateAlHaqqah = [
  {titre: "69 Sourate Al-Haqqah"},
]
const sourateAlMaarij = [
  {titre: "70 Sourate Al-Maarij"},
]
const sourateNuh = [
  {titre: "71 Sourate Nuh"},
]
const sourateAlJinn = [
  {titre: "72 Sourate Al-Jinn"},
]
const sourateAlMuzzamil = [
  {titre: "73 Sourate Al-Muzzamil"},
]
const sourateAlMuddattir = [
  {titre: "74 Sourate Al-Muddattir"},
]
const sourateAlQiyamah = [
  {titre: "75 Sourate Al-Qiyamah"},
]
const sourateAlQiyamah = [
  {titre: "75 Sourate Al-Qiyamah"},
]
const sourateAlInsan = [
  {titre: "76 Sourate Al-Insan"},
]
const sourateAlMursalate = [
  {titre: "77 Sourate Al-Mursalate"},
]
const sourateAnNaba = [
  {titre: "78 Sourate An-Naba"},
]
const sourateAnNaziate = [
  {titre: "79 Sourate An-Naziate"},
]
const sourateAbasa = [
  {titre: "80 Sourate Abasa"},
]
const sourateAtTakwir = [
  {titre: "81 Sourate At-Takwir"},
]
const sourateAlInfitar = [
  {titre: "82 Sourate Al-Infitar"},
]
const sourateAlMutaffifin = [
  {titre: "83 Sourate Al-Mutaffifin"},
]
const sourateAlInsiqaq = [
  {titre: "84 Sourate Al-Insiqaq"},
]
const sourateAlBuruj = [
  {titre: "85 Sourate Al-Buruj"},
]
const sourateAtTariq = [
  {titre: "86 Sourate At-Tariq"},
]
const sourateAlAla = [
  {titre: "87 Sourate Al-Ala"},
]
const sourateAlGasiyah = [
  {titre: "88 Sourate Al-Gasiyah"},
]
const sourateAlFajr = [
  {titre: "89 Sourate Al-Fajr"},
]
const sourateAlBalad = [
  {titre: "90 Sourate Al-Balad"},
]
const sourateAchChams = [
  {titre: "91 Sourate Ach-Chams"},
]
const sourateAlLayl = [
  {titre: "92 Sourate Al-Layl"},
]
const sourateAdDuha = [
  {titre: "93 Sourate Ad-Duha"},
]
const sourateAsSarh = [
  {titre: "94 Sourate As-Sarh"},
]
const sourateAtTin = [
  {titre: "95 Sourate At-Tin"},
]
const sourateAlAlaq = [
  {titre: "96 Sourate Al-Alaq"},
]
const sourateAlQadr = [
  {titre: "97 Sourate Al-Qadr"},
]
const sourateAlBayyinah = [
  {titre: "98 Sourate Al-Bayyinah"},
]
const sourateAzZalzalah = [
  {titre: "99 Sourate Az-Zalzalah"},
]
const sourateAlAdiyate = [
  {titre: "100 Sourate Al-Adiyate"},
]
const sourateAlQariah = [
  {titre: "101 Sourate Al-Qariah"},
]
const sourateAtTakatur = [
  {titre: "102 Sourate At-Takatur"},
]
const sourateAlAsr = [
  {titre: "103 Sourate Al-Asr"},
]
const sourateAlHumazah = [
  {titre: "104 Sourate Al-Humazah"},
]
const sourateAlFil = [
  {titre: "105 Sourate Al-Fil"},
]
const sourateCoraish = [
  {titre: "106 Sourate Coraish"},
]
const sourateAlMaun = [
  {titre: "107 Sourate Al-Maun"},
]
const sourateAlKawtar = [
  {titre: "108 Sourate Al-Kawtar"},
]
const sourateAlKafirune = [
  {titre: "109 Sourate Al-Kafirune"},
]
const sourateAnNasr = [
  {titre: "110 Sourate An-Nasr"},
]
const sourateAlMasad = [
  {titre: "111 Sourate Al-Masad"},
]
const sourateAlIkhlas = [
  {titre: "112 Sourate Al-Ikhlas"},
]
const sourateAlFalaq = [
  {titre: "113 Sourate Al-Falaq"},
]
const sourateAnNas = [
  {titre: "114 Sourate An-Nas"},
]


// FUNCTIONS
// JS charge ce fichier JSON
async function chargerSourate(id){
    const response = await fetch(
        `data/${id}.json`
    );
    const sourate =
        await response.json();
    afficherSourate(sourate);
}

// fonction d'affichage devient
function afficherSourate(sourate){
    lecture.innerHTML = `
        <h2>
            ${sourate.id}
            ${sourate.nom}
        </h2>
    `;
    sourate.versets.forEach(v=>{
        lecture.innerHTML += `
        <div class="verset">
            <p>
                ${v.numero}
                ${v.arabe}
            </p>
            <p class="traduction">
                ${v.francais}
            </p>
        </div>
        `;
    });
}

// Lorsque l'utilisateur choisit une sourate
select.addEventListener("change",()=>{
    chargerSourate(
        select.value
    );
});

// CODES