import ChatController from './ChatController.js';
import ChatUI from './ChatUI.js';
import ChatUser from './ChatUser.js';
import ChatMessage from './ChatMessage.js';
import ChatModal from './ChatModal.js';
import ChatSocket from './ChatSocket.js';
import ChatRequest from './ChatRequest.js';

const mainBox = document.getElementById('mainContainer');
const chatUI = new ChatUI();
const chatUser = new ChatUser();
const chatMessage = new ChatMessage();
const chatModal = new ChatModal();
const chatSocket = new ChatSocket('wss://chat-serb-heroku.herokuapp.com//ws');
const chatRequest = new ChatRequest('https://chat-serb-heroku.herokuapp.com/');

const сhatController = new ChatController(mainBox, chatUI, chatUser, chatMessage, chatModal, chatSocket, chatRequest);
сhatController.control();
