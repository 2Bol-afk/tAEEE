function SetUpToggle(buttonID, sectionID, showtext, hidetext) {
  const btn = document.getElementById(buttonID);
  const sctn = document.getElementById(sectionID);
  if (!btn || !sctn) {
    return;
  }

  btn.addEventListener('click', function () {
    if (sctn.style.display === 'none') {
      sctn.style.display = 'block';
      btn.textContent = hidetext;
    } else {
      sctn.style.display = 'none';
      btn.textContent = showtext;
    }
  });
}
SetUpToggle(
  'key-officials-btn',
  'officials-sctn',
  'Show Key Officials',
  'Hide Key Officials'
);
SetUpToggle(
  'faculty-staff-btn',
  'faculty-staff-sctn',
  'Show Faculty and Staff',
  'Hide Faculty and Staff'
);
SetUpToggle(
  'faculty-staff-btn-com',
  'faculty-staff-sctn-com',
  'Show Faculty and Staff',
  'Hide Faculty and Staff'
);
