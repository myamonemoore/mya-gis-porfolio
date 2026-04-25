function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.tab-link');

    contents.forEach(c => {
        c.style.display = 'none';
        c.classList.remove('active');
    });
    links.forEach(l => l.classList.remove('active'));

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block';
    setTimeout(() => activeTab.classList.add('active'), 10);
    evt.currentTarget.classList.add('active');
}

function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
