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
const chatSocket = new ChatSocket('ws://localhost:7070/ws');
const chatRequest = new ChatRequest('http://localhost:7070/');

const сhatController = new ChatController(mainBox, chatUI, chatUser, chatMessage, chatModal, chatSocket, chatRequest);
сhatController.control();
