// chat.js

function startChat(version) {
  toggleBackgroundBlur(true);

  const userInput = prompt(`Mulai chat dengan ${version} AI:`);
  if(!userInput) {
    toggleBackgroundBlur(false);
    return;
  }

  queryAI(version, userInput).then(response => {
    alert(`${version} AI: ${response}`);
    toggleBackgroundBlur(false);
  });
}
