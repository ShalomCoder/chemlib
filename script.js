window.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      previousElem();
  } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextElem();
  } 
});

function Element(
  name,
  num,
  symbol,
  mass,
  config,
  type,
  box,
  state,
  radioactivitiy
)
 {
  this.name = name;
  this.num = num;
  this.symbol = symbol;
  this.mass = mass;
  this.config = config;
  this.type = type;
  this.box = box;
  this.state = state;
  this.radioactivitiy = radioactivitiy;
}

function Compound(
  firstElem,
  secondElem
)
{
  this.firstElem = firstElem;
}

function shalomagbongo() {
  Draggable.create("#container");
}

function $(x) {
  return document.querySelector(x);
}

function updateCard() {
  var name1 = $("#name1");
  var name2 = $("#name2");

  var symbol = $("#symbol");

  var num1 = $("#atomic_number1");
  var num2 = $("#atomic_number2");

  var mass = $("#mass");
  var mass2 = $("#mass-2");

  var configuration = $("#configuration");

  var type = $("#type");

  var box = $("#container");

  var state = $("#state");
  var state2 = $("#state-2");

  var radioactivity = $("#radioactive");

  name1.innerHTML = elements[index];
  name2.innerHTML = elements[index];

  symbol.innerHTML = symbols[index];

  mass.innerHTML = masses[index];
  mass2.innerHTML = masses[index];

  num1.innerHTML = index + 1;
  num2.innerHTML = index + 1;

  configuration.innerHTML = electronConfig(index + 1);

  type.innerHTML = elemType(symbols[index]);

  state.innerHTML = standardState(elements[index]);
  state2.innerHTML = standardState(elements[index]);

  radioactivity.innerHTML = isRadioactive(index + 1);

  //let elem = new Element(elements[index], symbols[index], masses[index], index+1, electronConfig(index + 1), elemType(symbols[index]), standardState(elements[index]), isRadioactive(index + 1));

  //console.log(elem.name, elem.num, elem.symbol, elem.mass, elem.config, elem.type, elem.state, elem.radioactivitiy)

  /*
  if (elements[index] == 'Gold') {
    $('#container').style.backgroundColor = 'gold';
    symbol.classList.remove('text-blue-500');
    symbol.classList.add('text-white');
  }
  else{
    $('#container').style.backgroundColor = 'white';
    symbol.classList.add('text-blue-500');
    symbol.classList.remove('text-white');
  }
  */

  var prevElemIndex;
  var nextElemIndex;

  if (index - 1 === -1) {
    prevElemIndex = 103;
    $("#prevElem").style.visibility = "hidden";
  } else {
    prevElemIndex = index - 1;
    $("#prevElem").style.visibility = "visible";
  }

  if (index + 1 === 104) {
    nextElemIndex = 0;
    $("#nextElem").style.visibility = "hidden";
  } else {
    nextElemIndex = index + 1;
    $("#nextElem").style.visibility = "visible";
  }

  $("#prevElem").innerHTML = symbols[prevElemIndex];
  $("#nextElem").innerHTML = symbols[nextElemIndex];
}

function nextElem() {
  if (index + 1 == 104) {
    index = 0;
  } else {
    index++;
  }

  updateCard();
}

function previousElem() {
  if (index - 1 == -1) {
    index = 103;
  } else {
    index--;
  }

  updateCard();
}

function firstElem() {
  index = 0;
  Draggable.create("#navbar", { trigger: "#navbar-drag", type: "xy" });

  updateCard();
}

function log() {
  console.log(
    "%c User right-clicked %c Right-click blocked successfully",
    "background-color:#f00;padding:.5rem;font-family:Poppins;border-radius:50rem;color:#fff;margin-right:10px",
    "background-color:#0b0;padding:.5rem;font-family:Poppins;border-radius:50rem;color:#fff;"
  );
}

var index = 0;

const elements = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminium",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium",
  "Scandium",
  "Titanium",
  "Vanadium",
  "Chromium",
  "Manganese",
  "Iron",
  "Cobalt",
  "Nickel",
  "Copper",
  "Zinc",
  "Gallium",
  "Germanium",
  "Arsenic",
  "Selenium",
  "Bromine",
  "Krypton",
  "Rubidium",
  "Strontium",
  "Yttrium",
  "Zirconium",
  "Niobium",
  "Molybdenum",
  "Technetium",
  "Ruthenium",
  "Rhodium",
  "Palladium",
  "Silver",
  "Cadmium",
  "Indium",
  "Tin",
  "Antimony",
  "Tellurium",
  "Iodine",
  "Xenon",
  "Caesium",
  "Barium",
  "Lanthanum",
  "Cerium",
  "Praseodymium",
  "Neodymium",
  "Promethium",
  "Samarium",
  "Europium",
  "Gadolinium",
  "Terbium",
  "Dysprosium",
  "Holmium",
  "Erbium",
  "Thulium",
  "Ytterbium",
  "Lutetium",
  "Hafnium",
  "Tantalum",
  "Tungsten",
  "Rhenium",
  "Osmium",
  "Iridium",
  "Platinum",
  "Gold",
  "Mercury",
  "Thallium",
  "Lead",
  "Bismuth",
  "Polonium",
  "Astatine",
  "Radon",
  "Francium",
  "Radium",
  "Actinium",
  "Thorium",
  "Protactinium",
  "Uranium",
  "Neptunium",
  "Plutonium",
  "Americium",
  "Curium",
  "Berkelium",
  "Californium",
  "Einsteinium",
  "Fermium",
  "Mendelevium",
  "Nobellium",
  "Lawrencium",
  "Rutherfordium",
  "?",
];

const symbols = [
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Po",
  "At",
  "Rn",
  "Fr",
  "Ra",
  "Ac",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "?",
];

const masses = [
  1.008,
  4.002602,
  6.94,
  9.0121831,
  10.81,
  12.011,
  14.007,
  15.999,
  18.998403163,
  20.1797,
  22.98976928,
  24.305,
  26.9815385,
  28.085,
  30.973761998,
  32.06,
  35.45,
  39.948,
  39.0983,
  40.078,
  44.955908,
  47.867,
  50.9415,
  51.9961,
  54.938044,
  55.845,
  58.933194,
  58.6934,
  63.546,
  65.38,
  69.723,
  72.63,
  74.921595,
  78.971,
  79.904,
  83.798,
  85.4678,
  87.62,
  88.90584,
  91.224,
  92.90637,
  95.95,
  98,
  101.07,
  102.9055,
  106.42,
  107.8682,
  112.414,
  114.818,
  118.71,
  121.76,
  127.6,
  126.90447,
  131.293,
  132.90545196,
  137.327,
  138.90547,
  140.116,
  140.90766,
  144.242,
  145,
  150.36,
  151.964,
  157.25,
  158.92535,
  162.5,
  164.93033,
  167.259,
  168.93422,
  173.054,
  174.9668,
  178.49,
  180.94788,
  183.84,
  186.207,
  190.23,
  192.217,
  195.084,
  196.966569,
  200.592,
  204.38,
  207.2,
  208.9804,
  209,
  210,
  222,
  223,
  226,
  227,
  232.0377,
  231.03588,
  238.02891,
  237,
  244,
  243,
  247,
  247,
  251,
  252,
  257,
  258,
  259,
  266,
  267,
  "?",
];

const gasses = [
  "Hydrogen",
  "Helium",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Chlorine",
  "Neon",
  "Argon",
  "Krypton",
  "Xenon",
  "Radon",
];

const liquids = ["Mercury", "Bromine"];

function standardState(element) {
  var state;
  if (gasses.indexOf(element) != -1) {
    state = "Gas";
  } else if (liquids.indexOf(element) != -1) {
    state = "Liquid";
  } else {
    state = "Solid";
  }
  return state;
}

function searchQuery() {
  var searchbar = $("#searchbar");
  var returned = elements.indexOf(searchbar.value);
  if (index === -1) {
    index = 104;
  } else {
    index = returned;
    searchbar.value = "";
  }

  updateCard();
}

function electronConfig(atomicNumber) {
  //Define order of orbitals
  const orbitals = [
    "1s",
    "2s",
    "2p",
    "3s",
    "3p",
    "4s",
    "3d",
    "4p",
    "5s",
    "4d",
    "5p",
    "6s",
    "4f",
    "5d",
    "6p",
    "7s",
    "5f",
    "6d",
    "7p",
  ];

  //Initialize variables
  let config = "";
  let electrons = atomicNumber;
  let i = 0;

  //Loop through orbitals until all electrons are placed
  while (electrons > 0) {
    const orbital = orbitals[i];
    let orbitalMax;
    if (orbital[1] === "s") {
      orbitalMax = 2;
    } else if (orbital[1] === "p") {
      orbitalMax = 6;
    } else if (orbital[1] == "d") {
      orbitalMax = 10;
    } else {
      orbitalMax = 14;
    }
    const maxElectrons =
      orbital[0] === "s"
        ? 2
        : orbital[0] === "p"
          ? 6
          : orbital[0] === "d"
            ? 10
            : orbital[0] === "f"
              ? 14
              : orbitalMax;
    const placedElectrons = Math.min(electrons, maxElectrons);

    config += `${orbital}<sup>${placedElectrons}</sup>`;
    electrons -= placedElectrons;
    i++;
  }

  return abbrev(config);
}

function abbrev(config) {
  const nobleGases = {
    "1s<sup>2</sup>": "He",
    "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>": "Ne",
    "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>":
      "Ar",
    "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>":
      "Kr",
    "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>5s<sup>2</sup>4d<sup>10</sup>5p<sup>6</sup>":
      "Xe",
    "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>5s<sup>2</sup>4d<sup>10</sup>5p<sup>6</sup>6s<sup>2</sup>4f<sup>14</sup>5d<sup>10</sup>6p<sup>6</sup>":
      "Rn",
  };

  let longestPrefix = "";
  for (const nobleGasConfig in nobleGases) {
    if (config.startsWith(nobleGasConfig)) {
      longestPrefix = nobleGasConfig;
    }
  }

  let newConfig = `[${nobleGases[longestPrefix]}]${config.slice(
    longestPrefix.length
  )}`;

  if (longestPrefix) {
    if (
      `[${nobleGases[longestPrefix]}]` ===
      `[${nobleGases[longestPrefix]}]${config.slice(longestPrefix.length)}`
    ) {
      newConfig = newConfig + ` or ${longestPrefix}`;
    }
    return newConfig;
  } else {
    return config;
  }
}

function getElementType(electronConfiguration) {
  //Split the electron config. into individual orbitals
  const orbitals = electronConfiguration.slice();

  //Get the last orbital
  const lastOrbital = electronConfiguration[electronConfiguration.length - 1];

  //Get the number of electrons in the last orbital
  const numElectrons = parseInt(lastOrbital);

  if (numElectrons > 3) {
    return "Metal";
  } else if (numElectrons === 3) {
    return "Metalloid";
  } else {
    return "Non-metal";
  }
}

const nonMetals = [
  "H",
  "He",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Cl",
  "Ar",
  "Br",
  "Kr",
  "I",
  "Xe",
  "At",
  "Rn",
];

function elemType(symbol) {
  if (
    symbol === "B" ||
    symbol === "Si" ||
    symbol === "Ge" ||
    symbol === "As" ||
    symbol === "Te"
  ) {
    return "Metalloid";
  } else if (nonMetals.indexOf(symbol) != -1) {
    return "Non-metal";
  } else {
    return "Metal";
  }
}

function isRadioactive(number) {
  var radioactivitiy;
  if (
    number === 43 ||
    number === 61 ||
    (number > 83 && number < elements.length)
  ) {
    radioactivitiy = '<i class="bi-check-circle-fill"></i>';
  } else {
    radioactivitiy = '<i class="bi-x-circle-fill"></i>';
  }
  return radioactivitiy;
}

function activeTab(button) {
  document.querySelector("#homeTab").classList.remove("active-tab");
  document.querySelector("#quizTab").classList.remove("active-tab");
  document.querySelector("#settingsTab").classList.remove("active-tab");

  document.querySelector("#homeTab").classList.add("inactive-tab");
  document.querySelector("#quizTab").classList.add("inactive-tab");
  document.querySelector("#settingsTab").classList.add("inactive-tab");

  button.classList.remove("inactive-tab");
  button.classList.add("active-tab");

  var buttonId = button.getAttribute("id");

  var activeTab = buttonId.slice(0, buttonId.indexOf("T"));
  activeTab += "Page";

  $("#homePage").style.display = "none";
  $("#quizPage").style.display = "none";
  $("#settingsPage").style.display = "none";

  console.log(activeTab);

  $(`#${activeTab}`).style.display = "block";
}

/*document.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.querySelectorAll('.radio-input');

    radioButtons.forEach((radio) => {
      radio.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;

        document.body.setAttribute('data-theme', selectedTheme);
      })
    })
  });*/

function colorScheme(radio) {
  $(":root").setAttribute("data-theme", radio.value);
  localStorage.setItem("lastTheme", radio.value);
  console.log(`theme changed - ${radio.value}`);
}

function getLastTheme() {
  let lastTheme = localStorage.getItem("lastTheme");
  if (lastTheme.length != false) {
    $(":root").setAttribute("data-theme", lastTheme);
    document
      .querySelector(`.radio-input[value="${lastTheme}"]`)
      .setAttribute("checked", "true");
    console.log(`theme loaded - ${lastTheme}`);
  } else {
    $(":root").setAttribute("data-theme", "blue");
    document
      .querySelector(`.radio-input[value="blue"]`)
      .setAttribute("checked", "true");
    console.log("theme set - blue");
  }
}

//This function doesn't work every time! I'll fix it soon.
/*
function updateBg(){
  let bgselector = $('#toggleBgPic');

  if (bgselector.value == 'on'){
    $('body').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(\'bg.JPG\');';
  }
  else{
    $('body').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))';
  }
}
*/


async function getElementImage(elementName) {
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&titles=${elementName}&prop=imageinfo&iiprop=url&format=json&origin=*`);

  const data = await response.json();

  const page = data.query.pages[Object.keys(data.query.pages)[0]];

  return page.imageinfo[0].url;
}

function cardView(radio) {
  $(":root").setAttribute("data-card", radio.value);
  localStorage.setItem("lastCard", radio.value);
  console.log(`card view changed - ${radio.value}`);
}

function getLastCard() {
  let lastCard = localStorage.getItem("lastCard");
  if (lastCard.length != false) {
    $(":root").setAttribute("data-card", lastCard);
    document
      .querySelector(`.radio-input[value="${lastCard}"]`)
      .setAttribute("checked", "true");
    console.log(`card view loaded - ${lastCard}`);
  } else {
    $(":root").setAttribute("data-card", "simple");
    document.querySelector(`.radio-input-v[value="simple"]`).setAttribute("checked", "true");
    console.log("card view set - simple");
  }
}