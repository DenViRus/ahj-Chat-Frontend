export default class ChatSocket {
  constructor(url) {
    this.url = url;
    this.allcolors = 'allcolors';
    this.checkUserName = 'checkUserName';
    this.allUsers = 'allUsers';
    this.allMessages = 'allMessages';
    this.createUser = 'createUser';
    this.createMessage = 'createMessage';
    this.removeUser = 'removeUser';
    this.checkUser = 'checkUser';
    this.getError = 'getError';
    this.ws = new WebSocket(url);
    this.messageData = null;
  }

  getCheckUserName = (formData) => {
    const params = JSON.stringify({
      event: this.checkUserName,
      data: {
        name: formData.get('name'),
      },
    });
    this.ws.send(params);
  };

  getAllUsers = () => {
    const params = JSON.stringify({
      event: this.allUsers,
    });
    this.ws.send(params);
  };

  getAllMessages = () => {
    const params = JSON.stringify({
      event: this.allMessages,
    });
    this.ws.send(params);
  };

  getCreateUser = (formData) => {
    const params = JSON.stringify({
      event: this.createUser,
      data: {
        name: formData.get('name'),
        color: formData.get('modalRadio'),
        status: 'user',
      },
    });
    this.ws.send(params);
  };

  getCreateMessage = (formData) => {
    const params = JSON.stringify({
      event: this.createMessage,
      data: {
        id: formData.get('id'),
        text: formData.get('message'),
      },
    });
    this.ws.send(params);
  };

  getRemoveUser = (formData) => {
    const params = JSON.stringify({
      event: this.removeUser,
      data: {
        id: formData.get('id'),
      },
    });
    this.ws.send(params);
  };

  getCheckUser = (formData) => {
    const params = JSON.stringify({
      event: this.checkUser,
      data: {
        id: formData.get('id'),
      },
    });
    this.ws.send(params);
  };
}
