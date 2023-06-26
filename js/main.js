// Chat Icon
const chatIcon = document.getElementById('chat-icon');
// Chatbot Container
const chatbotContainer = document.getElementById('chatbot-container');
// Close Button
const closeBtn = document.getElementById('close-btn');
// Message Input
const messageInput = document.getElementById('message-input');
// Send Button
const sendButton = document.getElementById('send-btn');
// Chatbox
const chatbox = document.getElementById('chatbox');

// Toggle chatbot visibility
function toggleChatbot() {
  chatbotContainer.classList.toggle('show');
  closeBtn.style.display = 'block';
  chatIcon.style.display = 'none';
  
  // Generate welcome message
  const welcomeMessage = generateWelcomeMessage();
  addMessage(welcomeMessage, 'incoming');
}
// Function to generate a welcome message
function generateWelcomeMessage() {
  // Replace this with your own welcome message
  const welcomeIcon = ' Welcome! <i class="fas fa-handshake"></i>'; // Add the icon HTML here
  const welcomeMessage = ' How can I assist you today?';
  return `${welcomeIcon} ${welcomeMessage}`;
}
// Close chatbot
function closeChatbot() {
  chatbotContainer.classList.remove('show');
  closeBtn.style.display = 'none';
  chatIcon.style.display = 'block';
}


// Function to generate a response based on user input
function generateResponse(message) {
  // Replace this with your own logic to generate appropriate responses
  if (message.includes('hello')) {
    return 'Hello! How can I assist you?';
  } else if (message.includes('how are you')) {
    return 'I am a chatbot. I do not have feelings, but thank you for asking!';
  } else if (message.includes('goodbye')) {
    return 'Goodbye! Have a great day!';
  } else {
    return 'I did not understand. Can you please rephrase?';
  }
}

// Add a new message to the chatbox
function addMessage(message, type) {
  const chat = document.createElement('li');
  chat.classList.add('chat', type);
  chat.innerHTML = `<p>${message}</p>`;
  chatbox.appendChild(chat);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Handle user input and generate responses
function handleUserInput() {
  const message = messageInput.value.trim();
  if (message !== '') {
    addMessage(message, 'outgoing');
    messageInput.value = '';

    // Generate response (replace with your own logic)
    const response = generateResponse(message);

    // Add the response to the chatbox
    setTimeout(() => {
      addMessage(response, 'incoming');
    }, 500);
  }
}

// Event listeners
chatIcon.addEventListener('click', toggleChatbot); // Add event listener for click event
closeBtn.addEventListener('click', closeChatbot);
sendButton.addEventListener('click', handleUserInput);
messageInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleUserInput();
  }
});
