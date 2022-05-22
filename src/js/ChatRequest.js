export default class ChatRequest {
  constructor(url) {
    this.url = url;
    this.urlUsers = `${this.url}users`;
    this.urlMessages = `${this.url}messages`;
    this.contentTypeHeader = { 'Content-Type': 'application/json;charset=utf-8' };

    this.getReq = 'GET';
    this.postReq = 'POST';
    this.deleteReq = 'DELETE';
    this.putReq = 'PUT';
    this.allUsers = 'allUsers';
    this.allMessages = 'allMessages';
    this.createUser = 'createUser';
    this.createMessage = 'createMessage';
    this.removeUser = 'removeUser';
    this.checkUser = 'checkUser';
    this.getError = 'getError';
    this.request = null;
  }
}
