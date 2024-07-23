let currentIndex = 0;

function showNextImage() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel img');
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

function searchCollection() {
    const input = document.getElementById('searchInput').value;
    const results = document.getElementById('searchResults');

    // Example static data, this should be replaced with dynamic data in a real application
    const collections = {
        "Base Set": "This is the base set collection...",
        "Legendary Collection": "This is the legendary collection...",
        // Add more collections as needed
    };

    if (collections[input]) {
        results.innerHTML = collections[input];
    } else {
        results.innerHTML = "Collection not found.";
    }
}

function checkGrading() {
    const code = document.getElementById('gradingCode').value;
    const results = document.getElementById('gradingResults');

    // Example static data, this should be replaced with dynamic data in a real application
    const gradingDatabase = {
        "12345": "Card: Pikachu, Grade: 9.5, Collection: Base Set",
        "67890": "Card: Charizard, Grade: 10, Collection: Legendary Collection",
        // Add more grading data as needed
    };

    if (gradingDatabase[code]) {
        results.innerHTML = gradingDatabase[code];
    } else {
        results.innerHTML = "Grading code not found.";
    }
}

