const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Hello",
  "Visit my notresponsive website: https://kkxyz.netlify.app/",
   "Follow my github  Username: kevin ",
   "fb: https://www.facebook.com/profile.php?id=100081187181142",
  "Di kita mainindihan",
  "Poggers",
  "Bot lang ako ah :))",
  "POCKYNAKULAYROSAS",
  "Beep beep beep",
"Ang sabi ng jeep",
"Beep beep beep beep beep",
"Beep beep beep",
"Ang sabi ng jeep",
"Beep beep beep beep beep",
"Beep beep beep",
"Ang sabi ng jeep",
"Beep beep beep beep beep",
"I got black, I got white, what you want?",

  "Hi",
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://cdn-icons-png.flaticon.com/512/3188/3188217.png";
const PERSON_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAaVBMVEX///8AAABXV1cwMDD8/Pzg4OANDQ3FxcXPz89HR0cXFxf19fVxcXGJiYmgoKA0NDSsrKwiIiJ6enrn5+e4uLiXl5fd3d3Dw8MSEhIbGxttbW1cXFw8PDxhYWEpKSmSkpJNTU2BgYGmpqYFJMyTAAADeUlEQVR4nO2b63qyMBCEG0UQEVC04lnp/V9kP8tj64Ecdpzl++N7AZ1pSDab3fXjA2VUVIf0GMfH9FAVI/jPgKzy0txR5qse5Yuh6WBY9CSflF3yP8uQ9CA/GtjkLwzUN8MsdukbE8909U9u+QsnTf2pX9+YqZp8tAvRN2YXKRnYhukbs9XRL0L1jVGJCGPP/r8lHvP1s3m4vjHzjG7AGX+eGbD1xzJ9Y9gf4Sw1cObqJ1J9Y7gXUyo3kDL1xTvgAnMXVIiBimigMwPyMeTpLxB9YxY0A5+YgU+aAXEQaDnTDEwwAxOWfoTpG8NKTMA9yNuFUBi6wApFS9TAkmRAkIvdw8rMwDDACwQz1ADrlQQkAy2slGCFGmCVDDLUAC01FrwIbolZ+lg6wEwIoISImRLVmIGaZiBaI/pr4itd+C5rYb7OvhADX0QDGZATTagP5IDi1CPcYlW2kepvyBUC8ZXMy8lbIlGBxJg5vVImzMtY2dgNjUS/4euL3kdnDX1BnUyhRvbDOPBKWCtUCVtWQWswV2zeLAJSkyGvLNBB5q1WpUrf/0pUORPEuNIq1f/hahrpt4x+qC1ts5KXg3mI6u3T7bjZ1vqrf0syPf7uhvg47aNj+Ew2XhbFcqy879+8eWNjUc+KU1NVzamY1ao34BNRne/KhzspLnd5P6EwyVPrfRinuXJEXDXenGjeqCVEUbH3qbfsC5VvMTuGyV848gc5ksD//ncVuJthBZRIBry9sAgenbhnS4oOOVin/Hcsc4J8BhWorgxeTlZG1rmtMMoX8+QE7Nj9MXnpOBTw5/8jxhs3UdDglJ8pGBgzsGP7zBnaihEwNWEjRdaAtP4twIAb3CzsRrwT4U6ZDeFpHL18/h+ZiCJSBnaJXAwlR+Gl+G9D0MBoNPQF5dMRIQB3EYdug8DRUTm7MH14YMJPWAmVGIIfCRpwgwc2QghpI7yYArkp/fpQizAcbzNR2huS4u0lAQ1CGb52osIlcI9nqEAxBlxxxwJqGtSNMzmK6GnAMxPXNlQNQldcwaiHL+D+Bupn4ILjHMCTizLsZQN4ak2GvYAEVkKk2H+CIixEoeytBsRzGhgbmz48NSfF9kLo4SJosV0HPR0C+zGAh1el2CZs8r4M2MqH4NigHNugYU9xyB6JDn0ZOFgMqDzKu7A91N8G3gbeBv6LgW8qfzNtY1bmaQAAAABJRU5ErkJggg==";
const BOT_NAME = "JABOT NI KEVIN";
const PERSON_NAME = "User";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
`;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
