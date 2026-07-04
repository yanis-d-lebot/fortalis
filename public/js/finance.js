console.log("finance.js O.K.")

// VARIABLES
// Finance Button
const financeButton = document.getElementById("finance-button")
const financeButtonFinance = document.getElementById("finance_button_finance")
const calculatorButtonFinance = document.getElementById("calculator_button_finance")

// Finance Calculator
const financeCalculatorContainer = document.getElementById("finance-calculator-container")

// Finance
const financeContainer = document.getElementById("finance-container")
const titleFinanceCase = [
  {month: "Month", work: "Work", resale: "Resale", other: "Other", lost: "Lost", guard:"Guard", endmonth:"EndMonth"}
]
const twentyTwentyFive = [
  {year: "2025"},
  {month: "Mai 2025", work: 241.47, resale: 0.00, other: 1309.5, lost: 709.78, guard: 841.19, endmonth:2773.21},
  {month: "Juin 2025", work: 0.00, resale: 0.00, other: 834.42, lost: 497.37, guard:395.63, endmonth: 3385.56},
  {month: "Juillet 2025", work: 1385.49, resale: 0.00, other: 897.42, lost: 803.43, guard:1479.56, endmonth: 4615.79},
  {month: "Août 2025", work: 1519.39, resale: 0.00, other: 291.50, lost: 1192.13, guard:618.76, endmonth:5294.74},
  {month: "Septembre 2025", work: 1889.53, resale: 0.00, other: 1180.00, lost: 601.19, guard:2468.34, endmonth:7867.41},
  {month: "Octobre 2025", work: 1478.52, resale: 0.00, other: 0.00, lost: 1668.46, guard:-120.21, endmonth:7747.20},
  {month: "Novembre 2025", work: 1609.50, resale: 0.00, other: 269.33, lost: 1606.83, guard:272.00, endmonth:8211.23},
  {month: "Décembre 2025", work: 1515.74, resale: 0.00, other: 0.00, lost: 374.35, guard:1141.39, endmonth:9358.21}
]
const twentyTwentySix = [
  {year: "2026"},
  {month: "Janvier 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Février 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Mars 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Avril 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Mai 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Juin 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Juillet 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Août 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Septembre 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Octobre 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Novembre 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Décembre 2026", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00}
]
const twentyTwentySeven = [
  {year: "2027"},
  {month: "Janvier 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Février 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Mars 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Avril 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Mai 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Juin 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Juillet 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Août 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Septembre 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Octobre 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Novembre 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00},
  {month: "Décembre 2027", work: 0.00, resale: 0.00, other: 0.00, lost: 0.00, guard:0.00, endmonth:0.00}
]
const finances = {
  titleFinanceCase,
  twentyTwentyFive,
  twentyTwentySix,
  twentyTwentySeven
}


// FUNCTIONS
// Finance Button
financeButtonFinance.addEventListener("click", () => {
  financeContainer.style.display = "block"
  financeCalculatorContainer.style.display = "none"
})
calculatorButtonFinance.addEventListener("click", () => {
  financeCalculatorContainer.style.display = "block"
  financeContainer.style.display = "none"
})

// Finance Calculator
// html
let priceUserFinance = document.createElement("input")
priceUserFinance.className = "price_user_finance"
priceUserFinance.type = "text"
financeCalculatorContainer.append(priceUserFinance)

let logementCalculatorFinance = document.createElement("div")
logementCalculatorFinance.className =  "logement_calculator_finance text_calculator_finance"
logementCalculatorFinance.textContent = "Logement: 0.00€"
financeCalculatorContainer.append(logementCalculatorFinance)

let fraisCalculatorFinance = document.createElement("div")
fraisCalculatorFinance.className = "frais_calculator_finance text_calculator_finance"
fraisCalculatorFinance.textContent = "Frais: 0.00€"
financeCalculatorContainer.append(fraisCalculatorFinance)

let epargneCalculatorFinance = document.createElement("div")
epargneCalculatorFinance.className = "epargne_calculator_finance text_calculator_finance"
epargneCalculatorFinance.textContent = "Epargne: 0.00€"
financeCalculatorContainer.append(epargneCalculatorFinance)

let plaisirCalculatorFinance = document.createElement("div")
plaisirCalculatorFinance.className = "plaisir_calculator_finance text_calculator_finance"
plaisirCalculatorFinance.textContent = "Plaisir: 0.00€"
financeCalculatorContainer.append(plaisirCalculatorFinance)

let projetsCalculatorFinance = document.createElement("div")
projetsCalculatorFinance.className = "projet_calculator_finance text_calculator_finance"
projetsCalculatorFinance.textContent = "Projet: 0.00€"
financeCalculatorContainer.append(projetsCalculatorFinance)

let resteCalculatorFinance = document.createElement("div")
resteCalculatorFinance.className = "reste_calculator_finance text_calculator_finance"
resteCalculatorFinance.textContent = "Reste: 0.00€"
financeCalculatorContainer.append(resteCalculatorFinance)

function calculatorFinance(salaire){
  let logement = salaire * 0.2188
  let frais = salaire * 0.1563
  let epargne = salaire * 0.1875
  let plaisir = salaire * 0.0625
  let projets = salaire * 0.0625
  let reste = salaire * 0.3125

  logementCalculatorFinance.textContent =
    `Logement : ${logement.toFixed(2)} €`
  fraisCalculatorFinance.textContent =
    `Frais : ${frais.toFixed(2)} €`
  epargneCalculatorFinance.textContent =
    `Épargne : ${epargne.toFixed(2)} €`
  plaisirCalculatorFinance.textContent =
    `Plaisir : ${plaisir.toFixed(2)} €`
  projetsCalculatorFinance.textContent =
    `Projets : ${projets.toFixed(2)} €`
  resteCalculatorFinance.textContent =
    `Reste : ${reste.toFixed(2)} €`
}

// priceUserFinance.addEventListener("keydown", e => {
//    if(e.key==="Enter"){
//       const salaire =
//       Number(priceUserFinance.value)
//       calculatorFinance(salaire)
//    }
// })

// let validationCalculatorFinance = document.createElement("validation_calculator_finance")
// validationCalculatorFinance.textContent = "Calculer"
// validationCalculatorFinance.addEventListener("click", () => {
//    const salaire =
//       Number(priceUserFinance.value)
//    calculatorFinance(salaire)
// })

priceUserFinance.addEventListener("input", () => {
   const salaire =
      Number(priceUserFinance.value)
   calculatorFinance(salaire)
})

// Finance
function createRow(data){
    let row = document.createElement("div")
    row.className = "finance-row"
    Object.values(data).forEach(value=>{
      let cell = document.createElement("div")
      if(data.year){
        cell.className = "finance-annee-cell"
      }
      else if(data.month === "Month"){
        cell.className = "finance-title-cell"
      }
      else{
        cell.className = "finance-cell"
      }
      cell.textContent =
      value.toLocaleString(
        "fr-FR",
        {
            style:"currency",
            currency:"EUR"
        }
      )
      row.append(cell)
    })
    return row
}

function showYear(year){
    finances[year].forEach(month=>{
        financeContainer.append(
           createRow(month)
        )
    })
}

function manageFinance(){
    Object.keys(finances).forEach(year=>{
      showYear(year)
    })
}

// CODES
// Finance Button

// Finance Calculator

// Finance
manageFinance()