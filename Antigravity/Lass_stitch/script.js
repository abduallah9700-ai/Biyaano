document.addEventListener('DOMContentLoaded', () => {
  // Smooth reveal for category images (simulating the architectural glow)
  const categoryCards = document.querySelectorAll('.category-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  categoryCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
    observer.observe(card);
  });

  // Masterworks offset effect on scroll
  const productOffset = document.querySelector('.product-offset');
  if (productOffset && window.innerWidth > 1024) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const offsetTop = productOffset.offsetTop;
      
      // Add subtle parallax to the offset product
      if(scrollY > offsetTop - windowHeight) {
          const move = (scrollY - (offsetTop - windowHeight)) * 0.05;
          productOffset.style.transform = `translateY(${80 - move}px)`;
      }
    });
  }
});
