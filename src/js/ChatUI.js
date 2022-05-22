export default class ChatUI {
  constructor() {
    this.chat = null;
    this.errorMessage = null;
  }

  getChat() {
    const chatBox = document.createElement('div');
    chatBox.className = 'chat-box';
    chatBox.setAttribute('id', 'chatBox');
    const userContainer = document.createElement('div');
    userContainer.className = 'chat-container user-container';
    const userList = document.createElement('ul');
    userList.className = 'chat-list user-list';
    const messageContainer = document.createElement('div');
    messageContainer.className = 'chat-container message-container';
    const messageList = document.createElement('ul');
    messageList.className = 'chat-list message-list';
    const messageForm = document.createElement('form');
    messageForm.className = 'message-form';
    const messageLabel = document.createElement('label');
    messageLabel.className = 'modal-container message-label';
    const messageInput = document.createElement('input');
    messageInput.className = 'message-input';
    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('autocomplete', 'off');
    messageInput.setAttribute('maxLength', '50');
    messageInput.setAttribute('placeholder', 'Enter your message');
    messageLabel.append(messageInput);
    messageForm.append(messageLabel);
    userContainer.append(userList);
    messageContainer.append(messageList);
    messageContainer.append(messageForm);
    chatBox.append(userContainer);
    chatBox.append(messageContainer);
    this.chat = chatBox;
    return this.chat;
  }

  getErrorMessage(text) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-span';
    errorSpan.textContent = text;
    this.errorMessage = errorSpan;
    return this.errorMessage;
  }

  removeError(target) {
    const container = target.closest('.modal-container');
    this.errorMessage = container.querySelector('.error-span');
    const noValid = container.querySelector('.noValid');
    if (this.errorMessage) {
      this.errorMessage.remove();
      noValid.classList.remove('noValid');
    }
  }
}
