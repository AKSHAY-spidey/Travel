function search() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (query.includes('beach')) {
        results.innerHTML += `
            <h2>Beach Recommendations</h2>
            <div>
                <h3>Bondi Beach</h3>
                <img src="Bondi Beach.jpg" alt="Bondi Beach" style="width: 300px; height: 200px;">
            </div>
            <div>
                <h3>Waikiki Beach</h3>
                <img src="Waikiki Beach.jpg" alt="Waikiki Beach" style="width: 300px; height: 200px;">
            </div>`;
    }

    if (query.includes('temple')) {
        results.innerHTML += `
            <h2>Temple Recommendations</h2>
            <div>
                <h3>Angkor Wat</h3>
                <img src="Angkor Wat.jpg" alt="Angkor Wat" style="width: 300px; height: 200px;">
            </div>
            <div>
                <h3>Temple of Heaven</h3>
                <img src="Temple of Heaven.jpg" alt="Temple of Heaven" style="width: 300px; height: 200px;">
            </div>`;
    }

    if (query.includes('country')) {
        results.innerHTML += `
            <h2>Country Recommendations</h2>
            <div>
                <h3>Japan</h3>
                <img src="Japan.jpg" alt="Japan" style="width: 300px; height: 200px;">
            </div>
            <div>
                <h3>Italy</h3>
                <img src="Italy.jpg" alt="Italy" style="width: 300px; height: 200px;">
            </div>`;
    }
}

function clearSearch() {
    document.getElementById('search').value = '';
    document.getElementById('results').innerHTML = '';
}
