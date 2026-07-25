const temples = [
  {
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Bengaluru India Temple",
    location: "Bengaluru, India",
    dedicated: "2020, November, 20",
    area: 38000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bengaluru-india-temple/bengaluru-india-temple-7886-main.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    templeName: "Boston Massachusetts Temple",
    location: "Belmont, Massachusetts, USA",
    dedicated: "2000, October, 1",
    area: 69600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
  },
  {
    templeName: "Detroit Michigan Temple",
    location: "Bloomfield Hills, Michigan, USA",
    dedicated: "1999, October, 23",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/detroit-michigan-temple/detroit-michigan-temple-61664-main.jpg"
  },
  {
    templeName: "Manhattan New York Temple",
    location: "New York City, New York, USA",
    dedicated: "2004, June, 13",
    area: 20370,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
  },
  {
    templeName: "Portland Oregon Temple",
    location: "Lake Oswego, Oregon, USA",
    dedicated: "1989, August, 19",
    area: 80500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-1629-main.jpg"
  },
  {
    templeName: "Seattle Washington Temple",
    location: "Bellevue, Washington, USA",
    dedicated: "1980, November, 17",
    area: 110000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg"
  },
  {
    templeName: "The Hague Netherlands Temple",
    location: "Zoetermeer, Netherlands",
    dedicated: "2002, September, 8",
    area: 10500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/the-hague-netherlands-temple/the-hague-netherlands-temple-40883-main.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Buenos Aires Argentina temple",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 30659,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "Vancouver British Columbia Temple",
    location: "British Columbia, Canada ",
    dedicated: "2010, April, 9",
    area: 28165,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg"
  }
];

const gallery = document.querySelector(".gallery");


function displayTemples(templeList) {
  gallery.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("figure");
    
   
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";


    const figcaption = document.createElement("figcaption");

    const title = document.createElement("h2");
    title.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;


    figcaption.appendChild(title);
    figcaption.appendChild(location);
    figcaption.appendChild(dedicated);
    figcaption.appendChild(area);

    card.appendChild(image);
    card.appendChild(figcaption);

    gallery.appendChild(card);
  });
}


function getYear(dedicatedString) {
  return parseInt(dedicatedString.split(",")[0], 10);
}


document.querySelector("#home")?.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.querySelector("#old")?.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(temple => getYear(temple.dedicated) < 1900));
});

document.querySelector("#new")?.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(temple => getYear(temple.dedicated) > 2000));
});

document.querySelector("#large")?.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(temple => temple.area > 90000));
});

document.querySelector("#small")?.addEventListener("click", (e) => {
  e.preventDefault();

  displayTemples(temples.filter(temple => temple.area < 10000 || temple.area <= 10700));
});


displayTemples(temples);

const yearElem = document.querySelector("#year");
if (yearElem) yearElem.textContent = new Date().getFullYear();

const lastModElem = document.querySelector("#lastModified");
if (lastModElem) lastModElem.textContent = `Last Modified: ${document.lastModified}`;