/* eslint-disable no-undef */
import '@testing-library/jest-dom';

test('1 + 1 equals 2', () => {
  expect(1 + 1).toEqual(2);
});

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  element.innerHTML = `
  <div id="chat-app">
    <h2 class="text">Real-Time Chat</h2>
    <input id="username" type="text" placeholder="Username" />
    <div id="chat-window">
        <div id="output"></div>
    </div>
    <input id="message" type="text" placeholder="Message" />
    <button id="send">Send</button>
  </div>`;
  document.body.appendChild(element);
  expect(element).toBeVisible();
  expect(element).not.toBeNull();
  expect(getByText('Real-Time Chat')).toBeVisible();
});
