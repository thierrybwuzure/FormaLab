const UNIT_PRICE = 60;
const BOOKING_FEE = 10;

function calculateTotal(quantity) {
  return quantity * (UNIT_PRICE + BOOKING_FEE);
}

const totalNode = document.querySelector('#total');
const feedbackNode = document.querySelector('#feedback');

document.querySelector('#calculate').addEventListener('click', () => {
  const quantity = Number(document.querySelector('#qty').value);
  totalNode.textContent = `Total : ${calculateTotal(quantity)} €`;
});

document.querySelector('#load-workshops').addEventListener('click', async () => {
  const message = document.querySelector('#message');
  const list = document.querySelector('#workshops');
  message.textContent = 'Chargement des ateliers…';
  list.replaceChildren();
  try {
    const response = await fetch('./data/atelier.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const workshops = await response.json();
    for (const workshop of workshops) {
      const li = document.createElement('li');
      li.textContent = `${workshop.title} — ${workshop.date}`;
      list.append(li);
    }
    message.textContent = `${workshops.length} ateliers chargés.`;
  } catch (error) {
    console.error('Chargement impossible :', error);
    message.textContent = 'Impossible de charger les ateliers.';
  }
});

document.querySelector('#confirm').addEventListener('click', () => {
  const email = document.querySelector('#email').value.trim();
  const quantity = Number(document.querySelector('#qty').value);
  if (!email) {
    feedbackNode.textContent = 'Veuillez saisir un e-mail.';
    return;
  }
  feedbackNode.textContent = `Réservation simulée : ${quantity} place(s), ${calculateTotal(quantity)} €.`;
});
