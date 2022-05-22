export default class ChatUser {
  constructor() {
    this.user = null;
  }

  getUser(user) {
    const userItem = document.createElement('li');
    userItem.className = 'chat-item user-item';
    userItem.setAttribute('id', user.id);
    const userBox = document.createElement('div');
    userBox.className = 'user-box';
    const userCheckBox = document.createElement('div');
    userCheckBox.className = 'user-check-box';
    const userLabel = document.createElement('label');
    userLabel.className = 'user-label';
    const userCheck = document.createElement('input');
    userCheck.className = 'user-check';
    userCheck.setAttribute('type', 'checkbox');
    if (user.checked && user.checked === true) {
      userCheck.setAttribute('checked', 'true');
    }
    const userSign = document.createElement('div');
    userSign.className = 'user-sign';
    const userNameBox = document.createElement('div');
    userNameBox.className = 'user-name-box';
    const userName = document.createElement('h5');
    userName.className = 'user-name';
    userName.style.color = user.color;
    userName.textContent = (user.status === 'user') ? `YOU (${user.name})` : user.name;
    const userColorBox = document.createElement('div');
    userColorBox.className = 'user-color-box';
    userColorBox.style.backgroundColor = user.color;
    const userButtonBox = document.createElement('div');
    userButtonBox.className = 'user-button-box';
    const userDeleteButton = document.createElement('button');
    userDeleteButton.className = 'user-delete-button';
    userDeleteButton.setAttribute('type', 'submit');
    userDeleteButton.textContent = 'Delete';
    userLabel.append(userCheck);
    userLabel.append(userSign);
    userCheckBox.append(userLabel);
    userNameBox.append(userName);
    userButtonBox.append(userDeleteButton);
    userBox.append(userCheckBox);
    userBox.append(userNameBox);
    userBox.append(userColorBox);
    userBox.append(userButtonBox);
    userItem.append(userBox);
    this.user = userItem;
    return this.user;
  }
}
