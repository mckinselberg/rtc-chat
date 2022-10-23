const socket = io.connect('https://rtc-chat.onrender.com');

const message = document.getElementById('message');
const button = document.getElementById('send');
const username = document.getElementById('username');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  socket.emit('sendingMessage', {
    message: message.value,
    username: username.value,
  });
});

socket.on('broadcastMessage', (data) => {
  console.log(data);
  output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`;
});
