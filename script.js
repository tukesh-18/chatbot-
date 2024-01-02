function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value;

  if (message.trim() === "") return;

  const chatMessages = document.getElementById("chat-messages");
  const userMessage = `<div class="user-message">${message}</div>`;
  const botResponse = generateBotResponse(message);

  chatMessages.innerHTML += userMessage;
  setTimeout(() => {
    chatMessages.innerHTML += botResponse;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);

  userInput.value = "";
}

function generateBotResponse(message) {
  const lowerCaseMessage = message.toLowerCase();
  let response = "<div class='bot-message'>I'm sorry, I don't understand. Please ask another question.</div>";

  // SciAstra-related questions and responses (sample)
  if (lowerCaseMessage.includes("about")) {
    response = "<div class='bot-message'>SciAstra is a leading research organization specializing in...</div>";
  } else if (lowerCaseMessage.includes("services")) {
    response = "<div class='bot-message'>Our services include...</div>";
  } else if (lowerCaseMessage.includes("contact")) {
    response = "<div class='bot-message'>You can contact us at contact@sciastra.com</div>";
  } else if (lowerCaseMessage.includes("partnerships")) {
    response = "<div class='bot-message'>We collaborate with various institutions for...</div>";
  }
 

  return response;
}




