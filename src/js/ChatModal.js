export default class ChatModal {
  constructor() {
    this.modal = null;
  }

  getModal(arr) {
    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box';
    modalBox.setAttribute('id', 'modalBox');
    const modalForm = document.createElement('form');
    modalForm.className = 'modal-form';
    const nameLabel = document.createElement('label');
    nameLabel.className = 'modal-container name-label';
    nameLabel.textContent = 'Enter your nickname';
    const nameInput = document.createElement('input');
    nameInput.className = 'name-input';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('autocomplete', 'off');
    nameInput.setAttribute('maxLength', '10');
    const radioContainer = document.createElement('div');
    radioContainer.className = 'modal-container';
    radioContainer.textContent = 'Сhoose your color';
    const radioBox = document.createElement('div');
    radioBox.className = 'radio-box';
    for (const item of arr) {
      const radioLabel = document.createElement('label');
      radioLabel.className = 'radio-label';
      const modalRadio = document.createElement('input');
      modalRadio.className = 'modal-radio';
      modalRadio.setAttribute('type', 'radio');
      modalRadio.setAttribute('name', 'modalRadio');
      modalRadio.setAttribute('value', item);
      const radioSign = document.createElement('div');
      radioSign.className = 'radio-sign';
      radioSign.style.backgroundColor = item;
      radioLabel.append(modalRadio);
      radioLabel.append(radioSign);
      radioBox.append(radioLabel);
    }
    const modalButton = document.createElement('button');
    modalButton.className = 'modal-button';
    modalButton.setAttribute('type', 'submit');
    modalButton.textContent = 'Enter chat';
    nameLabel.append(nameInput);
    radioContainer.append(radioBox);
    modalForm.append(nameLabel);
    modalForm.append(radioContainer);
    modalForm.append(modalButton);
    modalBox.append(modalForm);
    this.modal = modalBox;
    return this.modal;
  }
}
