// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
const buttonChatbot = document.getElementById('open-close-chatbot')
let chatBotContainer = document.getElementById('chatbot-container')

buttonChatbot.addEventListener('click', function(event) {
	let buttonIcon = document.querySelector('#open-close-chatbot > i');
	let data = "hide"
	if (chatBotContainer.classList.contains('visible')) {
		chatBotContainer.classList.remove('visible');
		buttonIcon.className = "fa fa-comment"
	} else {
		chatBotContainer.classList.add('visible');
		buttonIcon.className = "fa fa-window-close"
		data = "show"
	} 
	window.parent.postMessage(data, "http://localhost:8080")
});

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
	message.setAttribute('sentTime', currentTime)
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text triangle-right right-top">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
	message.setAttribute('sentTime', currentTime)
  message.classList.add('chatbot-message','chatbot');
	message.innerHTML = `<div alt="Card image cap" class="chat-askllm-bubble prompt-answer-llm"> <div alt="Card image cap"
		class="icon-chat-llm icon-chat-eden"> <img height="30px" width="30px" src="assets/img/icons/EdenColors.svg" alt
		style="filter: brightness(0) invert(1)" /> </div> </div>
		<p class="chatbot-text triangle-left left-top">${response}</p>`
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "Hello, how can I help you today? 😊",
      "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
      "I'm here to assist you with any questions or concerns you may have. 📩",
      "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
      "What would you like to know? 🤔",
      "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
      "Is there anything specific you'd like to talk about? 💬",
      "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
      "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
      "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }
  

function	chatbotClickOpenClose(event) {
	event.preventDefault()
	console.log('ZEBI')
}