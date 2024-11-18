const passwordBox = document.getElementById('password');

function genPassword(length) {
  let password = '';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+=-[]{}<>/'
  const charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  passwordBox.value = password;
}