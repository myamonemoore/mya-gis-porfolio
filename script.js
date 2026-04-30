function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => link.classList.remove('active'));

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block';
    setTimeout(() => activeTab.classList.add('active'), 10);
    evt.currentTarget.classList.add('active');
    window.scrollTo(0, 0);
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
