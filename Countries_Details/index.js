let Container = document.querySelector(".container");
let searchBtn = document.querySelector(".btn");
let url = "https://restcountries.com/v3.1/all";
let Card = document.querySelector(".card");
let loader = document.querySelector(".loader");

var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central Arfrican Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauro",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// https://api.javascripttutorial.net/v1/quotes/?page=1&limit=10

//New Code
let dataset = [];
let pageNumber = 0;
let perPage = 10;
let loadLock = true;

//fetch value using AJAX
const getData = (url) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response Error");
      }
    })
    .then((data) => {
      data?.map((d) => {
        dataset.push(d);
      });
    })
    .catch((error) => console.log("FETCH ERROR:", error));
};

// dataset.map((d) => console.log(d));

function loadData() {
  loader.classList.remove("dis");
  setTimeout(() => {
    let card = document.querySelector(".cards");
    // let pageHeader = document.createElement("div");
    let currrentData = dataset.slice(
      pageNumber * perPage,
      pageNumber * perPage + perPage
    );

    if (currrentData.length > 0) {
      // pageHeader.innerHTML = `Page ${pageNumber}`;
      // document.getElementById("items").appendChild(pageHeader);

      currrentData.forEach(function (item) {
        let newDiv = document.createElement("div");

        newDiv.className = "card";
        newDiv.innerHTML = card.innerHTML
          .replace(`{title}`, item.name.common)
          .replace("{image}", item.flags.png)
          .replace(`{capital}`, item.capital)
          .replace(
            `{population}`,
            `${(+item.population / 1000000).toFixed(1)} M`
          )
          .replace(`{area}`, item.area);

        document.querySelector(".container").appendChild(newDiv);
      });
    }
    loader.classList.add("dis");
    loadLock = false;
  }, 2000);
}

window.addEventListener("scroll", function (e) {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  console.log(
    scrollTop,
    scrollHeight,
    clientHeight,
    scrollTop + clientHeight,
    scrollHeight - 5
  );
  let y = this.window.scrollY;
  let loadHeight = this.document.body.scrollHeight * 0.3;

  // console.log("scrolling", loadLock, y, loadHeight);
  if (loadLock == false && scrollTop + clientHeight >= scrollHeight - 5) {
    pageNumber++;
    loadLock = true;
    loadData();
  }
});

// searchBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let input = document.getElementById("country-name");
//   console.log(input.value);
//   newUrl = `https://restcountries.com/v3.1/name/india`;
//   getData(newUrl);
//   console.log(getData(newUrl));
//   console.log(dataset);
//   loadData();
// });

window.addEventListener("load", function () {
  getData(url);
  loadData();
});

/* Autocomplete section start here*/
// let input = document.getElementById("country-name");
function autoComplete(input, arr) {
  let currentFocus;

  input.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    console.log(a, b, i, val);

    closeAllLists();

    if (!val) {
      return false;
    }

    currentFocus = -1;

    a = document.createElement("div");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    this.parentNode.appendChild(a);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("div");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        b.addEventListener("click", function (e) {
          input.val = this.getElementsByTagName("input")[0].value;

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  input.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");

    if (x) x = x.getElementsByTagName("div");

    if (e.keyCode === 40) {
      currentFocus++;

      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode === 13) {
      e.preventDefault();

      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);

    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;

    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      a[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");

    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
