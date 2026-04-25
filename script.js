function openTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.tab-link');
    contents.forEach(c => c.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }
window.onclick = (e) => { if (e.target.className === 'modal') e.target.style.display = "none"; }
