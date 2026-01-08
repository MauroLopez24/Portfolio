document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch('https://formspree.io/f/xdakqvwa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    });

    if (response.ok) {
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('error-message').style.display = 'none';
      this.reset();
    } else {
      throw new Error('Error en el envío');
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
  }
});