const contactToggle = document.getElementById('contactToggle');
const contactPanel = document.getElementById('contactPanel');
const contactCancel = document.getElementById('contactCancel');
const chatToggle = document.getElementById('chatToggle');
const chatPopup = document.getElementById('chatPopup');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const contactForm = document.getElementById('contactForm');

if (contactToggle && contactPanel) {
  contactToggle.addEventListener('click', () => {
    contactPanel.classList.toggle('hidden');
  });
}

if (contactCancel && contactPanel) {
  contactCancel.addEventListener('click', (event) => {
    event.preventDefault();
    contactPanel.classList.add('hidden');
  });
}

if (chatToggle && chatPopup) {
  chatToggle.addEventListener('click', () => {
    chatPopup.classList.toggle('hidden');
  });
}

if (chatClose && chatPopup) {
  chatClose.addEventListener('click', () => {
    chatPopup.classList.add('hidden');
  });
}

document.addEventListener('click', (event) => {
  if (!chatPopup || !chatToggle) return;
  const isClickInsideChat = chatPopup.contains(event.target) || chatToggle.contains(event.target);
  if (!isClickInsideChat) {
    chatPopup.classList.add('hidden');
  }
});

if (chatForm) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! A customer service specialist will respond shortly.');
    chatForm.reset();
    chatPopup.classList.add('hidden');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for reaching out. We will respond soon.');
    contactForm.reset();
    contactPanel.classList.add('hidden');
  });
}
