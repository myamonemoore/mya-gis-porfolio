function openTab(tabId, buttonElement) {

    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    buttonElement.classList.add('active');
}

/* ---------- MODALS ---------- */

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

/* ---------- CLOSE MODAL WHEN CLICKING OUTSIDE ---------- */

window.onclick = function(event) {

    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {

        if (event.target === modal) {
            modal.style.display = 'none';
        }

    });

}
