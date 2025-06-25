document.getElementById('reservationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    class: document.getElementById('classType').value,
    date: document.getElementById('date').value
  };

  // Send to Formspree
  await fetch('https://formspree.io/f/xkgbpwjy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  // Change English alert to Spanish
alert('¡Reserva enviada! Te confirmaremos por correo.');
});