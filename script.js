function openMobileMenu() {
    const menu = document.getElementById('header-links');
    menu.style.display = 'flex';
    menu.classList.add('show');
}

function closeMobileMenu() {
    const menu = document.getElementById('header-links');
    menu.style.display = 'none';
    menu.classList.remove('show');
}

document.querySelectorAll('.header_links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    });
});

window.addEventListener('resize', () => {
    const menu = document.getElementById('header-links');
    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
        menu.classList.remove('show');
    } else {
        menu.style.display = 'none';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerOffset = 90; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (window.innerWidth <= 768) {
        document.getElementById('header-links').style.display = 'none';
      }
    }
  });
});

document.querySelectorAll('.section-projects_card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (!e.target.closest('a')) {
      const link = this.querySelector('.section-projects_card-footer a');
      if (link) {
        window.open(link.href, '_blank');
      }
    }
  });
});

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


