function searchCollection() {
    const input = document.getElementById('searchInput').value;
    const results = document.getElementById('searchResults');

    // Example static data, this should be replaced with dynamic data in a real application
    const collections = {
        "Base Set": "This is the base set collection...",
        "Legendary Collection": "This is the legendary collection...",
        "Base Set 2": "This is the base set 2 collection...",
        "Jungle": "This is the Jungle collection...",
        // Add more collections as needed
    };

    if (collections[input]) {
    "12345": "Card: Pikachu, Grade: 9.5, Collection: Base Set",
    "67890": "Card: Charizard, Grade: 10, Collection: Legendary Collection",
    "54321": "Card: Bulbasaur, Grade: 8.5, Collection: Jungle",
    "09876": "Card: Mewtwo, Grade: 9.0, Collection: Base Set 2",
    } 
    else {
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
