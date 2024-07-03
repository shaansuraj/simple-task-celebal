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
  