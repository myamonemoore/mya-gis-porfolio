function openTab(tabId, button) {

    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';

    button.classList.add('active');
}

/* ---------- MODALS ---------- */

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

/* ---------- CLOSE MODAL OUTSIDE CLICK ---------- */

window.onclick = function(event) {

    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {

        if (event.target === modal) {
            modal.style.display = 'none';
        }

    });

}

/* ---------- DEFAULT TAB ---------- */

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('about').style.display = 'block';

});
