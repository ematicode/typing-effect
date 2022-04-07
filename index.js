const data = [
  { text: "modern frontend tricks", color: "#90DD7E" },
  { text: "inspirational ideas", color: "#78FAC6" },
  { text: "code packages 😊", color: "#F9F871" },
];

const typedTextElement = document.getElementById("typed-text");
const cursorElement = document.getElementById("cursor");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const typeText = async (textToType) => {
  let i = 0;
  while (i < textToType.length) {
    await delay(50);
    typedTextElement.innerHTML += textToType.charAt(i);
    i++;
  }

  await delay(2000);

  while (i > 0) {
    await delay(50);
    typedTextElement.innerHTML = typedTextElement.innerHTML.slice(0, -1);
    i--;
  }

  await delay(100);
};

const startTextTypingEffect = async () => {
  let i = 0;
  while (i < data.length) {
    typedTextElement.style.color = data[i].color;
    cursorElement.style.backgroundColor = data[i].color;
    await typeText(data[i].text);
    i++;
    if (i >= data.length) {
      i = 0;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    startTextTypingEffect();
  }, 500);
});
