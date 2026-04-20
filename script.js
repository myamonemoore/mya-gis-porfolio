document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  function setupPopup(triggerId, popupId) {
    const trigger = document.getElementById(triggerId);
    const popup = document.getElementById(popupId);

    if (!trigger || !popup) return;

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      popup.style.display = 'flex';
    });

    const closeBtn = popup.querySelector('.close-popup');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
      });
    }

    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  }

  setupPopup('openLidarPopup', 'lidarPopup');
  setupPopup('openSeattlePopup', 'seattlePopup');
});
