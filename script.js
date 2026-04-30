function openTab(evt, tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Remove "active" class from all buttons
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => link.classList.remove('active'));

    // Show current tab and add active class to button
    const activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block';
    // Small timeout to trigger CSS animation
    setTimeout(() => activeTab.classList.add('active'), 10);
    evt.currentTarget.classList.add('active');
    
    // Scroll to top when switching
    window.scrollTo(0, 0);
}

// Modal (Popup) Controls
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind popup
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

// Close popup if clicking outside of the white box
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
