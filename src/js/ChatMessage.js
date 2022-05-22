export default class ChatMessage {
  constructor() {
    this.message = null;
  }

  getMessage(message) {
    const messageItem = document.createElement('li');
    messageItem.className = 'chat-item message-item';
    messageItem.setAttribute('data-user-id', message.userId);
    if (message.userStatus === 'user') {
      messageItem.style.marginRight = 0;
      messageItem.style.marginLeft = 'auto';
    }
    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    const messageData = document.createElement('div');
    messageData.className = 'message-data';
    const messageUserBox = document.createElement('div');
    messageUserBox.className = 'message-user-box';
    const messageUserName = document.createElement('h6');
    messageUserName.className = 'message-user-name';
    messageUserName.style.color = message.userColor;
    messageUserName.textContent = message.userName;
    messageUserName.textContent = (message.userStatus === 'user') ? `YOU (${message.userName})` : message.userName;
    const messageCreatedBox = document.createElement('div');
    messageCreatedBox.className = 'message-created-box';
    const messageUserCreated = document.createElement('span');
    messageUserCreated.className = 'message-user-created';
    messageUserCreated.textContent = message.created;
    const messageColorBox = document.createElement('div');
    messageColorBox.className = 'message-color-box';
    messageColorBox.style.backgroundColor = message.userColor;
    const messageText = document.createElement('div');
    messageText.className = 'message-text';
    const messageDescription = document.createElement('p');
    messageDescription.className = 'message-description';
    messageDescription.style.color = message.userColor;
    messageDescription.textContent = message.userText;
    messageUserBox.append(messageUserName);
    messageCreatedBox.append(messageUserCreated);
    messageData.append(messageColorBox);
    messageData.append(messageUserBox);
    messageData.append(messageCreatedBox);
    messageText.append(messageDescription);
    messageBox.append(messageData);
    messageBox.append(messageText);
    messageItem.append(messageBox);
    this.message = messageItem;
    return this.message;
  }
}
