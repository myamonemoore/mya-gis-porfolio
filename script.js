function openTab(evt, tabName) {
    // 1. Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // 2. Deactivate all buttons
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show current tab and activate button
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
    evt.currentTarget.classList.add('active');
}

// 4. Initial load setup
window.addEventListener('DOMContentLoaded', () => {
    // Manually trigger the "About" tab
    const aboutTab = document.getElementById('about');
    const aboutBtn = document.querySelector('.tab-link'); // Gets first button
    
    if (aboutTab && aboutBtn) {
        aboutTab.style.display = 'block';
        aboutBtn.classList.add('active');
    }
});
