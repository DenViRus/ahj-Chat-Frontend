// const urlUsers = 'http://localhost:7070/users';
// const urlMessages = 'http://localhost:7070/messages';
// const contentTypeHeader = { 'Content-Type': 'application/json;charset=utf-8' };

// const getReq = 'GET';
// const postReq = 'POST';
// const deleteReq = 'DELETE';
// const putReq = 'PUT';

// const allUsers = 'allUsers';
// const allMessages = 'allMessages';
// const createUser = 'createUser';
// const createMessage = 'createMessage';
// const removeUser = 'removeUser';
// const checkUser = 'checkUser';
// const getError = 'getError';

// const getAllUsers = async () => {
//   const response = await fetch(urlUsers);
//   if (response.status >= 200 && response.status < 300) {
//     const data = await response.json();
//     console.log(data);
//     return;
//   }
//   console.log(`ERROR!!, ${response}, ${response.status}`);
// };
// // getAllUsers();

// const getAllMessages = async () => {
//   const response = await fetch(urlMessages);
//   if (response.status >= 200 && response.status < 300) {
//     const data = await response.json();
//     console.log(data);
//     return;
//   }
//   console.log(`ERROR!!, ${response}, ${response.status}`);
// };
// // getAllMessages();

// const createUserFormData = new FormData();
// createUserFormData.set('name', 'Vasya');
// createUserFormData.set('color', 'red');
// createUserFormData.set('status', 'user');

// const getCreateUser = async (formData) => {
//   const createParams = {
//     name: formData.get('name'),
//     color: formData.get('color'),
//     status: formData.get('status'),
//   };
//   const response = await fetch(urlUsers, {
//     method: postReq,
//     headers: contentTypeHeader,
//     body: JSON.stringify(createParams),
//   });
//   if (response.status >= 200 && response.status < 300) {
//     const data = await response.json();
//     console.log(data);
//     return;
//   }
//   console.log(`ERROR!!, ${response.json()}, ${response.status}`);
// };
// // getCreateUser(createUserFormData);

// const createMessageID = '78ca1a25-465a-4f9c-ac02-748fc353465e';
// const createMessageFormData = new FormData();
// createMessageFormData.set('text', 'Hello, guys!');

// const getCreateMessage = async (id, formData) => {
//   const createParams = {
//     text: formData.get('text'),
//   };
//   const response = await fetch(`${urlMessages}/${id}`, {
//     method: postReq,
//     headers: contentTypeHeader,
//     body: JSON.stringify(createParams),
//   });
//   if (response.status >= 200 && response.status < 300) {
//     const data = await response.json();
//     console.log(data);
//     return;
//   }
//   console.log(`ERROR!!, ${response.json()}, ${response.status}`);
// };
// // getCreateMessage(createMessageID, createMessageFormData);

// const checkID = '78ca1a25-465a-4f9c-ac02-748fc353465e';

// const getCheckUser = async (id) => {
//   const response = await fetch(`${urlUsers}/${id}`, {
//     method: putReq,
//     headers: contentTypeHeader,
//   });
//   if (response.status >= 200 && response.status < 300) {
//     const data = await response.json();
//     console.log(data);
//     return;
//   }
//   console.log(`ERROR!!, ${response.json()}, ${response.status}`);
// };
// // getCheckUser(checkID);

// const deleteID = '5cc34ac0-6fff-48b5-8b29-228479265188';

// const getRemoveUser = async (id) => {
//   const response = await fetch(`${urlUsers}/${id}`, {
//     method: deleteReq,
//     headers: contentTypeHeader,
//   });
//   if (response.status >= 200 && response.status < 300) {
//     const data = await response.json();
//     console.log(data);
//     return;
//   }
//   console.log(`ERROR!!, ${response.json()}, ${response.status}`);
// };
// // getRemoveUser(deleteID);

// // ////////=======Sockets========////////////

// const ws = new WebSocket('ws://localhost:7070/ws');

// const wsCreateUserFormData = new FormData();
// wsCreateUserFormData.set('name', 'Nina');
// wsCreateUserFormData.set('color', 'blue');
// wsCreateUserFormData.set('status', 'user');
// const wsCreateUser = (formData) => {
//   const params = JSON.stringify({
//     event: createUser,
//     data: {
//       name: formData.get('name'),
//       color: formData.get('color'),
//       status: formData.get('status'),
//     },
//   });
//   ws.send(params);
// };

// const wsCreateMessageFormData = new FormData();
// wsCreateMessageFormData.set('id', 'c72542c7-d1b3-4070-844a-a37d35a373be');
// wsCreateMessageFormData.set('text', 'War!!!');
// const wsCreateMessage = (formData) => {
//   const params = JSON.stringify({
//     event: createMessage,
//     data: {
//       id: formData.get('id'),
//       text: formData.get('text'),
//     },
//   });
//   ws.send(params);
// };

// const wsCheckUserFormData = new FormData();
// wsCheckUserFormData.set('id', 'c72542c7-d1b3-4070-844a-a37d35a373be');
// const wsCheckUser = (formData) => {
//   const params = JSON.stringify({
//     event: checkUser,
//     data: {
//       id: formData.get('id'),
//     },
//   });
//   ws.send(params);
// };

// const wsRemoveUserFormData = new FormData();
// wsRemoveUserFormData.set('id', 'c72542c7-d1b3-4070-844a-a37d35a373be');
// const wsRemoveUser = (formData) => {
//   const params = JSON.stringify({
//     event: removeUser,
//     data: {
//       id: formData.get('id'),
//     },
//   });
//   ws.send(params);
// };

// const wsOpenListener = () => {
//   console.log('Connected!!');
//   // wsCreateUser(wsCreateUserFormData);
//   // wsCreateMessage(wsCreateMessageFormData);
//   // wsCheckUser(wsCheckUserFormData);
//   // wsRemoveUser(wsRemoveUserFormData);
// };
// ws.addEventListener('open', wsOpenListener);

// const wsMessageListener = (event) => {
//   const data = JSON.parse(event.data);

//   if (data.event === allUsers) {
//     const { users } = data;
//     console.log(users);
//   }

//   if (data.event === allMessages) {
//     const { messages } = data;
//     console.log(messages);
//   }

//   if (data.event === createMessage) {
//     const { message } = data;
//     console.log(message);
//   }

//   if (data.event === createUser) {
//     const { user } = data;
//     console.log(user);
//   }

//   if (data.event === checkUser) {
//     const { user } = data;
//     console.log(user);
//   }

//   if (data.event === removeUser) {
//     const { user } = data;
//     console.log(user);
//   }

//   if (data.event === getError) {
//     const { error } = data;
//     console.log(error);
//   }
// };
// ws.addEventListener('message', wsMessageListener);

// // ws.addEventListener('close', (evt) => {
// //   console.log('connection closed', evt);
// // });

// // ws.addEventListener('error', () => {
// //   console.log('error');
// // });

// // setInterval(() => {
// //   try {
// //     ws.send('hello');
// //   } catch (e) {
// //     console.log('err');
// //     console.log(e);
// //   }
// // }, 5000);
