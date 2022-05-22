export default class ChatController {
  constructor(box, ui, user, message, modal, socket, request) {
    this.box = box;
    this.ui = ui;
    this.user = user;
    this.message = message;
    this.modal = modal;
    this.socket = socket;
    this.request = request;
    this.modalBox = null;
    this.errorMessage = null;
    this.chat = null;
    this.userList = null;
    this.messageList = null;
    this.currentUser = null;
    this.currentUserID = null;
  }

  startModal(arr) {
    this.modalBox = this.modal.getModal(arr);
    this.box.append(this.modalBox);
  }

  validateName(form) {
    const input = form.querySelector('.name-input');
    const inputContainer = input.closest('.modal-container');
    if (input.value === '') {
      const errorText = 'Enter your nickname!';
      this.errorMessage = this.ui.getErrorMessage(errorText);
      inputContainer.append(this.errorMessage);
      input.classList.add('noValid');
      input.focus();
    } else if (!/[а-яА-ЯёЁa-zA-Z0-9]+/g.test(input.value)) {
      const errorText = 'Your nickname must include letters or numbers!!';
      this.errorMessage = this.ui.getErrorMessage(errorText);
      inputContainer.append(this.errorMessage);
      input.classList.add('noValid');
      input.focus();
    }
  }

  validateColor(form) {
    const radioBox = form.querySelector('.radio-box');
    const radioContainer = radioBox.closest('.modal-container');
    this.ui.removeError(radioContainer);
    const radios = [...radioContainer.querySelectorAll('.modal-radio')];
    const checkedRadio = radios.find((radio) => radio.checked);
    if (!checkedRadio) {
      const errorText = 'Сhoose your color!';
      this.errorMessage = this.ui.getErrorMessage(errorText);
      radioContainer.append(this.errorMessage);
      radioBox.classList.add('noValid');
    }
  }

  validateModal(form) {
    this.validateName(form);
    this.validateColor(form);
    const noValid2 = [...form.querySelectorAll('.noValid')];
    if (noValid2.length > 0) {
      return false;
    }
    return true;
  }

  startChat(form) {
    if (this.validateModal(form)) {
      this.chat = this.ui.getChat();
      this.modalBox.remove();
      this.modalBox = null;
      this.box.append(this.chat);
      this.socket.getAllUsers();
      this.socket.getAllMessages();
      const formData = new FormData(form);
      this.socket.getCreateUser(formData);
    }
  }

  validatemessage(form) {
    const input = form.querySelector('.message-input');
    const inputContainer = input.closest('.modal-container');
    if (input.value === '') {
      const errorText = 'Enter your message!';
      this.errorMessage = this.ui.getErrorMessage(errorText);
      inputContainer.append(this.errorMessage);
      input.classList.add('noValid');
      input.focus();
    }
  }

  validateMessageForm(form) {
    this.validatemessage(form);
    const noValid2 = [...form.querySelectorAll('.noValid')];
    if (noValid2.length > 0) {
      return false;
    }
    return true;
  }

  sendMessage(form) {
    if (this.validateMessageForm(form)) {
      const formData = new FormData(form);
      formData.set('id', this.currentUserID);
      this.socket.getCreateMessage(formData);
      const input = form.querySelector('.message-input');
      input.value = '';
    }
  }

  control() {
    const boxListener1 = (event) => {
      this.target = event.target;
      if (this.target.closest('.modal-button')) {
        event.preventDefault();
        const enterForm = this.modalBox.querySelector('.modal-form');
        const formData = new FormData(enterForm);
        this.socket.getCheckUserName(formData);
      }

      if (this.target.closest('.radio-sign')) {
        this.ui.removeError(this.target);
      }

      if (this.target.closest('.user-delete-button')) {
        event.preventDefault();
        const deleteItem = this.target.closest('.user-item');
        const deleteItemID = deleteItem.getAttribute('id');
        if (deleteItemID === this.currentUserID) {
          this.chat.remove();
          this.chat = null;
        }
        const formData = new FormData();
        formData.set('id', deleteItemID);
        this.socket.getRemoveUser(formData);
      }

      if (this.target.closest('.user-sign') || this.target.closest('.user-check')) {
        event.preventDefault();
        const checkItem = this.target.closest('.user-item');
        const checkItemID = checkItem.getAttribute('id');
        const formData = new FormData();
        formData.set('id', checkItemID);
        this.socket.getCheckUser(formData);
      }
    };
    this.box.addEventListener('click', boxListener1);

    const boxListener2 = (event) => {
      this.event = event;
      this.target = event.target;
      if (this.target.closest('.name-input')) {
        if (this.event.key === 'Enter') {
          return;
        }
        this.ui.removeError(this.target);
      }

      if (this.target.closest('.message-input')) {
        if (this.event.key === 'Enter') {
          return;
        }
        this.ui.removeError(this.target);
      }
    };
    this.box.addEventListener('keyup', boxListener2);

    const boxListener3 = (event) => {
      this.event = event;
      this.target = event.target;
      if (this.target.closest('.name-input')) {
        if (this.event.key === 'Enter') {
          this.event.preventDefault();
        }
      }

      if (this.target.closest('.message-input')) {
        if (this.event.key === 'Enter') {
          this.ui.removeError(this.target);
        }
      }
    };
    this.box.addEventListener('keydown', boxListener3);

    const boxListener4 = (event) => {
      this.target = event.target;
      if (this.target.closest('.message-form')) {
        const currentChec = this.currentUser.querySelector('.user-check');
        if (currentChec.checked) {
          event.preventDefault();
          const messageForm = this.target;
          this.sendMessage(messageForm);
        }
        event.preventDefault();
      }
    };
    this.box.addEventListener('submit', boxListener4);

    const wsMessageListener = (event) => {
      const data = JSON.parse(event.data);
      if (data.event === this.socket.allcolors) {
        const { colors } = data;
        this.startModal(colors);
      }
      if (data.event === this.socket.checkUserName) {
        const { error } = data;
        const form = this.modalBox.querySelector('.modal-form');
        const input = form.querySelector('.name-input');
        const inputContainer = input.closest('.modal-container');
        this.ui.removeError(inputContainer);
        if (error) {
          this.errorMessage = this.ui.getErrorMessage(error);
          inputContainer.append(this.errorMessage);
          input.classList.add('noValid');
          input.focus();
        }
        this.startChat(form);
      }
      if (data.event === this.socket.allUsers) {
        const { users } = data;
        this.userList = this.chat.querySelector('.user-list');
        for (const user of users) {
          const newUser = this.user.getUser(user);
          this.userList.append(newUser);
        }
      }
      if (data.event === this.socket.allMessages) {
        const { messages } = data;
        this.messageList = this.chat.querySelector('.message-list');
        for (const message of messages) {
          const newMessage = this.message.getMessage(message);
          this.messageList.append(newMessage);
        }
      }
      if (data.event === this.socket.createUser) {
        const { user } = data;
        this.currentUserID = user.status === 'user' ? user.id : null;
        const newUser = this.user.getUser(user);
        this.currentUser = user.status === 'user' ? newUser : null;
        this.userList.append(newUser);
      }
      if (data.event === this.socket.createMessage) {
        const { message } = data;
        const newMessage = this.message.getMessage(message);
        this.messageList.append(newMessage);
        newMessage.scrollIntoView(false);
      }
      if (data.event === this.socket.checkUser) {
        const { id } = data;
        const { checked } = data;
        const items = [...this.userList.querySelectorAll('.user-item')];
        const checkItem = items.find((item) => item.id === id);
        if (checkItem) {
          const currentChec = checkItem.querySelector('.user-check');
          if (checked && checked === true) {
            currentChec.setAttribute('checked', 'true');
          } else {
            currentChec.removeAttribute('checked');
          }
        }
      }
      if (data.event === this.socket.removeUser) {
        const { id } = data;
        const items = [...this.userList.querySelectorAll('.user-item')];
        const deleteItem = items.find((item) => item.id === id);
        if (deleteItem) {
          deleteItem.remove();
        }
      }
    };
    this.socket.ws.addEventListener('message', wsMessageListener);
  }
}
