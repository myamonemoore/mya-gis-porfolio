// Tab Switching
function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.tab-link');

    contents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });

    links.forEach(link => {
        link.classList.remove('active');
    });

    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
        setTimeout(() => activeTab.classList.add('active'), 10);
    }
    evt.currentTarget.classList.add('active');
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal if user clicks outside of the content
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
