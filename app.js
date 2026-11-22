const form = document.querySelector('#quote');
const result = document.querySelector('#result');
const message = document.querySelector('#message');
const status = document.querySelector('#status');

form.hidden = false;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fields = new FormData(form);
  const name = fields.get('customer').trim();
  const mobile = fields.get('mobile').trim();
  const application = fields.get('application').trim();
  const quantity = fields.get('quantity');

  message.value = [
    'Hola, NEW SILICONE. Quisiera cotizar silicona blanca RTV-2.',
    'Nombre o empresa: ' + name,
    'Número de celular: ' + mobile,
    'Cantidad requerida: ' + quantity + ' kg',
    'Pieza o aplicación: ' + application,
    '¿Podrían indicarme precio y disponibilidad?'
  ].join('\n');
  status.textContent = 'Copia el mensaje y pégalo en Messenger.';
  result.hidden = false;
  message.focus();
});

form.addEventListener('input', () => {
  result.hidden = true;
  status.textContent = '';
});

document.querySelector('#copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message.value);
    status.textContent = 'Mensaje copiado. Abre el chat y pégalo en Messenger.';
  } catch {
    message.focus();
    message.select();
    status.textContent = 'Mensaje seleccionado. Cópialo con tu teclado o menú.';
  }
});
