document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2022, May, 22",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Miraflores Guatemala City",
        location: "Guatemala City, Guatemala",
        dedicated: "Pending Dedication",
        area: 30000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/miraflores-guatemala-city-guatemala-temple/miraflores-guatemala-city-guatemala-temple-62334.jpg"
      },
      {
        templeName: "Managua Nicaragua",
        location: "Managua City, Nicaragua",
        dedicated: "Pending Dedication",
        area: 25000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/managua-nicaragua-temple/managua-nicaragua-temple-61205.jpg"
      },
      {
        templeName: "Quito Ecuador",
        location: "Quito, Ecuador",
        dedicated: "2022, November, 20",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-3434.jpg"
      },
    ];

    // --- DOM ELEMENTS ---
    const gridContainer = document.querySelector('.temple-grid');
    const pageTitle = document.getElementById('page-title');
    const navLinks = document.querySelectorAll('nav a');

    // --- FUNCTIONS ---

    /**
     * Creates a temple card DOM element from a temple object.
     * @param {object} temple - The temple data object.
     * @returns {HTMLElement} - The created figure element (temple card).
     */
    function createTempleCard(temple) {
        const card = document.createElement('figure');
        card.className = 'temple-card';

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy'; // Native lazy loading

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(img);
        card.appendChild(figcaption);
        return card;
    }

    /**
     * Clears and displays a list of temples in the grid.
     * @param {Array<object>} templeList - The array of temples to display.
     */
    function displayTemples(templeList) {
        gridContainer.innerHTML = ''; // Clear previous cards
        templeList.forEach(temple => {
            gridContainer.appendChild(createTempleCard(temple));
        });
    }

    // --- EVENT LISTENERS & FILTERING ---

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigation
            const filter = e.target.id;
            let filteredTemples = [];
            let title = '';

            // Update active link style
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');

            switch (filter) {
                case 'nav-old':
                    title = 'Old Temples';
                    filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                    break;
                case 'nav-new':
                    title = 'New Temples';
                    filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                    break;
                case 'nav-large':
                    title = 'Large Temples';
                    filteredTemples = temples.filter(t => t.area > 90000);
                    break;
                case 'nav-small':
                    title = 'Small Temples';
                    filteredTemples = temples.filter(t => t.area < 10000);
                    break;
                default: // 'nav-home'
                    title = 'Home';
                    filteredTemples = temples;
                    break;
            }

            pageTitle.textContent = title;
            displayTemples(filteredTemples);
        });
    });

    // --- INITIAL DISPLAY ---
    document.getElementById('nav-home').classList.add('active'); // Set home as active initially
    displayTemples(temples); // Display all temples on page load


    // --- FOOTER & MENU LOGIC (NO CHANGES) ---
    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('header nav');
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
    });

    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) lastModifiedParagraph.textContent = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;
});