document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('messageButton');
    const messageContainer = document.getElementById('messageContainer');
    const messageText = document.getElementById('messageText');
  
    button.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/message');
        const data = await response.json();
        messageText.textContent = data.message;
        messageContainer.classList.add('show');
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const starColors = ['white', 'blue', 'red'];
    const galaxyBackground = document.querySelector('.galaxy-background');
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.classList.add(starColors[Math.floor(Math.random() * starColors.length)]);
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      galaxyBackground.appendChild(star);
    }
  });
