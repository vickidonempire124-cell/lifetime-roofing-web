// app.js

// 1. Function for the Estimate Calculator
function calculateEstimate() {
    const size = parseFloat(document.getElementById('roofSize').value);
    const material = parseFloat(document.getElementById('materialType').value);
    const pitch = parseFloat(document.getElementById('pitchType').value);
    // Your calculation logic here (e.g., total = size * material * pitch)
    const total = (size * material * pitch).toFixed(2); // Example formula
    document.getElementById('totalEstimate').textContent = `$${total}`;
}

// 2. Function for Gallery Filtering
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    // Update active button state
    document.querySelectorAll('.gallery-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// 3. Function for Review Pagination
function changeReviewPage(pageNumber) {
    // Hide all review pages
    document.querySelectorAll('.review-page').forEach(page => page.classList.remove('active'));
    // Show the selected page
    document.getElementById(`reviewPage${pageNumber}`).classList.add('active');
    // Update active button state
    document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.page-btn')[pageNumber - 1].classList.add('active');
}
