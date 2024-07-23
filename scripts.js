let page = 1;
const limit = 10; // Number of items per page
const contentContainer = document.getElementById('content-container');
const loadingIndicator = document.getElementById('loading-indicator');

async function fetchItems(page, limit) {
    // Replace this URL with your API or data source
    const response = await fetch(`https://api.example.com/items?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data.items; // Adjust based on your API response structure
}

function createItemElement(item) {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    return div;
}

async function loadMoreItems() {
    loadingIndicator.style.display = 'block';
    const items = await fetchItems(page, limit);
    items.forEach(item => {
        const itemElement = createItemElement(item);
        contentContainer.appendChild(itemElement);
    });
    loadingIndicator.style.display = 'none';
    page++;
}

function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 100) {
        loadMoreItems();
    }
}

window.addEventListener('scroll', handleScroll);

// Initial load
loadMoreItems();


